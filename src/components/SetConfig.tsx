import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

import { DEFAULT_ENDPOINT } from "@/configs";

export default function SerConfig(props: { isOpen: boolean; onClose: () => void }) {
  const [endPoint, setEndPoint] = useLocalStorageState<string>("EndPoint");
  const [apiKey, setApiKey] = useLocalStorageState<string>("ApiKey");
  const [performerParametersTagId, setPerformerParametersTagId] = useLocalStorageState<string>(
    "PerformerParametersTagId"
  );

  const [endPointInputing, setEndPointInputing] = useState(endPoint);
  const [apiKeyInputing, setApiKeyInputing] = useState(apiKey);
  const [performerParametersTagIdInputing, setPerformerParametersTagIdInputing] =
    useState(performerParametersTagId);

  function beforeClose() {
    const isPassed = isValidHttpUrl(endPointInputing!) && apiKeyInputing!.trim().length > 0;
    if (!isPassed) return alert("please check again.");

    setApiKey(apiKeyInputing);
    setEndPoint(endPointInputing);
    setPerformerParametersTagId(performerParametersTagIdInputing);
    props.onClose();
  }

  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={props.onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-100" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-full max-w-md transform overflow-hidden rounded 
              bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <div className="mb-4">
                  <Dialog.Title
                    className="mb-2 text-2xl font-medium 
                    leading-6 text-gray-900"
                  >
                    Config
                  </Dialog.Title>
                  <p className="text-sm text-gray-500">
                    On how should I connect to the stash back-end graphql server.
                  </p>
                </div>

                <div className="mb-8 grid grid-cols-1 gap-y-4">
                  <ConfigItem
                    title="Aceess Token"
                    originalValue={apiKey}
                    placeholder="input new token"
                    onChange={(newValue) => setApiKeyInputing(newValue)}
                  />

                  <ConfigItem
                    title="GraphQL Endpoint"
                    originalValue={endPoint || DEFAULT_ENDPOINT}
                    placeholder="input new endpoint"
                    onChange={(newValue) => setEndPointInputing(newValue)}
                  />

                  <ConfigItem
                    title="Performer Catalogue Tag Id"
                    originalValue={performerParametersTagId}
                    placeholder="input new performer catalogue tag id"
                    onChange={(newValue) => setPerformerParametersTagIdInputing(newValue)}
                  />
                </div>

                <div>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={beforeClose}
                  >
                    Save
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
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
      <span className="mr-1 font-semibold">{props.title}</span>
      <p
        className={`${
          props.originalValue ? "text-slate-400" : "text-purple-400"
        } mb-2 break-words px-4 text-sm`}
      >
        {props.originalValue || "<NOT-SET>"}
      </p>
      <input
        className="w-full rounded border px-4 py-2"
        type="text"
        placeholder="input new performerParametersTagId"
        defaultValue={props.originalValue}
        onChange={(e) => {
          console.log(e);
          props.onChange(e.currentTarget.value);
        }}
      />
    </div>
  );
}

function isValidHttpUrl(string: string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}
