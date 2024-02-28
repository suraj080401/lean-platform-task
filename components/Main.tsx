import { BackButton } from "@/components/BackButton";
import { FloatingComponent } from "@/components/FloatingComponent";
import { MessageGallery } from "@/components/MessageGallery";
import { Navbar } from "@/components/Navbar";

import React from "react";

const Main = () => {
	return (
		<div className="flex flex-col h-full">
			<Navbar />
			<BackButton />
			<MessageGallery />
			<FloatingComponent />
		</div>
	);
};

export default Main;
