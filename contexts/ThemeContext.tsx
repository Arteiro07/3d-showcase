"use client";
import {
	useState,
	createContext,
	SetStateAction,
	Dispatch,
	PropsWithChildren,
	useContext,
} from "react";

type ThemesContextType = {
	theme: boolean;
	setTheme: Dispatch<SetStateAction<boolean>>;
};
const defaultThemes: ThemesContextType = {
	theme: false,
	setTheme: () => {},
};

const ThemesContext = createContext<ThemesContextType>(defaultThemes);

export const ThemesProvider = ({ children }: PropsWithChildren<{}>) => {
	const [theme, setTheme] = useState(false);

	return (
		<>
			<ThemesContext.Provider
				value={{
					theme,
					setTheme,
				}}
			>
				{children}
			</ThemesContext.Provider>
		</>
	);
};

export const useThemes = () => {
	const context = useContext(ThemesContext);
	return context;
};
