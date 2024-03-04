import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function BarChart({ chartData }) {
  return (
    <div className="w-[70%] hover:scale-105">
      <Bar data={chartData} />
    </div>
  );
}

export default BarChart;
