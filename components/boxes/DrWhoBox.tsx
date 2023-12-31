/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/dr_who_box.gltf -o components/DrWhoBox.tsx --types 
*/

import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useLoadTexture } from "@/hooks/useTextureLoader";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
	nodes: {
		ID3: THREE.Mesh;
		ID3_1: THREE.Mesh;
		ID3_2: THREE.Mesh;
		ID3_3: THREE.Mesh;
		ID3_4: THREE.Mesh;
		ID3_5: THREE.Mesh;
		ID3_6: THREE.Mesh;
		["654afec8452deb52eca729f4054"]: THREE.Mesh;
	};
	materials: {
		ID9: THREE.MeshStandardMaterial;
		ID16: THREE.MeshStandardMaterial;
		ID354: THREE.MeshStandardMaterial;
		ID361: THREE.MeshStandardMaterial;
		ID368: THREE.MeshStandardMaterial;
		ID375: THREE.MeshStandardMaterial;
		ID382: THREE.MeshStandardMaterial;
		ID335: THREE.MeshStandardMaterial;
	};
	animations: GLTFAction[];
};

type ActionName = "close" | "open";
interface GLTFAction extends THREE.AnimationClip {
	name: ActionName;
}

type ContextType = Record<
	string,
	React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function DrWhoBox(props: JSX.IntrinsicElements["group"]) {
	const [open, setOpen] = useState(false);
	const [clickEnabled, setClickEnabled] = useState(true);
	const group = useRef<THREE.Group>(null);
	const { nodes, materials, animations } = useGLTF(
		"/models/dr_who_box.gltf"
	) as GLTFResult;
	const { actions } = useAnimations(animations, group);
	const {
		paperTexture_Props,
		goldTexture_Props,
		plasticTexture_Props,
		glassTexture_Props,
	} = useLoadTexture();

	const handleClick = () => {
		if (open) {
			setOpen(false);
			if (actions.open) {
				actions.open.timeScale = -1;
				actions.open.paused = false;
				actions.open.play();
			}
		} else {
			setOpen(true);
			if (actions.open) {
				actions.open.timeScale = 1;
				actions.open.paused = false;
				actions.open.clampWhenFinished = true;
				actions.open.loop = THREE.LoopOnce;
				actions.open.play();
			}
		}
	};

	const speed = 0.7;
	const [cameraPosition, setCameraPosition] = useState<THREE.Vector3>(
		new THREE.Vector3(0, 0, 4)
	);
	const [boxPosition, setBoxPosition] = useState<THREE.Vector3>(
		new THREE.Vector3(0, 0, 0)
	);

	useEffect(() => {
		// Code to run when the component mounts
		setBoxPosition(new THREE.Vector3(0, 0, 0));

		return () => {
			// Code to run when the component unmounts
			setBoxPosition(new THREE.Vector3(1, 0, 1));
		};
	}, []);

	useFrame((state, delta) => {
		state.camera.lookAt(0, 0, 0);
		if (open) {
			setCameraPosition(new THREE.Vector3(0, 0, 10));
		} else {
			setCameraPosition(new THREE.Vector3(0, 0, 4));
		}

		group.current?.position.lerp(boxPosition, delta * speed);
		state.camera.position.lerp(cameraPosition, delta * speed);
	});

	return (
		<>
			<group ref={group} {...props} dispose={null} position={[-1, 0, -1]}>
				<group name="Scene">
					<group name="654afec8452deb52eca729f4" onClick={handleClick}>
						<mesh
							name="ID3"
							castShadow
							receiveShadow
							geometry={nodes.ID3.geometry}
						>
							<meshStandardMaterial
								{...plasticTexture_Props}
								color={"#ffffff"}
								opacity={1}
							/>
						</mesh>
						<mesh
							name="ID3_1"
							castShadow
							receiveShadow
							geometry={nodes.ID3_1.geometry}
						>
							<meshStandardMaterial {...glassTexture_Props} />
						</mesh>
						<mesh
							name="ID3_2"
							castShadow
							receiveShadow
							geometry={nodes.ID3_2.geometry}
						>
							<meshStandardMaterial {...glassTexture_Props} />
						</mesh>
						<mesh
							name="ID3_3"
							castShadow
							receiveShadow
							geometry={nodes.ID3_3.geometry}
						>
							<meshStandardMaterial {...glassTexture_Props} />
						</mesh>
						<mesh
							name="ID3_4"
							castShadow
							receiveShadow
							geometry={nodes.ID3_4.geometry}
						>
							<meshStandardMaterial {...glassTexture_Props} />
						</mesh>
						<mesh
							name="ID3_5"
							castShadow
							receiveShadow
							geometry={nodes.ID3_5.geometry}
						>
							<meshStandardMaterial {...glassTexture_Props} />
						</mesh>
						<mesh
							name="ID3_6"
							castShadow
							receiveShadow
							geometry={nodes.ID3_6.geometry}
						>
							<meshStandardMaterial
								{...plasticTexture_Props}
								color={"#003b6f"}
							/>
						</mesh>
					</group>
					<mesh
						name="654afec8452deb52eca729f4054"
						castShadow
						receiveShadow
						geometry={nodes["654afec8452deb52eca729f4054"].geometry}
					>
						<meshStandardMaterial
							{...plasticTexture_Props}
							color={"#003b6f"}
							opacity={1}
						/>
					</mesh>
				</group>
			</group>
		</>
	);
}

useGLTF.preload("/models/dr_who_box.gltf");
