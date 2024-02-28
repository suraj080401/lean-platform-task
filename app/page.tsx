"use client";
import Main from "@/components/Main";
import { RecoilRoot } from "recoil";

export default function Home() {
	return (
		<main className="flex flex-col h-screen">
			<RecoilRoot>
				<Main />
			</RecoilRoot>
		</main>
	);
}
