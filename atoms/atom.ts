import { atom } from "recoil";

export const isLoggedInState = atom({
	key: "isLoggedIn",
	default: true,
});

export const isFloatingButtonOpenState = atom({
	key: "isFloatingButtonOpen",
	default: false,
});

export const isAnyTabOpenState = atom({
	key: "isAnyTabOpen",
	default: false,
});

export const currTabState = atom({
	key: "currTab",
	default: "",
});
