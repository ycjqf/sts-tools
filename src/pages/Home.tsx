import {
  CriterionModifier,
  FindPerformersDocument,
  FindPerformersResultType,
  PerformerUpdateDocument,
  useFindPerformersQuery,
  useFindTagsQuery,
} from "@dist/graphql";
import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useClient } from "urql";

import CatalogueCharts, { FinalChartResultType } from "@/components/CatalogueCharts";
import CatalogueFilters, {
  PerformerCatalogueSelectorsType,
} from "@/components/CatalogueFilters";
import HomeStatus from "@/components/HomeStatus";
import SkinPeek from "@/components/SkinPeek";
import { useStore } from "@/configs";

export const HomeContext = createContext<PerformerCatalogueSelectorsType>([]);

export default function Home() {
  document.title = "sts-tools | home";

  const client = useClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const tagIdsInRoute = searchParams.get("ids")?.split(".") || [];
  const [pageStatus, setPageStatus] = useState<"loading" | "error" | "ready">("loading");
  const [statusMsg, setStatusMsg] = useState("loading data");
  const [finalChartResults, setFinalChartResults] = useState<FinalChartResultType[]>([]);
  const performerCatalogueTagId = useStore((state) => state.performerCatalogueTagId);
  const [performerCatalogueSelectors, setPerformerCatalogueSelectors] =
    useState<PerformerCatalogueSelectorsType>([]);

  const [performerCatalogueResult] = useFindTagsQuery({
    variables: {
      tag_filter: {
        parents: {
          modifier: CriterionModifier.IncludesAll,
          value: [performerCatalogueTagId!],
        },
      },
    },
  });
  const [filteredPerformersResult] = useFindPerformersQuery({
    variables: {
      filter: { per_page: -1 },
      performer_filter: {
        tags: {
          modifier: CriterionModifier.IncludesAll,
          value: tagIdsInRoute,
        },
      },
    },
  });
  const isCatalogueFetched =
    !performerCatalogueResult.fetching &&
    !performerCatalogueResult.error &&
    performerCatalogueResult.data;
  const isPerformersFetched =
    !filteredPerformersResult.fetching &&
    !filteredPerformersResult.error &&
    filteredPerformersResult.data;

  function mixIds(addIds: string[], removeIds: string[]) {
    const newIds = Array.from(
      new Set(tagIdsInRoute.filter((id) => !removeIds.includes(id)).concat(addIds))
    );
    console.log(newIds);
    if (newIds.length === 0) setSearchParams({});
    else
      setSearchParams({
        ids: newIds.join("."),
      });
  }

  // the first action
  // set selectors values when catalogue is fetched
  useEffect(() => {
    if (!isCatalogueFetched) return;

    const newPerformerCatalogueSelectors: PerformerCatalogueSelectorsType =
      // "tags" is catalogue level list, like "age","shape"
      performerCatalogueResult.data!.findTags.tags.map((catalogue) => {
        // here "catalogue" contains parameter level tags in its "children",like "old","young"
        const { children, ...omitedCatalogueFrom } = catalogue;
        return {
          catalogue: omitedCatalogueFrom,
          options: children,
        };
      });
    setPerformerCatalogueSelectors(newPerformerCatalogueSelectors);
  }, [isCatalogueFetched]);

  // init chart default values when catalogues and performers both fetched
  // only this step is done means this page is ready to display
  // triggered after filter values set
  useEffect(() => {
    if (!isCatalogueFetched || !isPerformersFetched) return;

    const performers = filteredPerformersResult.data!.findPerformers.performers;

    const chartDatas: FinalChartResultType[] = performerCatalogueSelectors.map((selector) => {
      // arrays with name and corresponding count in an object of performers for each
      // parameter of this catalogue
      const types = selector.options
        .map((option) => {
          const shouldContainedTagIds = Array.from(new Set([...tagIdsInRoute, option.id]));
          const performersWithThoseTags = performers.filter(
            (p) =>
              p.tags.map((t) => t.id).filter((value) => shouldContainedTagIds.includes(value))
                .length === shouldContainedTagIds.length
          );
          return {
            type: option.name,
            count: performersWithThoseTags.length,
          };
        })
        // filter those with count of 0
        .filter((t) => t.count !== 0);

      // cobine catalogue name and its count array, to a new array to map charts
      return {
        catalogue: selector.catalogue.name,
        types,
      };
    });

    // reorder sort in chart
    chartDatas.forEach((r) => r.types.sort((a, b) => b.count - a.count));
    // filter those with type count of 1
    setFinalChartResults(chartDatas.filter((t) => t.types.length !== 1));

    // fix performer tags
    // only check for filter ids empty
    if (tagIdsInRoute.length > 0) {
      setPageStatus("ready");
      return;
    }
    // for each catalogue eg "age"

    performerCatalogueSelectors.map((selector) => {
      // for each performer, checker whether contain just one for each
      const defaultTag = selector.options.find(
        (o) => o.name === `#${selector.catalogue.name.toLowerCase()}`
      );
      if (!defaultTag) {
        console.log(`no tag with "#${selector.catalogue.name.toLowerCase()}" found, skip`);
        return;
      }

      client
        .query(FindPerformersDocument, {
          filter: { per_page: -1 },
          performer_filter: {
            tags: {
              modifier: CriterionModifier.Excludes,
              value: [...selector.options.map((o) => o.id)],
              depth: 0,
            },
          },
        })
        .toPromise()
        .then((result) => {
          const data = result.data.findPerformers as FindPerformersResultType | undefined;
          if (!data) {
            console.log(
              `error searching performers exclude parameter of ${selector.catalogue.name}, skipped`
            );
            return;
          }

          if (data.count === 0) return;
          console.log(`${data.count} performers missing ${selector.catalogue.name}, adding`);
          data.performers.map((p) => {
            client
              .mutation(PerformerUpdateDocument, {
                input: {
                  id: p.id,
                  tag_ids: [...p.tags.map((t) => t.id), defaultTag.id],
                },
              })
              .toPromise()
              .then((result) => {
                if (result.error) {
                  console.log(`failed to update "${p.name}" ${result.error.message}`);
                }
                if (result.data) {
                  console.log(`successfully updated "${p.name}"`);
                }
              })
              .catch((error) => {
                console.log(`failed to update "${p.name}"`);
                console.log(error);
              });
          });
        });
    });
    setPageStatus("ready");
  }, [isPerformersFetched, isCatalogueFetched, performerCatalogueSelectors]);

  // set page as error when any fetch failed
  useEffect(() => {
    if (performerCatalogueResult.error) {
      setPageStatus("error");
      setStatusMsg(performerCatalogueResult.error.message);
      return;
    }
    if (filteredPerformersResult.error) {
      setPageStatus("error");
      setStatusMsg(filteredPerformersResult.error.message);
      return;
    }
  }, [filteredPerformersResult, performerCatalogueResult]);

  return (
    <div className="min-h-screen">
      {pageStatus !== "ready" ? (
        <HomeStatus
          title={`${pageStatus.slice(0, 1).toUpperCase()}${pageStatus.slice(1)}`}
          message={statusMsg}
        />
      ) : (
        <HomeContext.Provider value={performerCatalogueSelectors}>
          <div>
            <CatalogueFilters
              activeIds={tagIdsInRoute}
              filters={performerCatalogueSelectors}
              onTagClicked={mixIds}
            />
            <CatalogueCharts finalChartResults={finalChartResults} />

            <div className="grid grid-cols-1 gap-[2px] md:grid-cols-3 xl:grid-cols-6">
              {filteredPerformersResult.data?.findPerformers.performers.map((p) => (
                <SkinPeek
                  filteredTagIds={tagIdsInRoute}
                  key={p.id}
                  performer={p}
                  onTagClick={(tag) => {
                    if (tagIdsInRoute.includes(tag.id)) mixIds([], [tag.id]);
                    else mixIds([tag.id], []);
                  }}
                />
              ))}
            </div>
          </div>
        </HomeContext.Provider>
      )}
    </div>
  );
}
