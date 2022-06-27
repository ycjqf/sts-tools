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
                className="w-full max-w-md transform overflow-hidden rounded-2xl 
              bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <div className="mb-2">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 
                  text-gray-900"
                  >
                    Config
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      On how should I connect to the stash back-end graphql server.
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <span className="mr-1">Current Token</span>
                    <p className={`${apiKey ? "" : "text-slate-400"} w-full`}>
                      {apiKey || `nothing`}
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder="input new token"
                    value={apiKeyInputing}
                    onChange={(e) => setApiKeyInputing(e.currentTarget.value)}
                  />

                  <div>
                    <span className="mr-1">Current EndPoint</span>
                    <span className={`${endPoint ? "" : "text-slate-400"}`}>
                      {endPoint || `default(${DEFAULT_ENDPOINT})`}
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="input new end point"
                    value={endPointInputing}
                    onChange={(e) => setEndPointInputing(e.currentTarget.value)}
                  />

                  <div>
                    <span className="mr-1">Current performerParametersTagId</span>
                    <span className={`${endPoint ? "" : "text-slate-400"}`}>
                      {performerParametersTagId}
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="input new performerParametersTagId"
                    value={performerParametersTagIdInputing}
                    onChange={(e) => setPerformerParametersTagIdInputing(e.currentTarget.value)}
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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

function isValidHttpUrl(string: string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}
