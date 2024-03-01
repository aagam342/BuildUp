import React, { useState } from "react";
import MyProfileSidebar from "./MyProfileSidebar";
import MyProfileBody from "./MyProfileBody";

const MyProfile = () => {
  const [selectedMainHeading, setSelectedMainHeading] = useState("Customer");

  return (
    <div className="flex">
      <MyProfileSidebar
        selectedMainHeading={selectedMainHeading}
        setSelectedMainHeading={setSelectedMainHeading}
      />
      <MyProfileBody selectedMainHeading={selectedMainHeading} />
    </div>
  );
};

export default MyProfile;
