import React from "react";

interface OverlayScreenProps {
	isButtonOpen: boolean;
}

export const OverlayScreen: React.FC<OverlayScreenProps> = ({
	isButtonOpen,
}) => {
	return (
		<div
			className={`${
				isButtonOpen ? "" : "hidden"
			}fixed inset-0 z-20 flex justify-end bg-black bg-opacity-50 sm:hidden`}
		></div>
	);
};
