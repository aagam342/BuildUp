import React from "react";
import { DisasterTable } from "../Tables.js/DisasterTable";

const StatutoryCompliance = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl pl-2 font-bold">Statutory Compliance</h2>
      <hr className="border-t-2 border-gray-500 mb-4" />
      <div className="px-4 py-2">
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            1. Have you ever defaulted any statutory payment (Eg EPFO/ESI)
          </p>
          <p className="ml-auto">No</p>
        </div>
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            2. Has there been any strikes by contract labours provided at the
            sites
          </p>
          <p className="ml-auto">No</p>
        </div>
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            3. Has there been any litigation/legal suit on the organization in
            the past
          </p>
          <p className="ml-auto">No</p>
        </div>
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            4. What will be the time required for mobilization of your resources
            22
          </p>
          <p className="ml-auto">No</p>
        </div>
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            5. Does your organization have labor agreement
          </p>
          <p className="ml-auto">No</p>
        </div>
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            6. Is the labor organized under a union agreement
          </p>
          <p className="ml-auto">No</p>
        </div>
        <h3 className="mb-2 font-semibold pr-2">
          7. Provide details of Disaster Management Plan, if any
        </h3>
        <div className="w-[70%] mb-4">
          <DisasterTable />
        </div>
      </div>
    </div>
  );
};

export default StatutoryCompliance;
