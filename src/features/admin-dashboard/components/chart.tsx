import { red } from "@mui/material/colors";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Charts() {
  return (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: ["bar A", "bar B", "bar C", "bar D", "bar E", "bar F"],
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: [2, 5, 3, 2, 5, 3],
        },
      ]}
      width={500}
      height={300}
    />
  );
}
