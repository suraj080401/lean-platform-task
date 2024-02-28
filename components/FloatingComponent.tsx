"use client";
import Image from "next/image";
import React, { useState } from "react";
import cross from "../public/icons/Cross.png";
import survey from "../public/icons/Survey.png";
import { FloatingTabs } from "./FloatingTabs";

export const FloatingComponent: React.FC = () => {
	const [isButtonOpen, setIsButtonOpen] = useState<boolean>(false);
	const [isTabOpen, setTabOpen] = useState<boolean>(false);
	const [currentTab, setCurrentTab] = useState<string>("");

	const handdleCrossButton = () => {
		setCurrentTab("");
		setIsButtonOpen(!isButtonOpen);
		setTabOpen(false);
	};

	return (
		<div>
			<div className="absolute sm:bottom-[32px] sm:right-[32px] bottom-[24px] right-[24px] z-50">
				<div className={`flex flex-${isTabOpen ? "row" : "col"} items-end`}>
					{isButtonOpen ? (
						<div className={`flex flex-${isTabOpen ? "row" : "col"}`}>
							<FloatingTabs
								title={"Report an Issue"}
								icon={"Flag"}
								isTabOpen={isTabOpen}
								setTabOpen={setTabOpen}
								currentTab={currentTab}
								setCurrentTab={setCurrentTab}
							/>
							<FloatingTabs
								title={"Share Feedback"}
								icon={"LikeDislike"}
								isTabOpen={isTabOpen}
								setTabOpen={setTabOpen}
								currentTab={currentTab}
								setCurrentTab={setCurrentTab}
							/>
							<FloatingTabs
								title={"Give Suggestion"}
								icon={"Edit"}
								isTabOpen={isTabOpen}
								setTabOpen={setTabOpen}
								currentTab={currentTab}
								setCurrentTab={setCurrentTab}
							/>
							<FloatingTabs
								title={"Contact Us"}
								icon={"ContactUS"}
								isTabOpen={isTabOpen}
								setTabOpen={setTabOpen}
								currentTab={currentTab}
								setCurrentTab={setCurrentTab}
							/>
						</div>
					) : (
						""
					)}
					{isButtonOpen ? (
						<div onClick={() => handdleCrossButton()}>
							<Image src={cross} alt="cross" height={60} width={60} />
						</div>
					) : (
						<div onClick={() => setIsButtonOpen(!isButtonOpen)}>
							<Image src={survey} alt="survey" height={60} width={60} />
						</div>
					)}
				</div>
			</div>
			<div
				className={`${
					isButtonOpen ? "" : "hidden"
				}fixed inset-0 z-20 flex justify-end bg-black bg-opacity-50 sm:hidden`}
			></div>
		</div>
	);
};
