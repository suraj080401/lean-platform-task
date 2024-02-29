import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ImageUploader from "./ImageUploader";
import { Button } from "./ui/button";
import { useRecoilState } from "recoil";
import {
	currTabState,
	isAnyTabOpenState,
	isFloatingButtonOpenState,
	isLoggedInState,
} from "@/atoms/atom";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { useMediaQuery } from "react-responsive";
import { Checkbox } from "./ui/checkbox";

const isValidEmail = (email: string): boolean => {
	const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return pattern.test(email);
};

export const Feedback: React.FC = () => {
	const isMobile = useMediaQuery({ maxWidth: 768 });

	const [textareaValue, setTextareaValue] = useState<string>("");
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
	const [email, setEmail] = useState<string>("");
	const [isValid, setIsValid] = useState<boolean>(false);
	const { toast } = useToast();
	const [isFloatingButtonOpen, setisFloatingButtonOpen] = useRecoilState(
		isFloatingButtonOpenState,
	);
	const [isAnyTabOpen, setAnyTabOpen] = useRecoilState(isAnyTabOpenState);
	const [currentTab, setCurrentTab] = useRecoilState(currTabState);

	const handleTextareaChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		setTextareaValue(event.target.value);
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newEmail = event.target.value;
		setEmail(newEmail);
		setIsValid(isValidEmail(newEmail));
	};

	const wantToDisable = textareaValue.trim() === "";

	return (
		<div className="flex flex-col p-2">
			<div className="w-[60%] mx-auto">
				<p className="text-center">
					Let us know your <span className="font-bold">Feedback</span> about us!
				</p>
			</div>
			<Separator className="my-4 bg-gray-400" />
			<div className="w-full flex flex-col realtive">
				<div className="bg-[#E0E0E0] h-52 rounded-md">
					<Textarea
						className="focus-visible:none focus-visible:ring-offset-0 max-h-36 h-36 bg-[#E0E0E0] overflow-y-auto focus-visible:ring-0"
						onChange={handleTextareaChange}
						placeholder="Write here..."
					/>
					<div className="absolute top-84">
						<ImageUploader />
					</div>
				</div>
			</div>
			{isLoggedIn ? (
				<div className="flex items-center space-x-2 mt-2">
					<Checkbox id="terms" />
					<label
						htmlFor="terms"
						className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Send feedback anonymously
					</label>
				</div>
			) : (
				<div className="w-full my-2">
					<Label htmlFor="email">Enter your email to recieve an update</Label>
					<Input
						type="email"
						placeholder="Email"
						onChange={handleEmailChange}
						className="focus-visible:ring-0"
					/>
					<div className="h-2 mt-2">
						{!isValid && email && (
							<p className="text-red-500 text-xs">Invalid Mail</p>
						)}
					</div>
				</div>
			)}
			<div className="flex flex-row justify-end my-4">
				<Button
					className="px-4"
					disabled={
						(!isLoggedIn && (!isValid || wantToDisable)) ||
						(isLoggedIn && wantToDisable)
					}
					onClick={() => {
						setisFloatingButtonOpen(false);
						setAnyTabOpen(false);
						setCurrentTab("");
						toast({
							variant: isMobile ? "mobVariant" : "newVariant",
							description: "Thanks for your valuable feedback!",
						});
					}}
				>
					Submit
				</Button>
			</div>
		</div>
	);
};
