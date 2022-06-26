import React from "react";
import ReactDOM from "react-dom/client";
import { createClient, Provider } from "urql";

import { DEFAULT_ENDPOINT } from "@/configs";
import Home from "@/pages/Home";

const client = createClient({
  url: ((): string => {
    const endPoint = localStorage.getItem("EndPoint");
    if (typeof endPoint !== "string" || endPoint.trim().length === 0) return DEFAULT_ENDPOINT;
    return endPoint.trim();
  })(),
  fetchOptions: () => {
    return {
      headers: {
        ApiKey: localStorage.getItem("ApiKey") || "",
      },
    };
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider value={client}>
      <Home />
    </Provider>
  </React.StrictMode>
);
