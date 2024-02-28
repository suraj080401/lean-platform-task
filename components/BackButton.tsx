import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

export const BackButton: React.FC = () => {
	return (
		<div className="flex-row items-center hidden mx-8 my-4 space-x-1 text-white sm:flex">
			<div className="text-5xl">
				<IoIosArrowRoundBack />
			</div>
			<div>
				<h2>Back to Questions</h2>
			</div>
		</div>
	);
};
