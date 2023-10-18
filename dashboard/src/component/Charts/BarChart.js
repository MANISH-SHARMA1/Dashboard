import React from "react";
import { ResponsiveBar } from "@nivo/bar";

function BarChart() {
  const data = [
    {
      month: "Jan",
      sales: "650",
    },
    {
      month: "Feb",
      sales: "550",
    },
    {
      month: "Mar",
      sales: "900",
    },
    {
      month: "Apr",
      sales: "650",
    },
    {
      month: "May",
      sales: "750",
    },
    {
      month: "Jun",
      sales: "450",
    },
    {
      month: "Jul",
      sales: "790",
    },
    {
      month: "Aug",
      sales: "1000",
    },
    {
      month: "Sep",
      sales: "900",
    },
    {
      month: "Oct",
      sales: "800",
    },
    {
      month: "Nov",
      sales: "750",
    },
    {
      month: "Dec",
      sales: "850",
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={["sales"]}
      indexBy="month"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      colors="#3182CE"
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={null}
      axisBottom={{ tickSize: 0, tickPadding: 20 }}
      enableGridY={false}
      borderRadius={4}
    />
  );
}

export default BarChart;
