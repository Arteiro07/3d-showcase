import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export const useLoadTexture = () => {
	const plasticTexture_Props = useTexture({
		map: "textures/plastic/Plastic_004_basecolor.jpg",
		normalMap: "textures/plastic/Plastic_004_normal.jpg",
		roughnessMap: "textures/plastic/Plastic_004_roughness.jpg",
		aoMap: "textures/plastic/Plastic_004_ambientOcclusion.jpg",
	});

	plasticTexture_Props.normalMap.repeat.set(3, 3);
	plasticTexture_Props.roughnessMap.repeat.set(3, 3);
	plasticTexture_Props.aoMap.repeat.set(3, 3);

	plasticTexture_Props.normalMap.wrapS = plasticTexture_Props.normalMap.wrapT =
		THREE.RepeatWrapping;
	plasticTexture_Props.roughnessMap.wrapS =
		plasticTexture_Props.roughnessMap.wrapT = THREE.RepeatWrapping;
	plasticTexture_Props.aoMap.wrapS = plasticTexture_Props.aoMap.wrapT =
		THREE.RepeatWrapping;

	///paper txture for the mats
	///

	const paperTexture_Props = useTexture({
		map: "/textures/paper/Paper_Recycled_001_COLOR.jpg",
		normalMap: "textures/paper/Paper_Recycled_001_NORM.jpg",
		roughnessMap: "textures/paper/Paper_Recycled_001_ROUGH.jpg",
		aoMap: "textures/paper/Paper_Recycled_001_OCC.jpg",
	});

	paperTexture_Props.normalMap.repeat.set(3, 3);
	paperTexture_Props.roughnessMap.repeat.set(3, 3);
	paperTexture_Props.aoMap.repeat.set(5, 5);

	paperTexture_Props.aoMap.repeat.set(3, 3);
	THREE.RepeatWrapping;
	paperTexture_Props.normalMap.wrapS = paperTexture_Props.normalMap.wrapT =
		THREE.RepeatWrapping;
	paperTexture_Props.roughnessMap.wrapS =
		paperTexture_Props.roughnessMap.wrapT = THREE.RepeatWrapping;
	paperTexture_Props.aoMap.wrapS = paperTexture_Props.aoMap.wrapT =
		THREE.RepeatWrapping;

	// // // //
	// // // //
	// // // //gold txture for the handles
	// // // //

	const goldTexture_Props = useTexture({
		map: "/textures/gold/Metal_Gold_001_basecolor.jpg",
		normalMap: "textures/gold/Metal_Gold_001_normal.jpg",
		roughnessMap: "textures/gold/Metal_Gold_001_roughness.jpg",
		aoMap: "textures/gold/Metal_Gold_001_ambientOcclusion.jpg",
	});

	const glassTexture_Props = useTexture({
		map: "textures/glass/Glass_Frosted_001_basecolor.jpg",
		normalMap: "textures/glass/Glass_Frosted_001_normal.jpg",
		roughnessMap: "textures/glass/Glass_Frosted_001_roughness.jpg",
		aoMap: "textures/glass/Glass_Frosted_001_ambientOcclusion.jpg",
	});

	goldTexture_Props.normalMap.repeat.set(5, 5);
	goldTexture_Props.roughnessMap.repeat.set(5, 5);
	goldTexture_Props.aoMap.repeat.set(5, 5);

	goldTexture_Props.normalMap.wrapS = goldTexture_Props.normalMap.wrapT =
		THREE.RepeatWrapping;
	goldTexture_Props.roughnessMap.wrapS = goldTexture_Props.roughnessMap.wrapT =
		THREE.RepeatWrapping;
	goldTexture_Props.aoMap.wrapS = goldTexture_Props.aoMap.wrapT =
		THREE.RepeatWrapping;

	///paper txture for the mats
	///

	const groundTextureProps = useTexture({
		roughnessMap: "textures/ground/terrain-roughness.jpg",
		normalMap: "textures/ground/terrain-normal.jpg",
	});

	groundTextureProps.normalMap.repeat.set(3, 3);
	groundTextureProps.roughnessMap.repeat.set(3, 3);

	// groundTextureProps.normalMap.wrapS = plasticTexture_Props.normalMap.wrapT =
	// 	THREE.RepeatWrapping;
	// groundTextureProps.roughnessMap.wrapS =
	// 	plasticTexture_Props.roughnessMap.wrapT = THREE.RepeatWrapping;

	return {
		goldTexture_Props,
		plasticTexture_Props,
		paperTexture_Props,
		glassTexture_Props,
		groundTextureProps,
	};
};
