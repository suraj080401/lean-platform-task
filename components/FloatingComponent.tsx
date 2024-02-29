"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import cross from "../public/icons/Cross.png";
import survey from "../public/icons/Survey.png";
import { FloatingTabs } from "./FloatingTabs";
import { OverlayScreen } from "./OverlayScreen";
import {
	currTabState,
	isAnyTabOpenState,
	isFloatingButtonOpenState,
	isLoggedInState,
} from "@/atoms/atom";
import { useRecoilState } from "recoil";
import { RequiredForm } from "./RequiredForm";

export const FloatingComponent: React.FC = () => {
	const [isFloatingButtonOpen, setisFloatingButtonOpen] = useRecoilState(
		isFloatingButtonOpenState,
	);
	const [isAnyTabOpen, setAnyTabOpen] = useRecoilState(isAnyTabOpenState);
	const [currentTab, setCurrentTab] = useRecoilState(currTabState);
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

	const handdleCrossButton = () => {
		setCurrentTab("");
		setisFloatingButtonOpen(!isFloatingButtonOpen);
		setAnyTabOpen(false);
		console.log(isLoggedIn);
	};

	return (
		<div>
			<div
				className={`${
					isAnyTabOpen
						? "-bottom-[10px] right-[0px]"
						: "bottom-[24px] right-[24px]"
				} absolute sm:bottom-[32px] sm:right-[32px] z-50 w-full sm:w-auto`}
			>
				<div className="flex sm:flex-col flex-col-reverse">
					{isFloatingButtonOpen && isAnyTabOpen && (
						<RequiredForm currentTab={currentTab} />
					)}
					<div
						className={`flex flex-${
							isAnyTabOpen ? "row justify-end" : "col"
						} items-end`}
					>
						{isFloatingButtonOpen ? (
							<div
								className={`flex ${
									isAnyTabOpen ? "flex-row-reverse" : "flex-col"
								}`}
							>
								<FloatingTabs
									title={"Report an Issue"}
									icon={"Flag"}
									isTabOpen={isAnyTabOpen}
									setTabOpen={setAnyTabOpen}
									currentTab={currentTab}
									setCurrentTab={setCurrentTab}
								/>
								<FloatingTabs
									title={"Share Feedback"}
									icon={"LikeDislike"}
									isTabOpen={isAnyTabOpen}
									setTabOpen={setAnyTabOpen}
									currentTab={currentTab}
									setCurrentTab={setCurrentTab}
								/>
								<FloatingTabs
									title={"Give Suggestion"}
									icon={"Edit"}
									isTabOpen={isAnyTabOpen}
									setTabOpen={setAnyTabOpen}
									currentTab={currentTab}
									setCurrentTab={setCurrentTab}
								/>
								<FloatingTabs
									title={"Contact Us"}
									icon={"ContactUS"}
									isTabOpen={isAnyTabOpen}
									setTabOpen={setAnyTabOpen}
									currentTab={currentTab}
									setCurrentTab={setCurrentTab}
								/>
							</div>
						) : (
							""
						)}
						{isFloatingButtonOpen ? (
							<div onClick={() => handdleCrossButton()}>
								<Image src={cross} alt="cross" height={60} width={60} />
							</div>
						) : (
							<div
								onClick={() => setisFloatingButtonOpen(!isFloatingButtonOpen)}
							>
								<Image src={survey} alt="survey" height={60} width={60} />
							</div>
						)}
					</div>
				</div>
			</div>
			<OverlayScreen isButtonOpen={isFloatingButtonOpen} />
		</div>
	);
};
