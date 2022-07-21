import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

import { useStore } from "@/configs";
import { isValidHttpUrl } from "@/utils/checker";

export default function ConfigPanel() {
  const configurating = useStore((state) => state.configurating);

  const endPointOriginalValue = useStore.getState().graphQlEndPoint;
  const stashServerOriginalValue = useStore.getState().stashServer;
  const apiKeyOriginalValue = useStore.getState().apiKey;
  const performerCatalogueTagIdOriginalValue = useStore.getState().performerCatalogueTagId;

  const [endPointInputing, setEndPointInputing] = useState(endPointOriginalValue);
  const [stashServerInputing, setStashServerInputing] = useState(stashServerOriginalValue);
  const [apiKeyInputing, setApiKeyInputing] = useState(apiKeyOriginalValue);
  const [performerParametersTagIdInputing, setPerformerParametersTagIdInputing] = useState(
    performerCatalogueTagIdOriginalValue
  );

  function beforeClose() {
    const isPassed = isValidHttpUrl(endPointInputing!) && apiKeyInputing!.trim().length > 0;
    if (!isPassed) return alert("please check again.");

    useStore.setState({
      graphQlEndPoint: endPointInputing,
      stashServer: stashServerInputing,
      apiKey: apiKeyInputing,
      performerCatalogueTagId: performerParametersTagIdInputing,
      configurating: false,
    });
  }

  useEffect(() => {
    if (configurating) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [configurating]);

  return (
    <Transition appear show={configurating}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="w-scree fixed inset-0 z-30 h-screen bg-black bg-opacity-50" />
      </Transition.Child>

      <div
        className="fixed z-40 flex h-screen w-screen flex-col items-center justify-center 
          bg-transparent"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0 top-20"
          enterTo="opacity-100 top-0"
          leave="ease-in duration-100"
          leaveFrom="opacity-100 top-0"
          leaveTo="opacity-0 top-20"
        >
          <div
            className="w-full max-w-md transform overflow-hidden rounded 
              bg-white p-6 text-left align-middle shadow-xl transition-all"
          >
            <div className="mb-4">
              <h4 className="mb-2 text-2xl font-bold leading-6 text-gray-900">Config</h4>
              <p className="text-sm text-gray-500">
                On how should I connect to the stash back-end graphql server.
              </p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-y-6">
              <ConfigItem
                title="GraphQL Endpoint"
                originalValue={endPointOriginalValue}
                placeholder="input new endpoint"
                onChange={(newValue) => setEndPointInputing(newValue)}
              />

              <ConfigItem
                title="Stash Server"
                originalValue={stashServerOriginalValue}
                placeholder="input new stash server address"
                onChange={(newValue) => setStashServerInputing(newValue)}
              />

              <ConfigItem
                title="Aceess Token"
                originalValue={apiKeyOriginalValue}
                placeholder="input new token"
                onChange={(newValue) => setApiKeyInputing(newValue)}
              />

              <ConfigItem
                title="Performer Catalogue Tag Id"
                originalValue={performerCatalogueTagIdOriginalValue}
                placeholder="input new performer catalogue tag id"
                onChange={(newValue) => setPerformerParametersTagIdInputing(newValue)}
              />
            </div>

            <div>
              <button
                type="button"
                className="inline-flex justify-center rounded border border-transparent 
            bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 
            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
            focus-visible:ring-offset-2"
                onClick={beforeClose}
              >
                Save
              </button>
            </div>
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
}

function ConfigItem(props: {
  title: string;
  placeholder: string;
  originalValue: string | undefined;
  onChange: (newValue: string) => void;
}) {
  return (
    <div>
      <span>{props.title}</span>
      <p className="text-sm text-slate-600">{props.placeholder}</p>
      <input
        className="w-full rounded border px-4 py-2"
        type="text"
        placeholder={props.placeholder}
        defaultValue={props.originalValue}
        onChange={(e) => {
          props.onChange(e.currentTarget.value);
        }}
      />
      <p
        className={`${
          props.originalValue ? "text-slate-400" : "text-purple-400"
        } mb-2 break-words text-sm`}
      >
        current: {props.originalValue || "<NOT-SET>"}
      </p>
    </div>
  );
}
