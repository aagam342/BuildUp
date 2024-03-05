import React from "react";

const AwardsAndCertifications = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl pl-2 font-bold">Awards And Certifications</h2>
      <hr className="border-t-2 border-gray-500 mb-4" />

      <div className="px-4 py-2">
        <div className="flex  mb-2 pr-20">
          <p className=" font-semibold pr-2">
            1. Do you have any certification with respect to health and safety?
          </p>
          <p className="ml-auto">No</p>
        </div>
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            2. Have you received any award / recognition for safety related
            achievements in the past?
          </p>
          <p className="ml-auto">No</p>
        </div>
      </div>
    </div>
  );
};

export default AwardsAndCertifications;
