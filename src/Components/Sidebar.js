import React, { useState } from "react";
const Sidebar = ({ headings, onHeadingClick, showSidebar }) => {
  const [selectedHeading, setSelectedHeading] = useState(0);

  const handleHeadingClick = (index) => {
    onHeadingClick(index);
    setSelectedHeading(index);
  };
  return (
    <div
      className={`transition-all duration-300 overflow-hidden fixed bg-custom-dark-blue ${
        showSidebar ? "w-72 h-full" : "w-0"
      }`}
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* <div className=" text-white py-3  px-6 text-center">
        <h2 className=" font-bold ">BUILDUP INFRASTRUCTURE PRIVATE LIMITED</h2>
     </div> */}
      <div className="text-gray-300 p-3 h-full ">
        <ul className="flex flex-col h-full  ">
          <li
            key={0}
            className={`flex items-center cursor-pointer px-8 py-2 mb-2  font-bold rounded-md ${
              selectedHeading === 0
                ? "bg-custom-blue text-white"
                : "hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => handleHeadingClick(0)}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/pulsar-line/48/FFFFFF/dashboard-layout.png"
              alt="dashboard-layout"
              className="mr-3"
            />
            {headings[0]}
          </li>
          <li
            key={1}
            className={`flex items-center cursor-pointer px-8 py-2 mb-2 font-bold rounded-md ${
              selectedHeading === 1
                ? "bg-custom-blue text-white"
                : "hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => handleHeadingClick(1)}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/external-inkubators-basic-outline-inkubators/32/FFFFFF/external-user-profile-user-interface-inkubators-basic-outline-inkubators.png"
              alt="external-user-profile-user-interface-inkubators-basic-outline-inkubators"
              className="mr-3"
            />
            {headings[1]}
          </li>
          <li
            key={2}
            className={`flex items-center cursor-pointer px-8 py-2 mb-2 font-bold rounded-md ${
              selectedHeading === 2
                ? "bg-custom-blue text-white"
                : "hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => handleHeadingClick(2)}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/pastel-glyph/64/FFFFFF/purchase-order.png"
              alt="purchase-order"
              className="mr-3"
            />
            {headings[2]}
          </li>
          <li
            key={3}
            className={`flex items-center cursor-pointer px-8 py-2 mb-2 font-bold rounded-md ${
              selectedHeading === 3
                ? "bg-custom-blue text-white"
                : "hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => handleHeadingClick(3)}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/pastel-glyph/64/FFFFFF/auction.png"
              alt="auction"
              className="mr-3"
            />
            {headings[3]}
          </li>
          <li
            key={4}
            className={`flex items-center cursor-pointer px-8 py-2 mb-2 font-bold rounded-md ${
              selectedHeading === 4
                ? "bg-custom-blue text-white"
                : "hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => handleHeadingClick(4)}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/FFFFFF/alarm--v1.png"
              alt="alarm--v1"
              className="mr-3"
            />
            {headings[4]}
          </li>
          <li
            key={5}
            className={`flex items-center cursor-pointer px-8 py-2 mb-2 font-bold rounded-md ${
              selectedHeading === 5
                ? "bg-custom-blue text-white"
                : "hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => handleHeadingClick(5)}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/FFFFFF/comment-discussion.png"
              alt="comment-discussion"
              className="mr-3"
            />
            {headings[5]}
          </li>
          <li
            key={6}
            className={`flex items-center cursor-pointer px-8 py-2 mb-2 font-bold rounded-md ${
              selectedHeading === 6
                ? "bg-custom-blue text-white"
                : "hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => handleHeadingClick(6)}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/FFFFFF/details-pane.png"
              alt="details-pane"
              className="mr-3"
            />
            {headings[6]}
          </li>
          <li
            key={7}
            className={`flex items-center cursor-pointer px-8 py-2 mb-2 font-bold rounded-md ${
              selectedHeading === 7
                ? "bg-custom-blue text-white"
                : "hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => handleHeadingClick(7)}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/FFFFFF/external-testimonial-user-interface-vol-3-prettycons-lineal-prettycons-1.png"
              alt="external-testimonials-customer-feedback-flaticons-lineal-flat-icons"
              className="mr-3"
            />

            {headings[7]}
          </li>
          <li
            key={8}
            className={`flex items-center cursor-pointer px-8 py-2 mb-2 font-bold rounded-md ${
              selectedHeading === 8
                ? "bg-custom-blue text-white"
                : "hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => handleHeadingClick(8)}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/pastel-glyph/64/FFFFFF/company--v1.png"
              alt="company--v1"
              className="mr-3"
            />
            {headings[8]}
          </li>
          <li
            key={9}
            className={`flex items-center cursor-pointer px-8 py-2 mb-2 font-bold rounded-md ${
              selectedHeading === 9
                ? "bg-custom-blue text-white"
                : "hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => handleHeadingClick(9)}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/dotty/80/FFFFFF/ask-question.png"
              alt="ask-question"
              className="mr-3"
            />
            {headings[9]}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
