import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { hexesBySLA } from "@/utils/utils";

export default function CatalogueCharts(props: { finalChartResults: FinalChartResultType[] }) {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
        {props.finalChartResults
          .filter((r) => r.types.length > 6)
          .map((result, index) => (
            <ResponsiveContainer key={index} height={300}>
              <BarChart data={result.types} style={{ fontSize: "12px" }}>
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count">
                  {(() => {
                    const colors = hexesBySLA(50, 55, result.types.length);
                    return result.types.map((_, index) => {
                      return <Cell fill={colors[index]} key={index} />;
                    });
                  })()}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
        {props.finalChartResults
          .filter((r) => r.types.length <= 6)
          .map((result, index) => (
            <ResponsiveContainer key={index} height={400}>
              <PieChart style={{ fontSize: "12px" }}>
                <Pie
                  dataKey="count"
                  nameKey="type"
                  data={result.types}
                  isAnimationActive={true}
                  label
                >
                  {(() => {
                    const colors = hexesBySLA(50, 55, result.types.length);
                    return result.types.map((_, index) => {
                      return <Cell fill={colors[index]} key={index} />;
                    });
                  })()}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ))}
      </div>
    </div>
  );
}

export type FinalChartResultType = {
  catalogue: string;
  types: {
    type: string;
    count: number;
  }[];
};
