import { useAllPerformersQuery } from "@dist/graphql";
import { useEffect } from "react";

import SetConfig from "@/components/SetConfig";

export default function Home() {
  const [performerResponse] = useAllPerformersQuery();

  useEffect(() => {
    if (performerResponse.fetching) return;
    console.log(performerResponse.error);
  }, [performerResponse]);

  return (
    <div>
      <SetConfig />
      <span>{JSON.stringify(performerResponse)}</span>
    </div>
  );
}
