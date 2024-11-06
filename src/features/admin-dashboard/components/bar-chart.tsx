import { BarChart } from "@mui/x-charts/BarChart";

export default function BarChartItem() {
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
          data: [8, 2, 3, 10, 9, 6, 7, 9, 9, 10, 8, 7],
        },
      ]}
      width={600}
      height={400}
    />
  );
}
