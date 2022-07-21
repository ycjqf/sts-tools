import { FindPerformersQuery } from "@dist/graphql";

import { useStore } from "@/configs";

export default function SkinPeek(props: {
  performer: FindPerformersQuery["findPerformers"]["performers"][number];
  filteredTagIds: string[];
  onTagClick?: (
    tag: FindPerformersQuery["findPerformers"]["performers"][number]["tags"][number]
  ) => void;
}) {
  const stashServer = useStore((state) => state.stashServer);

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
            <div
              key={t.id}
              className={`cursor-pointer whitespace-nowrap rounded bg-opacity-75 px-[6px] 
                 py-[2px] text-[10px] ${
                   props.filteredTagIds.includes(t.id)
                     ? "bg-slate-200 text-slate-800"
                     : "bg-slate-600 text-slate-200"
                 }`}
              onClick={() => props.onTagClick && props.onTagClick(t)}
            >
              {t.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
