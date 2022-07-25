import { CriterionModifier, useFindPerformersQuery, useFindTagsQuery } from "@dist/graphql";
import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CatalogueCharts, { FinalChartResultType } from "@/components/CatalogueCharts";
import CatalogueFilters, { PerfCatalogueSelectorsType } from "@/components/CatalogueFilters";
import HomeStatus from "@/components/HomeStatus";
import SkinPeek from "@/components/SkinPeek";
import { useStore } from "@/configs";
import { getResStatus } from "@/utils/utils";

import { perfCatalogueResToSelectors, perfSelectorsToChartDatas } from "./Home.detail";

export const HomeContext = createContext<PerfCatalogueSelectorsType>([]);

export default function Home() {
  document.title = "sts-tools | home";

  const [searchParams, setSearchParams] = useSearchParams();
  const tagIdsInRoute = searchParams.get("ids")?.split(".") || [];
  const [pageStatus, setPageStatus] = useState<"loading" | "error" | "ready">("loading");
  const [statusMsg, setStatusMsg] = useState("loading data");
  const [finalChartResults, setFinalChartResults] = useState<FinalChartResultType[]>([]);
  const performerCatalogueTagId = useStore((state) => state.performerCatalogueTagId);
  const [perfCatalogueSelectors, setPerfCatalogueSelectors] =
    useState<PerfCatalogueSelectorsType>([]);

  const [perfCatalogueRes] = useFindTagsQuery({
    variables: {
      tag_filter: {
        parents: {
          modifier: CriterionModifier.IncludesAll,
          value: [performerCatalogueTagId!],
        },
      },
    },
  });
  const [filteredPerfsRes] = useFindPerformersQuery({
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
  const loadables = [perfCatalogueRes, filteredPerfsRes];

  function mixIds(addIds: string[], removeIds: string[]) {
    const newIds = Array.from(
      new Set(tagIdsInRoute.filter((id) => !removeIds.includes(id)).concat(addIds))
    );
    if (newIds.length === 0) setSearchParams({});
    else
      setSearchParams({
        ids: newIds.join("."),
      });
  }

  // the first action
  // set selectors values when catalogue is fetched
  useEffect(() => {
    if (getResStatus(perfCatalogueRes).status !== "ready") return;

    const newPerfCatalogueSelectors = perfCatalogueResToSelectors(perfCatalogueRes);
    setPerfCatalogueSelectors(newPerfCatalogueSelectors);
  }, [perfCatalogueRes]);

  useEffect(() => {
    // set page as error when any fetch failed
    for (const res of loadables) {
      const statusRes = getResStatus(res);
      if (statusRes.status === "error") {
        setPageStatus("error");
        setStatusMsg(statusRes.msg);
        return;
      }
    }

    // when everything all fetched
    const loaded = loadables.filter((res) => getResStatus(res).status === "ready");
    if (loaded.length < loadables.length) return;

    const performers = filteredPerfsRes.data?.findPerformers.performers || [];
    // init chart default values
    const newFinalChartResults = perfSelectorsToChartDatas(perfCatalogueSelectors, performers);
    setFinalChartResults(newFinalChartResults);
    setPageStatus("ready");
  }, loadables);

  return (
    <div className="min-h-screen">
      {pageStatus !== "ready" ? (
        <HomeStatus
          title={`${pageStatus.slice(0, 1).toUpperCase()}${pageStatus.slice(1)}`}
          message={statusMsg}
        />
      ) : (
        <HomeContext.Provider value={perfCatalogueSelectors}>
          <div>
            <CatalogueFilters
              activeIds={tagIdsInRoute}
              filters={perfCatalogueSelectors}
              onTagClicked={mixIds}
            />
            <CatalogueCharts finalChartResults={finalChartResults} />

            <div className="grid grid-cols-1 gap-[2px] md:grid-cols-3 xl:grid-cols-6">
              {filteredPerfsRes.data?.findPerformers.performers.map((p) => (
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
