import React from "react";
import { MajorCustomers } from "../Tables.js/MajorCustomersTable";
import { ProjectTable } from "../Tables.js/ProjectTable";
import { SubContractorTable } from "../Tables.js/SubContractorTable";

const Credentials = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl pl-2 font-bold">Credentials</h2>
      <hr className="border-t-2 border-gray-500 mb-4" />
      <div className="px-4 py-2">
        <h3 className="mb-2 font-semibold">1. Major Customers</h3>
        <div className="w-[70%] mb-4">
          <MajorCustomers />
        </div>
        <h3 className="mb-2 font-semibold">2. Projects</h3>
        <div className="w-[70%] mb-4">
          <ProjectTable />
        </div>
        <h3 className="mb-2 font-semibold">3. Key Suppliers/Sub Contractors</h3>
        <div className="w-[70%] mb-4">
          <SubContractorTable />
        </div>
        <h3 className="mb-2 font-semibold">4. Your Business Structure</h3>
        <div className="flex  mb-2 pr-20 pl-8">
          <p className=" pr-2">Document</p>
          <div className="flex flex-col ml-auto">
            <div>Blank.pdf</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
