import React from "react";
import { ReportAnIssue } from "./ReportAnIssue";
import { Feedback } from "./Feedback";
import { Suggestion } from "./Suggestion";
import { ContactUs } from "./ContactUs";

interface RequiredFormProps {
	currentTab: string;
}

export const RequiredForm: React.FC<RequiredFormProps> = ({ currentTab }) => {
	return (
		<div className="bg-white sm:w-96 sm:rounded-md rounded-xl my-2 shadow-lg">
			{currentTab === "Report an Issue" && <ReportAnIssue />}
			{currentTab === "Share Feedback" && <Feedback />}
			{currentTab === "Give Suggestion" && <Suggestion />}
			{currentTab === "Contact Us" && <ContactUs />}
		</div>
	);
};
