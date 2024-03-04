import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div className="hover:scale-105 ">
      <Line data={chartData} />
    </div>
  );
}

export default LineChart;
