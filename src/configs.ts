import create from "zustand";
import { persist } from "zustand/middleware";

export const DEFAULT_ENDPOINT = "http://localhost:4041/graphql";

export const useStore = create(
  persist<StsToolsConfig>(
    () => ({
      graphQlEndPoint: "http://localhost:4041/graphql",
      stashServer: "http://localhost:9999",
      apiKey: "",
      performerCatalogueTagId: "264",
      sceneCatalogueTagId: "265",
      performerFilterIds: [],
      configurating: false,
    }),
    {
      name: "sts-tools-configs",
      getStorage: () => localStorage,
    }
  )
);

interface StsToolsConfig {
  graphQlEndPoint: string;
  stashServer: string;
  apiKey: string;
  performerFilterIds: string[];
  performerCatalogueTagId: string;
  sceneCatalogueTagId: string;
  configurating: boolean;
}
