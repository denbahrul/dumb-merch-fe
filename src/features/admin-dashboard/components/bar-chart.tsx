import { BarChart } from "@mui/x-charts/BarChart";

export default function BarChartItem({
  monthlySales,
}: {
  monthlySales: number[];
}) {
  return (
    <BarChart
      sx={{
        //change left yAxis label styles
        "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
          strokeWidth: "1",
          fill: "#FFFFFF",
        },
        // change all labels fontFamily shown on both xAxis and yAxis
        "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
          fontFamily: "monospace",
        },
        // change bottom label styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
          strokeWidth: "1",
          fill: "#FFFFFF",
        },
        // bottomAxis Line Styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
          stroke: "#FFFFFF",
          strokeWidth: 1,
        },
        // leftAxis Line Styles
        "& .MuiChartsAxis-left .MuiChartsAxis-line": {
          stroke: "#FFFFFF",
          strokeWidth: 1,
        },
      }}
      xAxis={[
        {
          id: "barCategories",
          data: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: monthlySales,
        },
      ]}
      width={600}
      height={400}
    />
  );
}
