import { BackButton } from "@/components/BackButton";
import { Navbar } from "@/components/Navbar";

export default function Home() {
	return (
		<main className="flex flex-col">
			<Navbar />
			<BackButton />
		</main>
	);
}
