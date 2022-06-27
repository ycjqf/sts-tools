import { FindPerformersQuery } from "@dist/graphql";

export default function SkinPeek(props: {
  performer: FindPerformersQuery["findPerformers"]["performers"][number];
}) {
  return (
    <div className="relative h-0 w-full pt-[100%]">
      <div className="absolute inset-0">
        <div
          className={`group relative z-20 flex h-full w-full flex-col justify-between p-2 ${
            !props.performer.image_path && "bg-slate-300"
          }`}
        >
          <div
            className={`flex h-fit flex-wrap gap-x-1 gap-y-1 ${
              props.performer.image_path &&
              "opacity-50 transition-opacity duration-100 group-hover:opacity-75"
            }`}
          >
            {props.performer.tags.map((t) => (
              <div
                key={t.id}
                className="cursor-pointer whitespace-nowrap rounded bg-slate-600 px-[6px] py-[2px] text-[10px] text-white"
              >
                {t.name}
              </div>
            ))}
          </div>
          <h2>{props.performer.name}</h2>
        </div>

        {props.performer.image_path && (
          <img
            src={props.performer.image_path}
            className="absolute inset-0 z-10 h-full w-full object-cover"
            alt={props.performer.name || "unknonwn performer"}
          />
        )}
      </div>
    </div>
  );
}
