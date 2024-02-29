"use client";
import Main from "@/components/Main";
import { Toaster } from "@/components/ui/toaster";
import { RecoilRoot } from "recoil";

export default function Home() {
	return (
		<main className="flex flex-col h-screen">
			<RecoilRoot>
				<Main />
				<Toaster />
			</RecoilRoot>
		</main>
	);
}
