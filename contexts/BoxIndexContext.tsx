"use client";
import {
	useState,
	createContext,
	SetStateAction,
	Dispatch,
	PropsWithChildren,
	useContext,
} from "react";

type BoxIndexContextType = {
	boxIndex: number;
	setBoxIndex: Dispatch<SetStateAction<number>>;
};
const defaultThemes: BoxIndexContextType = {
	boxIndex: 0,
	setBoxIndex: () => {},
};

const BoxIndexContext = createContext<BoxIndexContextType>(defaultThemes);

export const BoxIndexProvider = ({ children }: PropsWithChildren<{}>) => {
	const [boxIndex, setBoxIndex] = useState(0);

	return (
		<>
			<BoxIndexContext.Provider
				value={{
					boxIndex,
					setBoxIndex,
				}}
			>
				{children}
			</BoxIndexContext.Provider>
		</>
	);
};

export const useBoxIndex = () => {
	const context = useContext(BoxIndexContext);
	return context;
};
