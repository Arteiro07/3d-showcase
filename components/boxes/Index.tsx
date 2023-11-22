import { DrWhoBox } from "./DrWhoBox";
import { ShojiBox } from "./ShojiBox";

export const boxArray = [
	{ component: <ShojiBox />, id: 1 },
	{ component: <DrWhoBox />, id: 2 },
];

export const maxBoxIndex = boxArray.length - 1;
