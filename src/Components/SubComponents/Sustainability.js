import React from "react";

const Sustainability = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl pl-2 font-bold">Sustainability</h2>
      <hr className="border-t-2 border-gray-500 mb-4" />
      <div className="px-4 py-2">
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            1. Does responsibility for CSR belong to a single person
          </p>
          <p className="ml-auto">No</p>
        </div>
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            2. Has the supplier an ethical policy relating to the sale and
            purchase of items? If yes, please provide the details of personnel
            involved.
          </p>
          <p className="ml-auto">No</p>
        </div>
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            3. What guidelines and procedures are provided relating to the
            confidentiality of information provided by a customer
          </p>
          <p className="ml-auto">No</p>
        </div>
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            4. Are there any guidelines in place for receipt of gifts and
            hospitality?
          </p>
          <p className="ml-auto">No</p>
        </div>
        <div className="flex  mb-2 pr-20">
          <p className="font-semibold pr-2">
            5. Are there any guidelines in place with respect to. conflict of
            interest?
          </p>
          <p className="ml-auto">No</p>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
