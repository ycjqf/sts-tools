import { FindPerformersQuery, FindTagsQuery } from "@dist/graphql";
import { UseQueryState } from "urql";

import { FinalChartResultType } from "@/components/CatalogueCharts";
import { PerfCatalogueSelectorsType } from "@/components/CatalogueFilters";

export function perfCatalogueResToSelectors(
  perfCatalogueRes: UseQueryState<FindTagsQuery, object>
): PerfCatalogueSelectorsType {
  const { data } = perfCatalogueRes;
  if (!data) return [];

  const perfCatalogueSelectors: PerfCatalogueSelectorsType =
    // "tags" is catalogue level list, like "age"
    data.findTags.tags.map((catalogue) => {
      // here "catalogue" contains parameter level tags in its "children",like "old","young"
      const { children, ...omitedCatalogueFrom } = catalogue;
      return {
        catalogue: omitedCatalogueFrom,
        options: children,
      };
    });

  return perfCatalogueSelectors;
}

export function perfSelectorsToChartDatas(
  selectors: PerfCatalogueSelectorsType,
  perfs: FindPerformersQuery["findPerformers"]["performers"]
): FinalChartResultType[] {
  const chartDatas: FinalChartResultType[] = selectors.map((selector) => {
    // arrays with name and corresponding count in an object of performers for each
    // parameter of this catalogue
    const types = selector.options
      .map((option) => {
        const perfsWithThisTag = perfs.filter((p) =>
          p.tags.map((t) => t.id).find((value) => value === option.id)
        );
        return {
          type: option.name,
          count: perfsWithThisTag.length,
        };
      })
      // remove options with no character
      .filter((t) => t.count !== 0);

    // cobine catalogue name and its count array, to a new array to map charts
    return {
      catalogue: selector.catalogue.name,
      types,
    };
  });

  // reorder sort in chart
  chartDatas.forEach((r) => r.types.sort((a, b) => b.count - a.count));

  // remove charts with only one option
  return chartDatas.filter((t) => t.types.length > 1);
}

export function getDefaultNameForPerfCatalogue(selector: PerfCatalogueSelectorsType[number]) {
  return `#${selector.catalogue.name.toLowerCase()}`;
}
