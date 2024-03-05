import React, { useState } from "react";
import MyProfileSidebar from "./MyProfileSidebar";
import MyProfileBody from "./MyProfileBody";

const MyProfile = () => {
  const [selectedMainHeading, setSelectedMainHeading] = useState("Customer");

  const [selectedSubHeading, setSelectedSubHeading] = useState("Modifications");

  const handleSelectedSubHeading = (subHeadingName) => {
    setSelectedSubHeading(subHeadingName);
  };

  return (
    <div className="flex">
      <MyProfileSidebar
        selectedMainHeading={selectedMainHeading}
        setSelectedMainHeading={setSelectedMainHeading}
        selectedSubHeading={selectedSubHeading}
        handleSelectedSubHeading={handleSelectedSubHeading}
      />
      <MyProfileBody selectedSubHeading={selectedSubHeading} />
    </div>
  );
};

export default MyProfile;
