"use client";
import Showroom from "@/app/boxes/Showroom";
import { useThemes } from "@/contexts/ThemeContext";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import style from "./boxes.module.scss";
import { useBoxIndex } from "@/contexts/BoxIndexContext";
import { maxBoxIndex } from "@/components/boxes/Index";

export default function page() {
	const { theme } = useThemes();
	const { boxIndex, setBoxIndex } = useBoxIndex();

	return (
		<>
			<div className={style.navigate}>
				<div
					className={style.right}
					onClick={() => {
						// leaveLeft();
						if (boxIndex === maxBoxIndex) setBoxIndex(0);
						else setBoxIndex(boxIndex + 1);
					}}
				>
					<FaArrowRight />
				</div>

				<div
					className={style.left}
					onClick={() => {
						if (boxIndex === 0) setBoxIndex(maxBoxIndex);
						else setBoxIndex(boxIndex - 1);
					}}
				>
					<FaArrowLeft />
				</div>
			</div>
			<Canvas
				className={`background`}
				shadows
				dpr={[2, 1]}
				camera={{ position: [0, 0, 4], fov: 40 }}
				linear
			>
				<fog attach="fog" args={[theme ? "#d8d8d8" : "#5c5c5c", 10, 15]} />
				<color attach="background" args={[theme ? "#d8d8d8" : "#5c5c5c"]} />
				<Showroom />
			</Canvas>
		</>
	);
}
