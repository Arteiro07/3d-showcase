"use client";
import { useThemes } from "@/contexts/ThemeContext";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import style from "./app.module.scss";

export default function Theme() {
	const { theme, setTheme } = useThemes();

	return (
		<>
			<div className={style.themeSeletctor}>
				<div
					className={`${style.themeButton} ${theme ? style.true : style.false}`}
					onClick={() => setTheme(!theme)}
				>
					{theme ? <BiSolidMoon /> : <BiSolidSun />}
				</div>
			</div>
		</>
	);
}
