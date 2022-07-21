import { FindTagsQuery } from "@dist/graphql";

function CatalogueFilter(props: {
  selector: PerformerCatalogueSelectorsType[number];
  onSelectedChange: (
    newActiveOption: PerformerCatalogueSelectorsType[number]["activeOption"]
  ) => void;
}) {
  return (
    <div className="inline-flex items-start whitespace-nowrap  text-sm">
      <span className="mr-4 w-20 flex-shrink-0 text-[#47afff]">
        {props.selector.catalogue.name}
      </span>
      <div className="inline-flex flex-wrap items-center gap-y-2 gap-x-3 whitespace-nowrap">
        {props.selector.options.map((option) => (
          <span
            className={`${
              props.selector.activeOption && props.selector.activeOption.id === option.id
                ? "text-[#47afff]"
                : "text-slate-300"
            } cursor-pointer`}
            key={option.id}
            onClick={() => {
              props.onSelectedChange(
                props.selector.activeOption && props.selector.activeOption.id === option.id
                  ? undefined
                  : option
              );
            }}
          >
            {option.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CatalogueFilters(props: {
  filters: PerformerCatalogueSelectorsType;
  onFiltersChange: (newFilters: PerformerCatalogueSelectorsType) => void;
}) {
  return (
    <div
      className="grid grid-cols-1 gap-x-8 gap-y-3 px-4 py-2 
      md:px-3 md:py-4 xl:px-4 xl:py-6"
    >
      {props.filters.map((f) => {
        return (
          <CatalogueFilter
            key={f.catalogue.id}
            selector={f}
            onSelectedChange={(newParamter) => {
              f.activeOption = newParamter;
              props.onFiltersChange(props.filters);
            }}
          />
        );
      })}
    </div>
  );
}

export type PerformerCatalogueSelectorsType = {
  catalogue: Omit<FindTagsQuery["findTags"]["tags"][number], "children">;
  activeOption: undefined | FindTagsQuery["findTags"]["tags"][number]["children"][number];
  options: FindTagsQuery["findTags"]["tags"][number]["children"];
}[];
