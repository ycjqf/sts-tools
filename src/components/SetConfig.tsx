import { DEFAULT_ENDPOINT } from "@/configs";

export default function SetToken() {
  const token = localStorage.getItem("ApiKey");
  const endPoint = localStorage.getItem("EndPoint");

  return (
    <div className="flex flex-col">
      <div>
        <span className="mr-1">Current Token</span>
        <span className={`${token ? "" : "text-slate-400"}`}>{token || `nothing`}</span>
      </div>
      <input
        type="text"
        placeholder="input new token"
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          localStorage.setItem("ApiKey", e.currentTarget.value);
          window.location.reload();
        }}
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
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          localStorage.setItem("EndPoint", e.currentTarget.value);
          window.location.reload();
        }}
      />
    </div>
  );
}
