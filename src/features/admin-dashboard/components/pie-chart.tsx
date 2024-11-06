import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { colors } from "@mui/material";

const data = [
  { value: 5, label: "Camera" },
  { value: 10, label: "Handphone" },
  { value: 15, label: "Laptop" },
  { value: 20, label: "PC" },
];

const size = {
  width: 480,
  height: 300,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: "#FFFFFF",
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 18,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartDashboard() {
  return (
    <PieChart series={[{ data, innerRadius: 100 }]} {...size}>
      <PieCenterLabel>Sales by category</PieCenterLabel>
    </PieChart>
  );
}
