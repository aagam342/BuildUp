import React from "react";
import Dashboard from "./Dashboard";
import MyProfile from "./MyProfile";
import AddNewCompany from "./AddNewCompany";
import AlertsAndReminders from "./AlertsAndReminders";
import BranchDetails from "./BranchDetails";
import EBidsAndEAuction from "./EBidsAndEAuction";
import GrievanceRequest from "./GrievanceRequest";
import OrderSummary from "./OrderSummary";
import PartnerFeedback from "./PartnerFeedback";
import Testimonial from "./Testimonial";

const Content = ({ selectedHeading }) => {
  const [showSidebar, setShowSidebar] = React.useState(true);

  const renderComponent = (selectedHeading) => {
    switch (selectedHeading) {
      case 0:
        return <Dashboard />;
      case 1:
        return <MyProfile />;
      case 2:
        return <OrderSummary />;
      case 3:
        return <EBidsAndEAuction />;
      case 4:
        return <AlertsAndReminders />;
      case 5:
        return <PartnerFeedback />;
      case 6:
        return <BranchDetails />;
      case 7:
        return <Testimonial />;
      case 8:
        return <AddNewCompany />;
      case 9:
        return <GrievanceRequest />;

      // Add other cases for each heading
      default:
        return null; // Default case, can be replaced with a default component
    }
  };

  return (
    <div
      className="ml-72 flex flex-col min-h-screen bg-slate-100 "
      style={{ width: "calc(100vw - 72px)" }}
    >
      <div
        className={` overscroll-y-auto flex-grow p-4 transition-all duration-300 ml-${
          showSidebar ? "w-72" : "w-0"
        }`}
      >
        {renderComponent(selectedHeading)}
      </div>
    </div>
  );
};

export default Content;
