import { AdjustmentsIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createClient, Provider } from "urql";
import useLocalStorageState from "use-local-storage-state";

import SetConfig from "@/components/SetConfig";
import { DEFAULT_ENDPOINT } from "@/configs";
import Home from "@/pages/Home";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // init configs with default values
  const [endPoint, setEndPoint] = useLocalStorageState("EndPoint", {
    defaultValue: DEFAULT_ENDPOINT,
  });
  const [apiKey, setApiKey] = useLocalStorageState("ApiKey", {
    defaultValue: "",
  });
  const [performerParametersTagId, SetPerformerParametersTagId] = useLocalStorageState(
    "PerformerParametersTagId",
    { defaultValue: "264" }
  );
  const [sceneParametersTagId, SetSceneParametersTagId] = useLocalStorageState(
    "SceneParametersTagId",
    { defaultValue: "265" }
  );

  const isPassed = isValidHttpUrl(endPoint!) && apiKey!.trim().length > 0;
  if (!isPassed) {
    setEndPoint(DEFAULT_ENDPOINT);
  }

  const client = createClient({
    url: endPoint.trim(),
    fetchOptions: () => {
      return {
        headers: {
          ApiKey: apiKey,
        },
      };
    },
  });

  return (
    <React.StrictMode>
      <Provider value={client}>
        <SetConfig isOpen={isOpen} onClose={() => setIsOpen(false)} />

        <div className="flex w-full items-center justify-between px-4 py-2">
          <div>
            <span>sts-tools</span>
          </div>
          <div>
            <AdjustmentsIcon
              className="h-6 w-6 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>

        <Home />
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

function isValidHttpUrl(string: string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}
