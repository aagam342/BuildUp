import React, { useState } from "react";
import BarChart from "./BarChart";
import { UserData } from "./Data";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "RFQ",
        data: UserData.map((data) => data.RFQ),
        backgroundColor: ["orange"],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Order Recieved",
        data: UserData.map((data) => data.order),
        backgroundColor: ["cyan"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });
  const [userPieData, setUserPieData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Order",
        data: UserData.map((data) => data.RFQ),
        backgroundColor: ["orange", "red", "cyan", "gray", "purple", "yellow"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });
  return (
    <div className=" text-xl">
      <div className="border border-separate  p-2 font-semibold text-gray-700 mb-10">
        <h2>RFQs vs ORDER RECIEVED (Sample Data)</h2>
        <div className="p-2 ">
          <BarChart chartData={userData} />
        </div>
      </div>
      <div className="border border-separate  p-2 font-semibold text-gray-700 mb-4">
        <h2>INVOICE SUMMARY</h2>
        <div className="p-2 ">
          <LineChart chartData={userData} />
        </div>
      </div>
      <div className="border border-separate  p-2 font-semibold text-gray-700">
        <h2>ORDER RECIEVED</h2>
        <div className="p-2 ">
          <PieChart chartData={userPieData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
