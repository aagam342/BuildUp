import React from "react";
import { BusinessVerticalsTable } from "../Tables.js/BusinessVerticalsTable";

const PartnershipAvenues = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl pl-2 font-bold ">Partnership Avenues</h2>
      <hr className="border-t-2 border-gray-500 mb-4" />
      <div className="px-4 py-2">
        <h3 className="mb-2 font-semibold ">
          1. Business Verticals in regions you can partner
        </h3>
        <div className="w-[70%] mb-4">
          <BusinessVerticalsTable />
        </div>
        <h3 className="mb-2  font-semibold ">
          2. Have you been or are you a partner with any other Division of L&T ?
        </h3>
        <h3 className="mb-2  font-semibold ">
          3. Is there any L&T employee related to senior management in your
          Organization?
        </h3>
      </div>
    </div>
  );
};

export default PartnershipAvenues;
