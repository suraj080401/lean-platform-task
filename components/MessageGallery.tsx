import React from "react";
import { MainMessageCard } from "./MainMessageCard";

export const MessageGallery: React.FC = () => {
	return (
		<div className="flex flex-col items-center space-y-4 overflow-y-auto sm:h-[80%] h-[90%] my-4 sm:my-0">
			<MainMessageCard />
			<MainMessageCard />
			<MainMessageCard />
			<MainMessageCard />
			<MainMessageCard />
		</div>
	);
};
