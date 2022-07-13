import {
  CriterionModifier,
  FindTagsQuery,
  useFindPerformersQuery,
  useFindTagsQuery,
} from "@dist/graphql";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon, XCircleIcon } from "@heroicons/react/solid";
import { Fragment, useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
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
          <div className="mr-4 whitespace-nowrap text-sm text-slate-500">
            {props.filter.fatherTag.name}
          </div>
          <div className="relative w-full">
            <Listbox.Button
              className="relative w-full cursor-default rounded border py-2 
              pl-3 pr-10 text-left sm:text-sm"
            >
              <span className={`block truncate text-slate-300`}>
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
                className="absolute z-30 mt-2 max-h-60 w-full overflow-auto 
                rounded-md bg-[#30404d] py-1 text-base sm:text-sm"
              >
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-[#137cbd] text-white" : "text-slate-300"
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

          <button
            className={`${
              props.filter.activeParameter ? "text-slate-300" : "text-slate-500"
            } ml-2 transition-colors`}
            onClick={() => props.onSelectedChange(undefined)}
          >
            <XCircleIcon className="h-6 w-6" />
          </button>
        </div>
      </Listbox>
    );
  }

  return (
    <div className="min-h-screen bg-[#202b33]">
      {performerParametersReply.fetching ? (
        <HomeStatus title="Loading" message="Fetching Data, please wait." />
      ) : typeof performerParametersReply.error !== "undefined" ||
        typeof performerParametersReply.data === "undefined" ? (
        <HomeStatus
          title="Request Error"
          message={performerParametersReply.error?.message || "Encountered an unknown error."}
        />
      ) : (
        <div>
          <div className="px-4">
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 py-8 md:grid-cols-2 xl:grid-cols-4">
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
          </div>

          <div className="grid grid-cols-1 gap-[2px] md:grid-cols-3 xl:grid-cols-5">
            {filteredPerformers.data?.findPerformers.performers.map((p) => (
              <SkinPeek
                tagIds={filterIds}
                key={p.id}
                performer={p}
                onTagClick={(tag) => {
                  const CataloguesWithThisParameter = parameterFilters.filter((f) => {
                    const tags = f.fatherTag.children.filter((t) => t.id === tag.id);
                    return tags.length > 0;
                  });

                  CataloguesWithThisParameter.map((c) => {
                    if (c.activeParameter && c.activeParameter.id === tag.id)
                      c.activeParameter = undefined;
                    else c.activeParameter = c.fatherTag.children.find((t) => t.id === tag.id);
                  });
                  setParameterFilters([...parameterFilters]);
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

function HomeStatus(props: { title: string; message: string }) {
  return (
    <div className="flex flex-col items-center px-2 py-12 text-white">
      <h4 className="mb-1 text-2xl">{props.title}</h4>
      <span className="text-sm">{props.message}</span>
    </div>
  );
}
