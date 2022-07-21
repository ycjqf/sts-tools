import { AdjustmentsIcon } from "@heroicons/react/solid";

import { useStore } from "@/configs";

export default function TopBar() {
  const configurating = useStore((state) => state.configurating);

  return (
    <div
      className="flex h-12 w-full items-center justify-between bg-[#394b59] px-2 py-1 
      md:px-3 xl:px-4"
    >
      <a href="/" className="block text-sm text-[#f5f8fa]">
        sts-tools
      </a>
      <button
        className="rounded border border-solid border-[#ffffff1a]"
        onClick={() => useStore.setState({ configurating: !configurating })}
      >
        <AdjustmentsIcon className="mx-4 my-2 h-4 w-4 text-[#f5f8fa]" />
      </button>
    </div>
  );
}
