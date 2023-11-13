"use client";
import React from "react";
import PropTypes from "prop-types";
import {
	AccumulativeShadows,
	Center,
	Environment,
	MeshReflectorMaterial,
	OrbitControls,
	PresentationControls,
	RandomizedLight,
	Resize,
	Stage,
} from "@react-three/drei";
import { ShojiBox } from "./ShojiBox";
import { useThemes } from "@/contexts/ThemeContext";
import { DrWhoBox } from "./DrWhoBox";
import { Ground } from "./Ground";

export default function Showroom() {
	return (
		<>
			<PresentationControls
				config={{ mass: 1, tension: 250, friction: 25 }}
				snap={{ mass: 10, tension: 250, friction: 100 }}
				rotation={[0.5, 0.5, 0]}
				polar={[-Math.PI / 5, Math.PI / 6]}
			>
				<ambientLight intensity={4} />
				<Ground />
				<Center>
					<Resize height>
						<ShojiBox />
						{/* <DrWhoBox /> */}
					</Resize>
				</Center>
			</PresentationControls>
		</>
	);
}
