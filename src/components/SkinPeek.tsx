import { FindPerformersQuery, usePerformerUpdateMutation } from "@dist/graphql";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useContext } from "react";

import { useStore } from "@/configs";
import { HomeContext } from "@/pages/Home";

export default function SkinPeek(props: {
  performer: FindPerformersQuery["findPerformers"]["performers"][number];
  filteredTagIds: string[];
  onTagClick?: (
    tag: FindPerformersQuery["findPerformers"]["performers"][number]["tags"][number]
  ) => void;
}) {
  const stashServer = useStore((state) => state.stashServer);
  const selectors = useContext(HomeContext);
  const [, update] = usePerformerUpdateMutation();

  return (
    <div>
      <div className="relative h-0 w-full pt-[120%]">
        <div className="absolute inset-0">
          {props.performer.image_path && (
            <img
              src={props.performer.image_path}
              className="absolute inset-0 z-10 h-full w-full object-cover"
              alt={props.performer.name || "unknonwn performer"}
            />
          )}
        </div>
      </div>
      <div
        className={`relative z-20 flex w-full flex-col justify-between py-2 px-1 ${
          !props.performer.image_path && "bg-slate-300"
        }`}
      >
        <h2 className="mb-2">
          <a
            href={`${stashServer}/performers/${props.performer.id}/${
              props.performer.scene_count && props.performer.scene_count > 0
                ? "scenes"
                : props.performer.gallery_count && props.performer.gallery_count > 0
                ? "galleries"
                : "images"
            }`}
            target="_blank"
            rel="noreferrer"
            className="text-xl font-semibold text-white drop-shadow"
          >
            {props.performer.name}
          </a>
        </h2>
        <div className={`flex h-fit flex-wrap gap-x-2 gap-y-1`}>
          {props.performer.tags.map((t) => (
            <Listbox
              key={t.id}
              value={t.id}
              onChange={(newValue) => {
                const newIds = [
                  ...props.performer.tags.map((tag) => tag.id).filter((id) => id !== t.id),
                  newValue,
                ];
                update({
                  input: {
                    id: props.performer.id,
                    tag_ids: newIds,
                  },
                });
              }}
            >
              <div className="relative">
                <Listbox.Button>
                  <div
                    className={`inline-flex cursor-pointer items-stretch whitespace-nowrap rounded text-[10px] ${
                      props.filteredTagIds.includes(t.id)
                        ? "bg-slate-200 text-slate-800"
                        : "bg-slate-600 text-slate-200"
                    }`}
                  >
                    <span className="px-[6px] py-[2px]">{t.name}</span>

                    <div
                      className="flex items-center bg-slate-800 pl-1 text-slate-100"
                      onClickCapture={(e) => {
                        e.preventDefault();
                        props.onTagClick && props.onTagClick(t);
                      }}
                    >
                      <ChevronDownIcon className="h-3 w-3" />
                    </div>
                  </div>
                </Listbox.Button>

                <Listbox.Options
                  className="absolute z-[9999] mt-1 w-full overflow-auto rounded 
                bg-white py-1 text-base"
                >
                  {selectors
                    .find((selector) => selector.options.map((o) => o.id).includes(t.id))
                    ?.options.map((o) => (
                      <Listbox.Option key={o.id} value={o.id} disabled={o.id === t.id}>
                        <span
                          className="cursor-pointer whitespace-nowrap rounded bg-opacity-75 px-[2px]
                        py-[2px] text-[10px]"
                        >
                          {o.name}
                        </span>
                      </Listbox.Option>
                    ))}
                </Listbox.Options>
              </div>
            </Listbox>
          ))}
        </div>
      </div>
    </div>
  );
}
