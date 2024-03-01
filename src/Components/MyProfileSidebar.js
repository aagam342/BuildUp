import React, { useState } from "react";

const MyProfileSidebar = ({ selectedMainHeading, setSelectedMainHeading }) => {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const mainHeadings = ["Customer", "Service Provider", "Supplier"];

  const handleMainHeadingChange = (event) => {
    setSelectedMainHeading(event.target.value);
  };

  const toggleAccordion = (panel) => {
    setExpandedPanel((prevPanel) => (prevPanel === panel ? null : panel));
  };

  return (
    <div className="flex-shrink-0 w-64 h-full fixed">
      <div className="bg-gray-800 text-white p-4">
        <select
          value={selectedMainHeading}
          onChange={handleMainHeadingChange}
          className="w-full p-2 rounded-md bg-gray-700 text-white"
        >
          {mainHeadings.map((heading, index) => (
            <option key={index} value={heading}>
              {heading}
            </option>
          ))}
        </select>
      </div>
      <div className="bg-gray-200 p-4 h-full overflow-y-auto">
        <div className="border-none">
          <div
            className="cursor-pointer hover:text-blue-500 p-2 font-semibold"
            onClick={() => toggleAccordion("panel1")}
          >
            General
          </div>
          {expandedPanel === "panel1" && (
            <div className="pl-4 p-2">
              <div className="p-1">Organisation Details</div>
              <div className="p-1">Bank Details</div>
              <div className="p-1">Credentials</div>
              <div className="p-1">Partnership Avenues</div>
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
            <div className="pl-4 p-2">
              <div className="p-1">Financial Performance</div>
              <div className="p-1">Others</div>
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
            <div className="pl-4 p-2">
              <div className="p-1">Innovative</div>
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
            <div className="pl-4 p-2">
              <div className="p-1">Awards and Certifications</div>
              <div className="p-1">Best Practices</div>
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
            <div className="pl-4 p-2">
              <div className="p-1">Workforce Details</div>
              <div className="p-1">Statutory Compliance</div>
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
            <div className="pl-4 p-2">
              <div className="p-1">Sustainability</div>
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
            <div className="pl-4 p-2">
              <div className="p-1">General</div>
              <div className="p-1">Financial</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfileSidebar;
