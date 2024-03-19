import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  // is3D: true,
  backgroundColor: "#20282E", // Set background color to black
  colors: ["#a8a8ff", "#5ee1ff", "#66a2de"],
  legend: {
    textStyle: { color: "white" }, // Set legend text color to white
  },
  titleTextStyle: {
    color: "white", // Set title text color to white
  },
};

export default function Chart3d() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"450px"}
      height={"300px"}
    />
  );
}
