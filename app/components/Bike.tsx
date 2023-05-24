
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


type BikeModelProps = {
  rimColor: string
  seatWheelsHandlesColor: string
  chainCoverColor: string
  hubAxleColor: string
  bodyColor: string

}
export default function BikeModel({ rimColor, seatWheelsHandlesColor, chainCoverColor, hubAxleColor, bodyColor, }: BikeModelProps) {
  const { nodes, materials }: any = useGLTF("/models/bicycle.gltf");
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bike.geometry}
        material={materials.Quadro}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Pneu}
          position={[-0.06, 0.32, 0]}
          scale={0.09}
        />
        <group
          position={[-0.43, -0.32, 0.01]}
          rotation={[1.57, -1.41, 3.14]}
          scale={[1, 3.02, 1]}
        >

          {/* rim inside */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006.geometry}
            material={materials.Roda}
            // material-color={rimColor}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_1.geometry}
            material={materials.Pneu}
          />
        </group>
        <group position={[-1.05, -1.18, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials.Eixo}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_2.geometry}
            material={materials.Roda}
          />
        </group>
        <group
          position={[-1.05, -1.18, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.79, 0.55, 0.79]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus003.geometry}
            material={materials.Pneu}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus003_1.geometry}
            material={materials.Roda}
          />

          {/* rims outside */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus003_2.geometry}
            material={materials.Faixa}
            material-color={rimColor}
          />
        </group>
        <group
          position={[1.73, -0.42, 0.13]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 3.02, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials.Roda}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_1.geometry}
            material={materials.Pneu}
          />
        </group>
        {/* seat, wheels, handle grips */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CaboFreioFrente.geometry}
          material={materials.Pneu}
          position={[1.68, -0.25, -0.15]}
          material-color={seatWheelsHandlesColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.PedalInterno}
          position={[-1.03, -1.18, 0.16]}
          scale={0.5}
        />
        <group position={[0.27, -1.17, 0.01]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials.PedalInterno}
          />
          {/* chain ring */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_1.geometry}
            material={materials.PedalExterno}
            material-color={chainCoverColor}
          />
        </group>
        <group
          position={[1.31, 0.35, 0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.37}
        >
          {/* handlebar whole */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011.geometry}
            material={materials.Raio}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011_1.geometry}
            material={materials.Pneu}
          />
        </group>
        <group position={[1.9, -1.18, 0]}>
          {/* hub and axle */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials.Eixo}
            material-color={hubAxleColor}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={materials.Roda}
          />
        </group>
        <group
          position={[1.9, -1.18, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.79, 0.55, 0.79]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus002.geometry}
            material={materials.Pneu}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus002_1.geometry}
            material={materials.Roda}
          />
          {/* rim outside */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus002_2.geometry}
            material={materials.Faixa}
            material-color={rimColor}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsCurve.geometry}
          material={materials.Pneu}
          position={[0.43, -0.8, 0.09]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002.geometry}
          material={materials.Raio}
          position={[1.68, -0.25, -0.19]}
          scale={0.01}
        />
        <group
          position={[0.29, -0.97, 0.15]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.21, 0.13, 0.21]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010.geometry}
            material={materials.Raio}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_1.geometry}
            material={materials.Pneu}
          />
        </group>
        <group position={[0.27, -1.53, -0.49]} scale={[3.42, 3.28, 10.4]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials.Pneu}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_1.geometry}
            material={materials.Quadro}
          />
        </group>
        <group position={[0.27, -0.81, 0.52]} scale={[3.42, 3.28, 10.4]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008.geometry}
            material={materials.Pneu}
          />
          {/* skeleton body */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_1.geometry}
            material={materials.Quadro}
            material-color={bodyColor}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials.Roda}
          position={[-0.38, -0.26, 0.18]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.B_Raios.geometry}
          material={materials.Raio}
          position={[-1.05, -1.18, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.F_Raios.geometry}
          material={materials.Raio}
          position={[1.9, -1.18, 0]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/bicycle.gltf");
