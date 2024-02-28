import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosArrowDown } from "react-icons/io";

export const Navbar: React.FC = () => {
	return (
		<div className="flex flex-row h-16 sm:h-20 bg-[#404040] sm:bg-black justify-between items-center sm:px-8 px-4 shadow-navbar">
			<div className="text-white text-sm sm:text-lg">
				THE <span className="bg-white text-black p-[1px]">PRODUCT</span>{" "}
				PLATFORM
			</div>
			<div className="flex flex-row text-gray-300 items-center text-lg space-x-8 ">
				<div className="hidden sm:flex flex-row space-x-8">
					<div className="flex flex-row items-center">
						<h2>Learn</h2>
						<IoIosArrowDown />
					</div>
					<div className="flex flex-row items-center">
						<h2>Practice</h2>
						<IoIosArrowDown />
					</div>
				</div>
				<div>
					<Avatar>
						<AvatarImage src="https://unsplash.com/photos/man-in-black-button-up-shirt-ZHvM3XIOHoE" />
						<AvatarFallback>SS</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</div>
	);
};
