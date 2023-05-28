"use client"

import { AccumulativeShadows, Box, Environment, Float, Lightformer, OrbitControls, Plane, RandomizedLight, Shadow, Stage, Text, Text3D, useHelper } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { MutableRefObject, Ref, useRef, useState } from 'react'
import * as THREE from 'three'
import { useWindowWidth } from '@react-hook/window-size'


// components
import TruckModel from '../../components/Truck'
import ConfiguratorComponent from '../../components/configurator/component'
import ColorPickerComponent from '../../components/color_picker/component'

// models
import { IConfiguratorOption } from '../../models/configuration'


const Chasis = "Chasis"
const FrontBackBumper = "Front & Back Bumpers"
const TireRim = "Tire & Rim Color"
const Roof = "Roof"
const TruckPage = () => {
    const width = useWindowWidth()
    const isMobile = width < 768
    const [rotation, setRotation] = useState(new THREE.Vector3( Math.PI, -Math.PI / 2, Math.PI ))

    const [ configOptions, setConfigOptions ] = useState<Array<IConfiguratorOption>>(
        [
            {
                title: Chasis,
                colors: [ '#1e1e1e', '#A58962', 'white', '#E9D69E', '#87898C', '#A4A5A6', '#BA3B2E' ],
                selectedColor: '#E9D69E'
            },
            {
                title: FrontBackBumper,
                colors: [ '#1e1e1e', '#A58962', 'white', '#E9D69E', '#87898C', '#A4A5A6', '#BA3B2E' ],
                selectedColor: 'white'
            },
            {
                title: TireRim,
                colors: [ '#1e1e1e', '#A58962', '#E9D69E', '#87898C', '#A4A5A6', '#BA3B2E' ],
                selectedColor: '#1e1e1e'
            },
            {
                title: Roof,
                colors: [ '#1e1e1e', '#A58962', 'white', '#E9D69E', '#87898C', '#A4A5A6', '#BA3B2E' ],
                selectedColor: 'white'
            },
        ]
    )


    const onSelectedColor = (title: string, color: string) => {
        switch (title) {
            case Chasis:
                // setRotation((r)=> {
                //     r.y = Math.PI / 2
                //     return r
                // })
                break;

            case Roof:
                // setRotation((r)=> {
                //     r.y = Math.PI / 2
                //     r.x = -Math.PI / 2
                //     return r
                // })
                break;
                
            case "Front & Back Bumpers":
                break;
                
            case "Tire & Rim Color":
                break;
        
        
            default:
                break;
        }
        setConfigOptions((state)=> {
            return state.map(opt=> {
                if( opt.title === title ) {
                    opt.selectedColor = color
                }
                return opt
            })
        })
    }

    const getFrontBumperColor = ()=> {
        return configOptions.find(c=> c.title === FrontBackBumper)!.selectedColor
    }

    // const getBackWindowColor = ()=> {
    //     return configOptions.find(c=> c.title === BackWindowColor)!.selectedColor
    // }

    const getRoofBorderColor = ()=> {
        return configOptions.find(c=> c.title === Roof)!.selectedColor
    }

    const getTiresRimsColor = ()=> {
        return configOptions.find(c=> c.title === TireRim)!.selectedColor
    }

    const getChasisColor = ()=> {
        return configOptions.find(c=> c.title === Chasis)!.selectedColor
    }


    return (
        <div className='page'>
            <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }} style={{ width: '100vw', height: '100vh' }}>
                <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
                <ambientLight />
                <AccumulativeShadows position={[0, -1.16, 0]} frames={100} alphaTest={0.9} scale={10}>
                    <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
                </AccumulativeShadows>
                {/** PerfMon will detect performance issues */}
                {/* Renders contents "live" into a HDRI environment (scene.environment). */}
                <Environment resolution={256} background blur={1}>
                    <Lightformers />
                </Environment>
                <CameraRig />

                
                <OrbitControls autoRotate />

                <group position={[ 0, -1.2, -2 ]}>
                    <TruckModel
                        frontBackBumpersColor={getFrontBumperColor()}
                        backwindowColor={getFrontBumperColor()}
                        roofBorderColor={getRoofBorderColor()}
                        tiresColor={getTiresRimsColor()}
                        chasisColor={getChasisColor()}
                        rotation={rotation}
                    />
                    <OrbitControls />
                </group>

                
                <group position={[ 0, 1, -9 ]}>
                    <Text
                        font="/fonts/Rubik_Light_Regular.json"
                        scale={3.8}
                        position={[ -2, 0, -4 ]}
                    >
                        Truck
                        <meshBasicMaterial color="pink" />
                    </Text>
                </group>


            </Canvas>

            <ConfiguratorComponent>
                {
                    configOptions.map((config, i)=> {

                        return (
                            <ColorPickerComponent
                                key={i}
                                options={config}
                                onSelectedColor={ onSelectedColor }
                            />
                        )
                    })
                }
            </ConfiguratorComponent>
        </div>
    )
    return (
        <div style={{ height: '100vh' }}>
            <Canvas shadows>

                <OrbitControls />
                {/* <Shadow /> */}
                
                <spotLight color={'blue'} castShadow position={[ -1, 3, -4 ]} />
                {/* <spotLightHelper /> */}
                {/* <pointLight color={'red'} castShadow position={[ 0, 3, -4 ]} /> */}


                {/* <Lights /> */}
                
                <group position={[ 0, -1, -2 ]}>
                    {/* <group position={[ 0, 0, -2 ]}> */}
                        <TruckModel
                            frontBackBumpersColor={getFrontBumperColor()}
                            backwindowColor={getFrontBumperColor()}
                            roofBorderColor={getRoofBorderColor()}
                            tiresColor={getTiresRimsColor()}
                            chasisColor={getChasisColor()}
                            rotation={rotation}
                        />
                    {/* </group> */}
                    {/* <OrbitControls autoRotate /> */}
                </group>

                {/* <Box position={[ 0, 1, 0 ]} castShadow /> */}
                {/* <mesh
                    position={[ 0, 1, 0 ]}
                    castShadow
                >
                    <boxGeometry args={[ 1, 1, 1 ]} />
                    <meshStandardMaterial color="#1e1e1e" />
                </mesh> */}

                {/* <Plane
                    args={[ 40, 40 ]}
                    rotation={[ -Math.PI / 2, 0, 0 ]}
                    position-y={-2}
                    material-color="#F2DC99"
                    receiveShadow
                />
                 */}
                <mesh
                    rotation={[ -Math.PI / 2, 0, 0 ]}
                    position-y={-1}
                    receiveShadow
                >
                    <planeGeometry args={[ 40, 40 ]} />
                    <meshStandardMaterial color="yellow" />
                </mesh>
                

                <Stage />

                <color args={['beige']} attach={'background'} />
                <color args={['lightblue']} attach={'background'} />
                <color args={['#F2B694']} attach={'background'} />
                <color args={['#F2CED5']} attach={'background'} />
                <color args={['#5DABB7']} attach={'background'} />
                <color args={['#F2DC99']} attach={'background'} />
                {/* <color args={['#FFE3BC']} attach={'background'} /> */}
                {/* <color args={['#32A6A6']} attach={'background'} /> */}
                {/* <color args={['#99E9F2']} attach={'background'} /> */}

                <group position-z={-6} position-y={isMobile ? 3 : 1}>
                    <Text
                        font="/fonts/Rubik_Light_Regular.json"
                        fontSize={isMobile ? 2.6 : 4}

                        outlineColor={'white'}
                        outlineWidth={.02}
                        color={'#F2DC99'}
                        // fillOpacity={.2}
                    >
                        Truck
                        {/* <meshBasicMaterial color="pink" />
                        <meshBasicMaterial color="#F2ACB9" /> */}
                    </Text>
                </group>
                
                <Stage />
            </Canvas>

            <ConfiguratorComponent>
                {
                    configOptions.map((config, i)=> {

                        return (
                            <ColorPickerComponent
                                key={i}
                                options={config}
                                onSelectedColor={ onSelectedColor }
                            />
                        )
                    })
                }
            </ConfiguratorComponent>
        </div>
    )
}

const Lights = ()=> {
    const light = useRef<any>(null)
    useHelper(light, THREE.SpotLightHelper, 'cyan')

    return (
        <group>
            <ambientLight />
            <spotLight ref={light} color={'red'} intensity={1} position={[5, 10, 4]} castShadow/>
            <spotLight color={'white'} castShadow position={[ -1, 3, -4 ]} />
        </group>
    )
}
function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.position.lerp(v.set(Math.sin(t / 5), 0, 12 + Math.cos(t / 5) / 2), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}
function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef<any>(null)
  useFrame((state, delta) => (group.current!.position!.z += delta * 10) > 20 && (group.current.position.z = -60))
  return (
    <>
      {/* Ceiling */}
      <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer key={i} form="circle" intensity={2} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
          ))}
        </group>
      </group>
      {/* Sides */}
      <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
      <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
      <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
      {/* Accent (red) */}
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer form="ring" color="red" intensity={1} scale={10} position={[-15, 4, -18]} target={[0, 0, 0]} />
      </Float>
      {/* Background */}
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
      </mesh>
    </>
  )
}


export default TruckPage
