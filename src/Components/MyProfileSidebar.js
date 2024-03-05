import React, { useState } from "react";

const MyProfileSidebar = ({
  selectedMainHeading,
  setSelectedMainHeading,
  selectedSubHeading,
  handleSelectedSubHeading,
}) => {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const mainHeadings = ["Customer", "Service Provider", "Supplier"];

  const handleMainHeadingChange = (event) => {
    setSelectedMainHeading(event.target.value);
  };

  const toggleAccordion = (panel) => {
    setExpandedPanel((prevPanel) => (prevPanel === panel ? null : panel));
  };

  return (
    <div className="bg-slate-200 flex-shrink-0 w-56 h-full fixed rounded-lg">
      <div className=" text-white p-4 rounded-t-lg">
        <select
          value={selectedMainHeading}
          onChange={handleMainHeadingChange}
          className="w-full p-2 rounded-md bg-gray-700 text-white bg-custom-dark-blue"
        >
          {mainHeadings.map((heading, index) => (
            <option key={index} value={heading}>
              {heading}
            </option>
          ))}
        </select>
      </div>
      <div className=" px-4  h-full overflow-y-auto">
        <div className="border-none">
          <div
            className="cursor-pointer hover:text-blue-500 p-2 font-semibold"
            onClick={() => handleSelectedSubHeading("Modifications")}
          >
            Modifications
          </div>
          <div
            className="cursor-pointer hover:text-blue-500 p-2 font-semibold"
            onClick={() => toggleAccordion("panel1")}
          >
            General
          </div>
          {expandedPanel === "panel1" && (
            <div className="pl-4 p-2 cursor-pointer">
              <div
                className="p-1 hover:text-blue-500"
                onClick={() => handleSelectedSubHeading("Organisation Details")}
              >
                Organisation Details
              </div>
              <div
                className="p-1 hover:text-blue-500"
                onClick={() => handleSelectedSubHeading("Bank Details")}
              >
                Bank Details
              </div>
              <div
                className="p-1 hover:text-blue-500"
                onClick={() => handleSelectedSubHeading("Credentials")}
              >
                Credentials
              </div>
              <div
                className="p-1 hover:text-blue-500"
                onClick={() => handleSelectedSubHeading("Partnership Avenues")}
              >
                Partnership Avenues
              </div>
            </div>
          )}
        </div>
        <div className="border-none">
          <div
            className="cursor-pointer hover:text-blue-500 p-2 font-semibold"
            onClick={() => toggleAccordion("panel2")}
          >
            Financial
          </div>
          {expandedPanel === "panel2" && (
            <div className="pl-4 p-2 cursor-pointer">
              <div
                className="p-1 hover:text-blue-500"
                onClick={() =>
                  handleSelectedSubHeading("Financial Performance")
                }
              >
                Financial Performance
              </div>
              <div
                className="p-1 hover:text-blue-500"
                onClick={() => handleSelectedSubHeading("Others")}
              >
                Others
              </div>
            </div>
          )}
        </div>
        <div className="border-none">
          <div
            className="cursor-pointer hover:text-blue-500 p-2 font-semibold"
            onClick={() => toggleAccordion("panel3")}
          >
            Innovation
          </div>
          {expandedPanel === "panel3" && (
            <div className="pl-4 p-2 cursor-pointer">
              <div
                className="p-1 hover:text-blue-500"
                onClick={() => handleSelectedSubHeading("Innovative")}
              >
                Innovative
              </div>
            </div>
          )}
        </div>
        <div className="border-none">
          <div
            className="cursor-pointer hover:text-blue-500 p-2 font-semibold"
            onClick={() => toggleAccordion("panel4")}
          >
            HSE
          </div>
          {expandedPanel === "panel4" && (
            <div className="pl-4 p-2 cursor-pointer">
              <div
                className="p-1 hover:text-blue-500"
                onClick={() =>
                  handleSelectedSubHeading("Awards and Certifications")
                }
              >
                Awards and Certifications
              </div>
              <div
                className="p-1 hover:text-blue-500"
                onClick={() => handleSelectedSubHeading("Best Practices")}
              >
                Best Practices
              </div>
            </div>
          )}
        </div>
        <div className="border-none">
          <div
            className="cursor-pointer hover:text-blue-500 p-2 font-semibold"
            onClick={() => toggleAccordion("panel5")}
          >
            Manpower
          </div>
          {expandedPanel === "panel5" && (
            <div className="pl-4 p-2 cursor-pointer">
              <div
                className="p-1 hover:text-blue-500"
                onClick={() => handleSelectedSubHeading("Workforce Details")}
              >
                Workforce Details
              </div>
              <div
                className="p-1 hover:text-blue-500"
                onClick={() => handleSelectedSubHeading("Statutory Compliance")}
              >
                Statutory Compliance
              </div>
            </div>
          )}
        </div>
        <div className="border-none">
          <div
            className="cursor-pointer hover:text-blue-500 p-2 font-semibold"
            onClick={() => toggleAccordion("panel6")}
          >
            Sustainability
          </div>
          {expandedPanel === "panel6" && (
            <div className="pl-4 p-2 cursor-pointer">
              <div
                className="p-1 hover:text-blue-500"
                onClick={() => handleSelectedSubHeading("Sustainability")}
              >
                Sustainability
              </div>
            </div>
          )}
        </div>
        <div className="border-none">
          <div
            className="cursor-pointer hover:text-blue-500 p-2 font-semibold"
            onClick={() => toggleAccordion("panel7")}
          >
            Attachments
          </div>
          {expandedPanel === "panel7" && (
            <div className="pl-4 p-2 cursor-pointer">
              <div
                className="p-1 hover:text-blue-500"
                onClick={() => handleSelectedSubHeading("General Attachments")}
              >
                General
              </div>
              <div
                className="p-1 hover:text-blue-500"
                onClick={() =>
                  handleSelectedSubHeading("Financial Attachments")
                }
              >
                Financial
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfileSidebar;
