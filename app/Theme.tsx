"use client";
import { useThemes } from "@/contexts/ThemeContext";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

export default function Theme() {
	const { theme, setTheme } = useThemes();

	return (
		<>
			<div className="theme-seletctor">
				<div
					className={`theme-button ${theme}`}
					onClick={() => setTheme(!theme)}
				>
					{theme ? <BiSolidMoon /> : <BiSolidSun />}
				</div>
			</div>
		</>
	);
}
