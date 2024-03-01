import React from "react";
const Sidebar = ({ headings, onHeadingClick, showSidebar }) => {
  return (
    <div
      className={`transition-all duration-300 overflow-hidden fixed  ${
        showSidebar ? `w-52 h-full` : "w-0"
      }`}
    >
      <div className="bg-gray-800 text-white p-4 bg-gradient-to-b  from-gray-700 to-gray-800">
        <h2 className="text-sm font-bold ">
          BUILDUP INFRASTRUCTURE PRIVATE LIMITED
        </h2>
        {/* Add photo */}
      </div>
      <div className="bg-gray-200 p-4 h-full">
        <ul className="flex flex-col h-full">
          {headings.map((heading, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-500 p-2 font-bold"
              onClick={() => onHeadingClick(index)}
            >
              {heading}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
