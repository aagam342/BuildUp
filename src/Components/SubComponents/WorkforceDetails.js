import React from "react";
import { SkillwiseTable } from "../Tables.js/SkillwiseTable";

const WorkforceDetails = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl pl-2 font-bold">Workforce Details</h2>
      <hr className="border-t-2 border-gray-500 mb-4" />
      <div className="px-4 py-2">
        <h3 className="mb-2 font-semibold pr-2">1. Skillwise workmen count</h3>
        <div className="w-[70%] mb-4">
          <SkillwiseTable />
        </div>

        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            2. Locations/ Geographies where your workmen can be mobilized
          </p>
          <p className="ml-auto">HyderabadKolkatta</p>
        </div>
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            3. Have you faced labour related issues in the past
          </p>
          <p className="ml-auto">No</p>
        </div>
      </div>
    </div>
  );
};

export default WorkforceDetails;
