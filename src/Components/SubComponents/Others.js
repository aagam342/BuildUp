import React from "react";
import { RatingAgencyTable } from "../Tables.js/RatingAgencyTable";

const Others = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl pl-2 font-bold">Others</h2>
      <hr className="border-t-2 border-gray-500 mb-4" />
      <div className="px-4 py-2">
        <h3 className="mb-2 font-semibold pr-2">
          1. Rating by any Rating Agency?
        </h3>
        <div className="w-[70%] mb-4">
          <RatingAgencyTable />
        </div>

        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            2. Does your firm has possibility of merger or take-over by any of
            your competitors or new entrants or group companies?
          </p>
          <p className="ml-auto">No</p>
        </div>
      </div>
    </div>
  );
};

export default Others;
