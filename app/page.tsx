"use client";
import Showroom from "@/components/Showroom";
import { useThemes } from "@/contexts/ThemeContext";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
export default function Home() {
	const { theme } = useThemes();

	return (
		<Canvas
			className={`background-${theme}`}
			shadows
			dpr={[2, 1]}
			camera={{ position: [0, 0, 4], fov: 40 }}
			linear
		>
			<fog attach="fog" color={theme ? "#101010" : "#efefef"} />
			<Showroom />
		</Canvas>
	);
}
