import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "./ui/button";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "@/atoms/atom";

export const Navbar: React.FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

	return (
		<div className="flex flex-row h-16 sm:h-20 bg-[#404040] sm:bg-black justify-between items-center sm:px-8 px-4 shadow-navbar">
			<div className="text-sm text-white sm:text-lg">
				THE <span className="bg-white text-black p-[1px]">PRODUCT</span>{" "}
				PLATFORM
			</div>
			<div className="flex flex-row items-center space-x-8 text-lg text-gray-300 ">
				<div className="flex-row hidden space-x-8 sm:flex">
					<div className="flex flex-row items-center">
						<h2>Learn</h2>
						<IoIosArrowDown />
					</div>
					<div className="flex flex-row items-center">
						<h2>Practice</h2>
						<IoIosArrowDown />
					</div>
				</div>
				<div className="flex flex-row space-x-2">
					<Button
						className="px-4 w-16 bg-white text-black hover:bg-gray-100"
						onClick={() => {
							setIsLoggedIn(!isLoggedIn);
						}}
					>
						{isLoggedIn ? "Logout" : "Login"}
					</Button>
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>SS</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</div>
	);
};
