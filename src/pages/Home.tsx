import {
  CriterionModifier,
  FindTagsQuery,
  useFindPerformersQuery,
  useFindTagsQuery,
} from "@dist/graphql";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Fragment, useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useLocalStorageState from "use-local-storage-state";

import SkinPeek from "@/components/SkinPeek";

export default function Home() {
  document.title = "sts-tools | home";
  const [performerParametersTagId] = useLocalStorageState<string>("PerformerParametersTagId");
  const [finalChartResult, setFinalChartResult] = useState<FinalChartResult[]>([]);

  const [performerParametersReply] = useFindTagsQuery({
    variables: {
      tag_filter: {
        parents: {
          modifier: CriterionModifier.IncludesAll,
          value: [performerParametersTagId!],
        },
      },
    },
  });
  const isFetchedAndNoError =
    !performerParametersReply.fetching &&
    !performerParametersReply.error &&
    performerParametersReply.data;
  const [parameterFilters, setParameterFilters] = useState(
    [] as Array<{
      activeParameter:
        | FindTagsQuery["findTags"]["tags"][number]["children"][number]
        | undefined;
      fatherTag: FindTagsQuery["findTags"]["tags"][number];
    }>
  );
  const filterIds: string[] = parameterFilters
    .filter((t) => typeof t.activeParameter !== "undefined")
    .map((t) => t.activeParameter!.id);

  const [filteredPerformers] = useFindPerformersQuery({
    variables: {
      filter: { per_page: -1 },
      performer_filter: {
        tags: {
          modifier: CriterionModifier.IncludesAll,
          value: filterIds,
        },
      },
    },
    pause: !isFetchedAndNoError,
  });

  useEffect(() => {
    if (isFetchedAndNoError)
      setParameterFilters(
        performerParametersReply.data!.findTags.tags.map((t) => {
          return {
            activeParameter: undefined,
            fatherTag: t,
          };
        })
      );
  }, [performerParametersReply]);

  useEffect(() => {
    if (!isFetchedAndNoError) return;
    if (filteredPerformers.fetching) return;
    if (filteredPerformers.error) return;
    if (!filteredPerformers.data) return;

    const ps = filteredPerformers.data.findPerformers.performers;

    const res: FinalChartResult[] = parameterFilters.map((filter) => {
      const types = filter.fatherTag.children.map((t) => {
        const shouldContainedTagIds = Array.from(new Set([...filterIds, t.id]));
        const performersWithThem = ps.filter(
          (p) =>
            p.tags.map((t) => t.id).filter((value) => shouldContainedTagIds.includes(value))
              .length === shouldContainedTagIds.length
        );
        return {
          type: t.name,
          count: performersWithThem.length,
        };
      });
      return {
        catalogue: filter.fatherTag.name,
        types,
      };
    });
    res.forEach((r) => r.types.sort((a, b) => b.count - a.count));
    setFinalChartResult(res);
  }, [filteredPerformers, isFetchedAndNoError]);

  function ParameterSelector(props: {
    filter: typeof parameterFilters[number];
    onSelectedChange: (
      willSetParameter:
        | typeof parameterFilters[number]["fatherTag"]["children"][number]
        | undefined
    ) => void;
  }) {
    const options = props.filter.fatherTag.children;

    return (
      <Listbox value={props.filter.activeParameter} onChange={props.onSelectedChange}>
        <div className="flex items-center">
          <div className="mr-2 whitespace-nowrap text-sm text-slate-500">
            {props.filter.fatherTag.name}
          </div>
          <div className="relative mt-1 w-full">
            <Listbox.Button
              className="relative w-full cursor-default rounded-lg bg-white py-2 
            pl-3 pr-10 text-left shadow focus:outline-none focus-visible:border-indigo-500
            focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
            focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            >
              <span className="block truncate">
                {props.filter.activeParameter?.name || "Not Selected"}
              </span>
              <span
                className="pointer-events-none absolute inset-y-0 right-0 flex items-center 
                pr-2"
              >
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className="absolute z-30 mt-1 max-h-60 w-full overflow-auto 
              rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black 
                ring-opacity-5 focus:outline-none sm:text-sm"
              >
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {option.name}
                        </span>
                        {selected ? (
                          <span
                            className="absolute inset-y-0 left-0 flex items-center pl-3 
                          text-amber-600"
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      </Listbox>
    );
  }

  return (
    <div>
      {performerParametersReply.fetching ? (
        <span>loading</span>
      ) : typeof performerParametersReply.error !== "undefined" ||
        typeof performerParametersReply.data === "undefined" ? (
        <span>error</span>
      ) : (
        <>
          <div className="mx-4 my-2 grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2 xl:grid-cols-4">
            {parameterFilters.map((f) => {
              return (
                <ParameterSelector
                  key={f.fatherTag.id}
                  filter={f}
                  onSelectedChange={(newParamter) => {
                    f.activeParameter = newParamter;
                    setParameterFilters([...parameterFilters]);
                  }}
                />
              );
            })}
          </div>

          <div className="grid grid-cols-3">
            {finalChartResult.map((r, index) => (
              <ResponsiveContainer key={index} height={300}>
                <BarChart
                  data={r.types}
                  margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                  style={{
                    fontSize: "12px",
                  }}
                >
                  <CartesianGrid strokeDasharray="2 2" />
                  <XAxis dataKey="type" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#8884d8" barSize={60} />
                </BarChart>
              </ResponsiveContainer>
            ))}
          </div>

          <div className="m-[2px] grid grid-cols-7 gap-[2px]">
            {filteredPerformers.data?.findPerformers.performers.map((p) => (
              <SkinPeek key={p.id} performer={p} />
            ))}
          </div>
        </>
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
