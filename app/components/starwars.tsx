import * as THREE from "three";
import React, { JSX, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cockpit_0: THREE.Mesh;
    Cockpit_1: THREE.Mesh;
    Cockpit_2: THREE.Mesh;
    Cockpit_3: THREE.Mesh;
    Cockpit_4: THREE.Mesh;
    MainHull2_0: THREE.Mesh;
    Greebles3_0: THREE.Mesh;
    Greebles3_1: THREE.Mesh;
    Greebles3_2: THREE.Mesh;
    Greebles3_3: THREE.Mesh;
    MainHull_0: THREE.Mesh;
    MainHull_1: THREE.Mesh;
    MainHull_2: THREE.Mesh;
    LowerWingLeft_0: THREE.Mesh;
    LowerWingLeft_1: THREE.Mesh;
    LowerWingLeft_2: THREE.Mesh;
    LowerWingRight_0: THREE.Mesh;
    LowerWingRight_1: THREE.Mesh;
    LowerWingRight_2: THREE.Mesh;
    UpperWingLeft_0: THREE.Mesh;
    UpperWingRight_0: THREE.Mesh;
    LandingGearHatchBackRight_0: THREE.Mesh;
    LandingGearFront_0: THREE.Mesh;
    LandingGearHatchFrontRight_0: THREE.Mesh;
    LandingGearHatchFrontLeft_0: THREE.Mesh;
    LandingGearHatchBackLeft_0: THREE.Mesh;
    LandingGearBack_0: THREE.Mesh;
    Greebles1_0: THREE.Mesh;
    Greebles1_1: THREE.Mesh;
    CockpitHatch_0: THREE.Mesh;
    CockpitHatch_1: THREE.Mesh;
    MainHullPlates_0: THREE.Mesh;
    MainHullPlates_1: THREE.Mesh;
    Greebles2_0: THREE.Mesh;
    Missiles_0: THREE.Mesh;
    UpperCanon_0: THREE.Mesh;
    UpperCanon_1: THREE.Mesh;
  };
  materials: {
    ScratchedMetal: THREE.MeshStandardMaterial;
    RedGlow: THREE.MeshStandardMaterial;
    YellowGlow: THREE.MeshStandardMaterial;
    WhiteLight: THREE.MeshStandardMaterial;
    Dark: THREE.MeshStandardMaterial;
    BlueEngineGlow: THREE.MeshStandardMaterial;
    ScratchedMetalDark: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Landing";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group | null>(null);
  //@ts-expect-error:Error when using useAnimations
  const { nodes, materials, animations } = useGLTF(
    "/starwars.glb"
  ) as GLTFResult;
  //@ts-expect-error:Error when using useAnimations
  const { actions } = useAnimations<GLTFActions>(animations, group);
  console.log(actions);

  useEffect(() => {
    //@ts-expect-error:Error when using useAnimations
    if (actions["Landing"]) {
      //@ts-expect-error:Error when using useAnimations
      actions["Landing"].reset().fadeIn(0.5).play();
    }
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Alpha-class_Xg-1_Star_Wing">
              <group name="Cockpit" scale={0.276}>
                <mesh
                  name="Cockpit_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cockpit_0.geometry}
                  material={materials.ScratchedMetal}
                />
                <mesh
                  name="Cockpit_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cockpit_1.geometry}
                  material={materials.RedGlow}
                />
                <mesh
                  name="Cockpit_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cockpit_2.geometry}
                  material={materials.YellowGlow}
                />
                <mesh
                  name="Cockpit_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cockpit_3.geometry}
                  material={materials.WhiteLight}
                />
                <mesh
                  name="Cockpit_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cockpit_4.geometry}
                  material={materials.Dark}
                />
              </group>
              <group name="MainHull2">
                <mesh
                  name="MainHull2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.MainHull2_0.geometry}
                  material={materials.ScratchedMetal}
                />
              </group>
              <group name="Greebles3">
                <mesh
                  name="Greebles3_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Greebles3_0.geometry}
                  material={materials.ScratchedMetal}
                />
                <mesh
                  name="Greebles3_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Greebles3_1.geometry}
                  material={materials.BlueEngineGlow}
                />
                <mesh
                  name="Greebles3_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Greebles3_2.geometry}
                  material={materials.Dark}
                />
                <mesh
                  name="Greebles3_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Greebles3_3.geometry}
                  material={materials.ScratchedMetalDark}
                />
              </group>
              <group name="MainHull">
                <mesh
                  name="MainHull_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.MainHull_0.geometry}
                  material={materials.ScratchedMetal}
                />
                <mesh
                  name="MainHull_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.MainHull_1.geometry}
                  material={materials.Dark}
                />
                <mesh
                  name="MainHull_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.MainHull_2.geometry}
                  material={materials.ScratchedMetalDark}
                />
              </group>
              <group
                name="LowerWingLeft"
                position={[2.034, 2.251, -0.243]}
                rotation={[0, 0.79, 0]}
              >
                <mesh
                  name="LowerWingLeft_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.LowerWingLeft_0.geometry}
                  material={materials.ScratchedMetal}
                />
                <mesh
                  name="LowerWingLeft_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.LowerWingLeft_1.geometry}
                  material={materials.Dark}
                />
                <mesh
                  name="LowerWingLeft_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.LowerWingLeft_2.geometry}
                  material={materials.ScratchedMetalDark}
                />
              </group>
              <group
                name="LowerWingRight"
                position={[-2.034, 2.251, -0.243]}
                rotation={[-Math.PI, 0.797, -Math.PI]}
              >
                <mesh
                  name="LowerWingRight_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.LowerWingRight_0.geometry}
                  material={materials.ScratchedMetal}
                />
                <mesh
                  name="LowerWingRight_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.LowerWingRight_1.geometry}
                  material={materials.Dark}
                />
                <mesh
                  name="LowerWingRight_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.LowerWingRight_2.geometry}
                  material={materials.ScratchedMetalDark}
                />
              </group>
              <group
                name="UpperWingLeft"
                position={[2.029, 2.251, 0.227]}
                rotation={[0, -0.778, 0]}
              >
                <mesh
                  name="UpperWingLeft_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.UpperWingLeft_0.geometry}
                  material={materials.ScratchedMetal}
                />
              </group>
              <group
                name="UpperWingRight"
                position={[-2.029, 2.251, 0.227]}
                rotation={[0, 0.778, 0]}
              >
                <mesh
                  name="UpperWingRight_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.UpperWingRight_0.geometry}
                  material={materials.ScratchedMetal}
                />
              </group>
              <group
                name="LandingGearHatchBackRight"
                position={[-0.675, 2.191, -0.555]}
              >
                <mesh
                  name="LandingGearHatchBackRight_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.LandingGearHatchBackRight_0.geometry}
                  material={materials.ScratchedMetal}
                />
              </group>
              <group name="LandingGearFront" position={[0, 0.083, 0]}>
                <mesh
                  name="LandingGearFront_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.LandingGearFront_0.geometry}
                  material={materials.ScratchedMetalDark}
                />
              </group>
              <group
                name="LandingGearHatchFrontRight"
                position={[-0.143, -2.59, -0.596]}
              >
                <mesh
                  name="LandingGearHatchFrontRight_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.LandingGearHatchFrontRight_0.geometry}
                  material={materials.ScratchedMetal}
                />
              </group>
              <group
                name="LandingGearHatchFrontLeft"
                position={[0.143, -2.59, -0.596]}
              >
                <mesh
                  name="LandingGearHatchFrontLeft_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.LandingGearHatchFrontLeft_0.geometry}
                  material={materials.ScratchedMetal}
                />
              </group>
              <group
                name="LandingGearHatchBackLeft"
                position={[0.675, 2.191, -0.555]}
              >
                <mesh
                  name="LandingGearHatchBackLeft_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.LandingGearHatchBackLeft_0.geometry}
                  material={materials.ScratchedMetal}
                />
              </group>
              <group name="LandingGearBack">
                <mesh
                  name="LandingGearBack_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.LandingGearBack_0.geometry}
                  material={materials.ScratchedMetalDark}
                />
              </group>
              <group name="Greebles1" position={[0, 4.231, 0.969]}>
                <mesh
                  name="Greebles1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Greebles1_0.geometry}
                  material={materials.ScratchedMetal}
                />
                <mesh
                  name="Greebles1_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Greebles1_1.geometry}
                  material={materials.Dark}
                />
              </group>
              <group name="CockpitHatch">
                <mesh
                  name="CockpitHatch_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.CockpitHatch_0.geometry}
                  material={materials.ScratchedMetal}
                />
                <mesh
                  name="CockpitHatch_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.CockpitHatch_1.geometry}
                  material={materials.Glass}
                />
              </group>
              <group name="MainHullPlates" position={[0, 0, 4.34]}>
                <mesh
                  name="MainHullPlates_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.MainHullPlates_0.geometry}
                  material={materials.ScratchedMetal}
                />
                <mesh
                  name="MainHullPlates_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.MainHullPlates_1.geometry}
                  material={materials.ScratchedMetalDark}
                />
              </group>
              <group name="Greebles2">
                <mesh
                  name="Greebles2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Greebles2_0.geometry}
                  material={materials.ScratchedMetal}
                />
              </group>
              <group name="Missiles">
                <mesh
                  name="Missiles_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Missiles_0.geometry}
                  material={materials.ScratchedMetal}
                />
              </group>
              <group
                name="UpperCanon"
                position={[0, -2.653, -0.119]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="UpperCanon_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.UpperCanon_0.geometry}
                  material={materials.ScratchedMetal}
                />
                <mesh
                  name="UpperCanon_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.UpperCanon_1.geometry}
                  material={materials.Dark}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/starwars.glb");
