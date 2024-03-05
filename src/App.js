import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
const App = () => {
  const [selectedHeading, setSelectedHeading] = useState(0);

  // Updated headings
  const headings = [
    "Dashboard",
    "My Profile",
    "Order Summary",
    "E-bids and E-auction",
    "Alerts and Reminders",
    "Partner Feedback",
    "Branch Details",
    "Testimonial",
    "Add new Company",
    "Grievance Request",
  ];

  const handleHeadingClick = (index) => {
    setSelectedHeading(index);
  };

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }}>
      <Header />
      <div className="flex pt-16">
        <Sidebar
          headings={headings}
          onHeadingClick={handleHeadingClick}
          showSidebar={true}
        />
        {/* <NewSidebar/> */}
        <Content selectedHeading={selectedHeading} />
      </div>
    </div>
  );
};

export default App;
