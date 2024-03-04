import React, { useState } from "react";
import BarChart from "./BarChart";
import { UserData } from "./Data";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import RatingColors from "./RatingColors";
import { TableWithStripedRows } from "./TableWithStripedRows";

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
      <div className="border border-separate  font-semibold text-gray-700 mb-10 bg-white rounded-xl shadow-md ">
        <h2 className="text-center bg-slate-200 pb-2 rounded-t-lg">
          RFQs vs ORDER RECIEVED (Sample Data)
        </h2>

        <div className="p-2 flex justify-center ">
          <BarChart chartData={userData} />
        </div>
      </div>
      <div className="flex flex-wrap gap-5">
        <div className=" border border-separate   m-2 w-[47%] pb-6 font-semibold text-gray-700 mb-4  bg-white rounded-xl shadow-md">
          <h2 className="text-center mb-4 bg-slate-200 pb-2 rounded-t-lg">
            INVOICE SUMMARY
          </h2>

          <div className="p-4 mt-2 mb-2">
            <LineChart chartData={userData} />
          </div>
        </div>
        <div className=" border border-separate   m-2 w-[47%]  font-semibold text-gray-700 bg-white rounded-xl shadow-md">
          <h2 className="text-center  bg-slate-200 pb-2 rounded-t-lg">
            ORDER RECIEVED
          </h2>

          <div className="p-4  flex justify-center">
            <PieChart chartData={userPieData} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5">
        <div className=" border border-separate   m-2 w-[47%] pb-6  text-gray-700 mb-4  bg-white rounded-xl shadow-md">
          <h2 className="text-center mb-1 bg-slate-200 pb-2 font-semibold rounded-t-lg">
            PERFORMANCE REPORT
          </h2>
          <h3 className="px-8 py-2 font-semibold">Overall Performance</h3>

          <div className="p-2 ">
            <RatingColors />
          </div>
        </div>
        <div className=" border border-separate   m-2 w-[47%]  font-semibold text-gray-700 bg-white rounded-xl shadow-md">
          <h2 className="text-center  bg-slate-200 pb-2 rounded-t-lg">
            PROSPECTIVE BUSINESS ENGAGEMENT
          </h2>

          <div className=" flex justify-center ">
            <TableWithStripedRows />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
