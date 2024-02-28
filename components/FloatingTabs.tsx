"use client";
import Image from "next/image";
import React, { useState } from "react";
import ContactUS from "../public/icons/ContactUS.png";
import Flag from "../public/icons/Flag.png";
import LikeDislike from "../public/icons/LikeDislike.png";
import Edit from "../public/icons/Edit.png";

interface FloatingTabsProps {
	title: string;
	icon: string;
	isTabOpen: boolean;
	setTabOpen: Function;
	currentTab: string;
	setCurrentTab: Function;
}

export const FloatingTabs: React.FC<FloatingTabsProps> = ({
	title,
	icon,
	isTabOpen,
	setTabOpen,
	currentTab,
	setCurrentTab,
}) => {
	const handleClickofTab = (title: string) => {
		setCurrentTab(title);
		setTabOpen(true);
	};

	return (
		<div
			className={`flex flex-row items-center justify-end space-x-1 z-100`}
			onClick={() => {
				handleClickofTab(title);
			}}
		>
			{!isTabOpen && (
				<div className="px-2 bg-white rounded">
					<p>{title}</p>
				</div>
			)}
			<div
				className={`${
					currentTab === title
						? "rounded-full border border-2 border-gray-400"
						: ""
				}`}
			>
				{icon === "Flag" && <Image src={Flag} alt="" height={60} width={60} />}
				{icon === "LikeDislike" && (
					<Image src={LikeDislike} alt="" height={60} width={60} />
				)}
				{icon === "Edit" && <Image src={Edit} alt="" height={60} width={60} />}
				{icon === "ContactUS" && (
					<Image src={ContactUS} alt="" height={60} width={60} />
				)}
			</div>
		</div>
	);
};
