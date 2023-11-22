"use client";
import React, { Suspense, useState } from "react";
import PropTypes from "prop-types";
import {
	AccumulativeShadows,
	Center,
	Environment,
	Lightformer,
	MeshReflectorMaterial,
	OrbitControls,
	PresentationControls,
	RandomizedLight,
	Resize,
	Stage,
} from "@react-three/drei";
import { ShojiBox } from "../../components/boxes/ShojiBox";
import { BlendFunction } from "postprocessing";
import { useThemes } from "@/contexts/ThemeContext";
import { DrWhoBox } from "../../components/boxes/DrWhoBox";
import { Ground } from "../../components/Ground";
import { useLoadTexture } from "@/hooks/useTextureLoader";
import {
	ChromaticAberration,
	EffectComposer,
	Bloom,
	DepthOfField,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import { useBoxIndex } from "@/contexts/BoxIndexContext";
import { boxArray } from "../../components/boxes/Index";

export default function Showroom() {
	const { theme } = useThemes();
	const { boxIndex } = useBoxIndex();

	// const { intensity, x, y, z } = useControls({
	// 	intensity: { value: 1, min: 0, max: 100 },
	// 	x: { value: 0, min: -10, max: 10 },
	// 	y: { value: 0, min: -10, max: 10 },
	// 	z: { value: 0, min: -10, max: 10 },
	// });

	return (
		<>
			<pointLight position={[0, 0, 1.5]} intensity={10} />
			<Environment preset="city"></Environment>
			<RandomizedLight amount={8} frames={100} position={[5, 5, -10]} />
			<PresentationControls
				config={{ mass: 1, tension: 250, friction: 25 }}
				snap={{ mass: 10, tension: 250, friction: 100 }}
				rotation={[0.5, 0.5, 0]}
				polar={[-Math.PI / 10, Math.PI / 6]}
			>
				<Ground />
				<Center top>
					<Suspense fallback={null}>
						<Resize height>{boxArray[boxIndex].component}</Resize>
					</Suspense>
				</Center>
			</PresentationControls>
		</>
	);
}
