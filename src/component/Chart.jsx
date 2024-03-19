import React from "react";
import { Chart } from "react-google-charts";
import "../style.css"; // Import the CSS file with defined styles

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export default function ChartGeo() {
  return (
    <div className="chart-container">
      {" "}
      {/* Apply the class to the div */}
      <Chart
        chartType="LineChart" // Change to LineChart
        width="100%"
        height="400px"
        data={data}
        options={{
          chart: {
            title: "Company Performance",
            subtitle: "Sales, Expenses, and Profit: 2014-2017",
          },
          colors: ["#a8a8ff", "#5ee1ff", "#66a2de"],
          titleTextStyle: {
            color: "white",
          },
          subtitleTextStyle: {
            color: "white",
          },
          backgroundColor: "#20282E",
          legend: { textStyle: { color: "white" } }, // Adjust legend text color
          hAxis: { textStyle: { color: "white" } }, // Adjust horizontal axis text color
          vAxis: { textStyle: { color: "white" } }, // Adjust vertical axis text color
        }}
      />
    </div>
  );
}
