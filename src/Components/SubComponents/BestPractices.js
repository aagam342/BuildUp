import React from "react";

const BestPractices = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl pl-2 font-bold">Best Practices</h2>
      <hr className="border-t-2 border-gray-500 mb-4" />

      <div className="px-4 py-2">
        <div className="flex  mb-2 pr-20">
          <p className=" font-semibold pr-2">
            1. Do you have any written policy or statement of commitment for HSE
            ?
          </p>
          <p className="ml-auto">No</p>
        </div>
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            2. Does your organization have safety manual ? Are safety
            instructions applied at work places/ sites ?
          </p>
          <p className="ml-auto">No</p>
        </div>
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            3. Are your employees / workers trained for environmental and safety
            issues including legal compliance requirements ?
          </p>
          <p className="ml-auto">No</p>
        </div>
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            4. Are Personnel protective equipments available with the workers?
          </p>
          <p className="ml-auto">No</p>
        </div>
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            5. Does your organization maintain records of fatal accidents, near
            miss etc.? If yes, please provide details.
          </p>
          <p className="ml-auto">No</p>
        </div>
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            6. Does your organization have any mechanism for communication of
            significant environmental aspects and significant risks to the
            people employed by your organization?
          </p>
          <p className="ml-auto">No</p>
        </div>
      </div>
    </div>
  );
};

export default BestPractices;
