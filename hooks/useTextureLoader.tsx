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
		//map: "/textures/paper/Paper_Recycled_001_COLOR.jpg",
		normalMap: "textures/paper/Paper_Recycled_001_NORM.jpg",
		roughnessMap: "textures/paper/Paper_Recycled_001_ROUGH.jpg",
		aoMap: "textures/paper/Paper_Recycled_001_OCC.jpg",
		displacemntMap: "textures/paper/Paper_Recycled_001_DISP.png",
	});

	paperTexture_Props.normalMap.repeat.set(3, 3);
	paperTexture_Props.roughnessMap.repeat.set(3, 3);
	paperTexture_Props.aoMap.repeat.set(3, 3);

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
	goldTexture_Props.normalMap.repeat.set(5, 5);
	goldTexture_Props.roughnessMap.repeat.set(5, 5);
	goldTexture_Props.aoMap.repeat.set(5, 5);

	goldTexture_Props.normalMap.wrapS = goldTexture_Props.normalMap.wrapT =
		THREE.RepeatWrapping;
	goldTexture_Props.roughnessMap.wrapS = goldTexture_Props.roughnessMap.wrapT =
		THREE.RepeatWrapping;
	goldTexture_Props.aoMap.wrapS = goldTexture_Props.aoMap.wrapT =
		THREE.RepeatWrapping;

	const glassTexture_Props = useTexture({
		map: "textures/glass/Glass_Frosted_001_basecolor.jpg",
		normalMap: "textures/glass/Glass_Frosted_001_normal.jpg",
		roughnessMap: "textures/glass/Glass_Frosted_001_roughness.jpg",
		aoMap: "textures/glass/Glass_Frosted_001_ambientOcclusion.jpg",
	});

	///paper txture for the mats
	///

	const groundTextureProps = useTexture({
		roughnessMap: "textures/ground/terrain-roughness.jpg",
		normalMap: "textures/ground/terrain-normal.jpg",
	});

	groundTextureProps.normalMap.repeat.set(15, 15);
	groundTextureProps.roughnessMap.repeat.set(15, 15);
	groundTextureProps.normalMap.wrapS = groundTextureProps.normalMap.wrapT =
		THREE.RepeatWrapping;
	groundTextureProps.roughnessMap.wrapS =
		groundTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;

	const graniteTextureProps = useTexture({
		//aoMap: "textures/granite/Granite_001_OCC.jpg",
		map: "textures/granite/Granite_001_COLOR.jpg",
		roughnessMap: " textures/granite/Granite_001_ROUGH.jpg",
		normalMap: "textures/granite/Granite_001_NORM.jpg",
	});

	return {
		goldTexture_Props,
		plasticTexture_Props,
		paperTexture_Props,
		glassTexture_Props,
		groundTextureProps,
		graniteTextureProps,
	};
};
