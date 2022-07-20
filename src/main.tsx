import React from "react";
import ReactDOM from "react-dom/client";
import { createClient, Provider } from "urql";

import ConfigPanel from "@/components/ConfigPanel";
import TopBar from "@/components/TopBar";
import { useStore } from "@/configs";
import Home from "@/pages/Home";

function App() {
  const graphQlEndPoint = useStore((state) => state.graphQlEndPoint);
  const apiKey = useStore((state) => state.apiKey);

  const client = createClient({
    url: graphQlEndPoint,
    fetchOptions: () => {
      return {
        headers: { ApiKey: apiKey },
      };
    },
  });

  return (
    <React.StrictMode>
      <Provider value={client}>
        <ConfigPanel />

        <TopBar />
        <Home />
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
