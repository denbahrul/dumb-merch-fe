import { useAppSelector } from "@/features/complain/hooks/use-store";
import { styled } from "@mui/material/styles";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import * as React from "react";

export function PieChartDashboard() {
  const salesByCategory = useAppSelector(
    (state) => state.dashboard.entities?.salesByCategory,
  );

  const data = salesByCategory
    ? Object.entries(salesByCategory).map(([label, value]) => ({
        label,
        value: value as number,
      }))
    : [];

  const size = {
    width: 480,
    height: 300,
  };

  const StyledText = styled("text")(({}) => ({
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
  return (
    <PieChart series={[{ data, innerRadius: 100 }]} {...size}>
      <PieCenterLabel>Sales by category</PieCenterLabel>
    </PieChart>
  );
}
