import React from "react";
import Modifications from "./SubComponents/Modifications";
import OrganisationDetails from "./SubComponents/OrganisationDetails";
import BankDetails from "./SubComponents/BankDetails";
import AwardsAndCertifications from "./SubComponents/AwardsAndCertifications";
import Credentials from "./SubComponents/Credentials";
import FinancialAttachments from "./SubComponents/FinancialAttachments";
import PartnershipAvenues from "./SubComponents/PartnershipAvenues";
import FinancialPerformance from "./SubComponents/FinancialPerformance";
import Innovative from "./SubComponents/Innovative";
import Others from "./SubComponents/Others";
import BestPractices from "./SubComponents/BestPractices";
import StatutoryCompliance from "./SubComponents/StatutoryCompliance";
import WorkforceDetails from "./SubComponents/WorkforceDetails";
import Sustainability from "./SubComponents/Sustainability";
import GeneralAttachments from "./SubComponents/GeneralAttachments";

const MyProfileBody = ({ selectedSubHeading }) => {
  const renderComponent = (selectedHeading) => {
    switch (selectedHeading) {
      case "Modifications":
        return <Modifications />;
      case "Organisation Details":
        return <OrganisationDetails />;
      case "Bank Details":
        return <BankDetails />;
      case "Credentials":
        return <Credentials />;
      case "Partnership Avenues":
        return <PartnershipAvenues />;
      case "Financial Performance":
        return <FinancialPerformance />;
      case "Others":
        return <Others />;
      case "Innovative":
        return <Innovative />;
      case "Awards and Certifications":
        return <AwardsAndCertifications />;
      case "Best Practices":
        return <BestPractices />;
      case "Workforce Details":
        return <WorkforceDetails />;
      case "Statutory Compliance ":
        return <StatutoryCompliance />;
      case "Sustainability":
        return <Sustainability />;
      case "General Attachments":
        return <GeneralAttachments />;
      case "Financial Attachments":
        return <FinancialAttachments />;

      // Add other cases for each heading
      default:
        return null; // Default case, can be replaced with a default component
    }
  };

  return (
    <div
      className="ml-72 flex flex-col min-h-screen bg-slate-100 "
      style={{ width: "calc(100vw - 80px)" }}
    >
      <div className=" overscroll-y-auto flex-grow p-4 transition-all duration-300 ">
        {renderComponent(selectedSubHeading)}
      </div>
    </div>
  );
};

export default MyProfileBody;
