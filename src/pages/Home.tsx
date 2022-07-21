import { CriterionModifier, useFindPerformersQuery, useFindTagsQuery } from "@dist/graphql";
import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import CatalogueFilters, {
  PerformerCatalogueSelectorsType,
} from "@/components/CatalogueFilters";
import HomeStatus from "@/components/HomeStatus";
import SkinPeek from "@/components/SkinPeek";
import { useStore } from "@/configs";

export default function Home() {
  document.title = "sts-tools | home";

  const [pageStatus, setPageStatus] = useState<"loading" | "error" | "ready">("loading");
  const [statusMsg, setStatusMsg] = useState("loading data");
  const [finalChartResult, setFinalChartResult] = useState<FinalChartResult[]>([]);
  const performerCatalogueTagId = useStore((state) => state.performerCatalogueTagId);
  const [performerCatalogueSelectors, setPerformerCatalogueSelectors] =
    useState<PerformerCatalogueSelectorsType>([]);
  const performerCatalogueSelectedIds: string[] = performerCatalogueSelectors
    .map((t) => t.activeOption?.id)
    .filter((t) => typeof t == "string") as string[];

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
          value: performerCatalogueSelectedIds,
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

  // set selectors default values when catalogue is fetched
  // TODO if wanna restore filtered tag ids from url, here is a good start
  useEffect(() => {
    if (!isCatalogueFetched) return;

    const setPerformerCatalogueSelectorsTo: PerformerCatalogueSelectorsType =
      // "tags" is catalogue level list, like "age","shape"
      performerCatalogueResult.data!.findTags.tags.map((catalogue) => {
        // here "catalogue" contains parameter level tags in its "children",like "old","young"
        const { children, ...omitedCatalogueFrom } = catalogue;
        return {
          catalogue: omitedCatalogueFrom,
          activeOption: undefined,
          options: children,
        };
      });
    setPerformerCatalogueSelectors(setPerformerCatalogueSelectorsTo);
  }, [performerCatalogueResult]);

  // init chart default values when catalogues and performers both fetched
  // only this step is done means this page is ready to display
  useEffect(() => {
    if (!isCatalogueFetched || !isPerformersFetched) return;

    const performers = filteredPerformersResult.data!.findPerformers.performers;

    const chartDatas: FinalChartResult[] = performerCatalogueSelectors.map((selector) => {
      // arrays with name and corresponding count in an object of performers for each
      // parameter of this catalogue
      const types = selector.options.map((option) => {
        const shouldContainedTagIds = Array.from(
          new Set([...performerCatalogueSelectedIds, option.id])
        );
        const performersWithThoseTags = performers.filter(
          (p) =>
            p.tags.map((t) => t.id).filter((value) => shouldContainedTagIds.includes(value))
              .length === shouldContainedTagIds.length
        );
        return {
          type: option.name,
          count: performersWithThoseTags.length,
        };
      });

      // cobine catalogue name and its count array, to a new array to map charts
      return {
        catalogue: selector.activeOption?.name || "unknown catalogue",
        types,
      };
    });

    // reorder sort in chart
    chartDatas.forEach((r) => r.types.sort((a, b) => b.count - a.count));
    setFinalChartResult(chartDatas);

    // ux: when first set ready there won't be 'loading' anymore
    setPageStatus("ready");
  }, [isPerformersFetched, isCatalogueFetched]);

  // catch error when any fetch failed
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
        <div>
          <CatalogueFilters
            filters={performerCatalogueSelectors}
            onFiltersChange={(newFilters) => {
              setPerformerCatalogueSelectors([...newFilters]);
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {finalChartResult.map((r, index) => (
              <ResponsiveContainer key={index} height={300}>
                <BarChart
                  data={r.types}
                  margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                  style={{
                    fontSize: "12px",
                  }}
                >
                  <XAxis dataKey="type" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8884d8" barSize={60} />
                </BarChart>
              </ResponsiveContainer>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-[2px] md:grid-cols-4 xl:grid-cols-6">
            {filteredPerformersResult.data?.findPerformers.performers.map((p) => (
              <SkinPeek
                filteredTagIds={performerCatalogueSelectedIds}
                key={p.id}
                performer={p}
                onTagClick={(tag) => {
                  const CataloguesWithThisParameter = performerCatalogueSelectors.filter(
                    (f) => {
                      const tags = f.options.filter((t) => t.id === tag.id);
                      return tags.length > 0;
                    }
                  );

                  CataloguesWithThisParameter.map((c) => {
                    if (c.activeOption && c.activeOption.id === tag.id)
                      c.activeOption = undefined;
                    else c.activeOption = c.options.find((t) => t.id === tag.id);
                  });
                  setPerformerCatalogueSelectors([...performerCatalogueSelectors]);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface FinalChartResult {
  catalogue: string;
  types: {
    type: string;
    count: number;
  }[];
}
