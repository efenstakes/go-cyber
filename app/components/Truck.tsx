import React, { useEffect, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import * as THREE from 'three'


type TruckModelProps = {
  frontBackBumpersColor: string
  backwindowColor: string
  roofBorderColor: string
  tiresColor: string
  chasisColor: string
  scale?: number
  rotation: THREE.Vector3
}
export default function TruckModel({ rotation, frontBackBumpersColor, backwindowColor, roofBorderColor, tiresColor, chasisColor, scale = 1, }: TruckModelProps) {
  const { nodes, materials }: any = useGLTF("/models/truck-cyber.gltf");

  return (
    <group
      dispose={null}
      rotation={[ rotation.x, rotation.y, rotation.z ]}
      scale={[ scale, scale, scale ]}
      // position={[ 0, -1, -2 ]}
      castShadow
    >

      {/* front & back bumper area, also goes around the car thru the wheels  */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.steer.geometry}
        material={materials["gray.002"]}
        material-color={frontBackBumpersColor}
      />

      {/* back window border */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interior003.geometry}
        material={materials["gray.002"]}
        material-color={backwindowColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interior003_1.geometry}
        material={materials["light_f.002"]}
      />

      {/* full body - dont color this */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interior003_2.geometry}
        material={materials["body.002"]}
        material-color={chasisColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interior003_3.geometry}
        material={materials.glass_crack}
      />

      {/* top glass and front glass border */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interior003_4.geometry}
        material={materials["glassgray.002"]}
        material-color={roofBorderColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interior003_5.geometry}
        material={materials.Light}
        material-color="green"
      />
      
      {/* rims and tires */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires.geometry}
        material={materials["rubber.002"]}
        material-color={tiresColor}
      />
    </group>
  );
}

useGLTF.preload("/models/truck-cyber.gltf");
