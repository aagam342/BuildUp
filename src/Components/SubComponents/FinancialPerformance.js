import React from "react";

const FinancialPerformance = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl pl-2 font-bold">PartnershipAvenues</h2>
      <hr className="border-t-2 border-gray-500 mb-4" />
      <div className="px-4 py-2">
        <div className="flex  mb-2 pr-48">
          <p className=" font-semibold pr-2">
            Business Verticals in regions you can partner
          </p>
          <p className="ml-auto">0</p>
        </div>
        <div className="flex mb-2 pr-48">
          <p className="font-semibold pr-2">Debt to asset ratio</p>
          <p className="ml-auto">1:1</p>
        </div>
        <div className="flex mb-2 pr-48">
          <h3 className="font-semibold pr-2 ">
            {" "}
            Current assets to Current liabilities
          </h3>
          <h3 className="ml-auto">1.1</h3>
        </div>
        <div className="flex mb-2 pr-48">
          <h3 className="font-semibold pr-2 "> Average Working Capital</h3>
          <h3 className="ml-auto">1</h3>
        </div>
      </div>
    </div>
  );
};

export default FinancialPerformance;
