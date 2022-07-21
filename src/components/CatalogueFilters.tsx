import { FindTagsQuery, useTagUpdateMutation } from "@dist/graphql";
import { useEffect } from "react";

function CatalogueFilter(props: {
  activeIds: string[];
  selector: PerformerCatalogueSelectorsType[number];
  onTagClicked: (addIds: string[], removeIds: string[]) => void;
}) {
  const [updateTagResult, updateTag] = useTagUpdateMutation();

  function updateOption(option: typeof props.selector.options[number]) {
    const newName = prompt(`change tag ${option.id}(${option.name}) into?`, option.name);
    if (!newName) return;
    console.log(option.id, option.name, newName);

    updateTag({
      input: {
        id: option.id,
        name: newName,
      },
    });
  }

  useEffect(() => {
    if (updateTagResult.data) {
      console.log(updateTagResult.data);
    }
    if (updateTagResult.error) {
      console.log(updateTagResult.error);
    }
  }, [updateTagResult]);

  return (
    <div className="inline-flex items-start whitespace-nowrap text-sm">
      <span className="mr-2 w-8 flex-shrink-0 text-[#47afff]">
        {props.selector.catalogue.name}
      </span>
      <div className="inline-flex flex-wrap items-center gap-y-2 gap-x-3 whitespace-nowrap">
        {props.selector.options.map((option) => (
          <span
            className={`${
              props.activeIds.includes(option.id) ? "text-[#47afff]" : "text-slate-300"
            } cursor-pointer`}
            key={option.id}
            onClick={() => {
              const otherParameterIds = props.selector.options
                .map((o) => o.id)
                .filter((id) => id !== option.id);

              if (props.activeIds.includes(option.id))
                props.onTagClicked([], [...otherParameterIds, option.id]);
              else props.onTagClicked([option.id], otherParameterIds);
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              updateOption(option);
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
  activeIds: string[];
  filters: PerformerCatalogueSelectorsType;
  onTagClicked: (addIds: string[], removeIds: string[]) => void;
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
            activeIds={props.activeIds}
            onTagClicked={props.onTagClicked}
          />
        );
      })}
    </div>
  );
}

export type PerformerCatalogueSelectorsType = {
  catalogue: Omit<FindTagsQuery["findTags"]["tags"][number], "children">;
  options: FindTagsQuery["findTags"]["tags"][number]["children"];
}[];
