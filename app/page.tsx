"use client";
import Showroom from "@/components/Showroom";
import { useThemes } from "@/contexts/ThemeContext";
import { Canvas } from "@react-three/fiber";
export default function Home() {
	const { theme } = useThemes();

	return (
		<Canvas
			className={`background-${theme}`}
			shadows
			dpr={[2, 1]}
			camera={{ position: [0, 0, 2] }}
		>
			<Showroom />
		</Canvas>
	);
}
