
import React from 'react'

import { Float, MeshDistortMaterial, OrbitControls, Sphere, Stage, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useWindowWidth } from '@react-hook/window-size'
import * as THREE from 'three'
import { Button } from '@mui/material'


// components
import TruckModel from '../../components/Truck'
import BikeModel from '../../components/Bike'

// styles
import './home.scss'



const HomePage = () => {
    const width = useWindowWidth()
    const isMobile = width < 768
    
    return (
        <div>
            
            {/* section with welcome content */}
            <div className="welcome">

                <Canvas shadows className='welcome_canvas'>

                    {/* <Box args={[ 2, 2, 2 ]} material-color='beige' castShadow receiveShadow /> */}
                    {/* <OrbitControls /> */}
                    <spotLight color={'white'} castShadow position={[ 0, 3, -4 ]} />
                    <ambientLight color={'white'} />
                    {/* <pointLight color={'red'} castShadow position={[ 0, 3, -4 ]} /> */}

                    {/* <TruckModel /> */}

                    <Float floatIntensity={5} speed={2}>
                        
                        <Text
                            font="/fonts/Rubik_Light_Regular.json"
                            fontSize={isMobile ? 8 : 16}

                            outlineColor={'white'}
                            outlineWidth={.02}
                            color={'#F2DC99'}
                            // fillOpacity={.2}
                            position-z={-24}
                        >
                            Cyber
                            {/* <meshBasicMaterial color="pink" />
                            <meshBasicMaterial color="#F2ACB9" /> */}
                        </Text>

                    </Float>

                    <group position={[ 0, 0, -12 ]}>
                        <Sphere args={[ 6, 100, 100 ]} material-color="red">
                            <MeshDistortMaterial
                                color={'green'}
                                wireframe
                                emissive={new THREE.Color(0xb07878)}
                                emissiveIntensity={.3}
                            />
                        </Sphere>
                    </group>

                    <color args={['#F2DC99']} attach={'background'} />
                    {/* <color args={['#FFE3BC']} attach={'background'} /> */}
                    {/* <color args={['#32A6A6']} attach={'background'} /> */}
                    {/* <color args={['#99E9F2']} attach={'background'} /> */}

                </Canvas>
                

                <div className="welcome_content">
                
                    <p className="welcome_title">
                        The Cyber Times
                    </p>
                    
                    <p className="welcome_text">
                        The cyber times are here. Start your cyber journey now and enjoy all the mysteries you can imagine.
                    </p>

                </div>

                

            </div>

            <div className='buy_cyber'>
                <p className='buy_cyber_title'>
                    Choose Your Journey
                </p>
                <p className='buy_cyber_text'>
                    Choose your journey and start exploring.
                </p>
            </div>

            {/* row of the bike and the truck 3d cards */}
            <div className="choice">

                
                <div className="choice_canvas">
                    <Canvas shadows style={{ borderRadius: '.8rem', }}>

                        {/* <Box args={[ 2, 2, 2 ]} material-color='beige' castShadow receiveShadow /> */}
                        {/* <OrbitControls /> */}
                        <spotLight color={'white'} castShadow position={[ 0, 3, -4 ]} />
                        <ambientLight color={'white'} />
                        {/* <pointLight color={'red'} castShadow position={[ 0, 3, -4 ]} /> */}

                        <group position-y={-1.5}>
                            <TruckModel
                                tiresColor='white'
                                chasisColor='white'
                                backwindowColor='white'
                                roofBorderColor='white'
                                frontBackBumpersColor='white'
                                rotation={new THREE.Vector3( Math.PI, -Math.PI / 2, Math.PI )}
                                scale={1.2}
                            />
                        </group>

                        <CanvasText
                            text='Truck'
                            size={5}
                            mobileSize={3}
                            z={-4}
                            y={1.5}
                        />

                        <color args={['#F2DC99']} attach={'background'} />
                    </Canvas>
                    
                    {/* content overlay */}
                    <ModelContentOverlay title='Go Cyber' url='/truck' />
                </div>
                
                <div className="choice_canvas">
                    <Canvas shadows style={{ borderRadius: '.8rem', }}>

                        {/* <Box args={[ 2, 2, 2 ]} material-color='beige' castShadow receiveShadow /> */}
                        {/* <OrbitControls /> */}
                        <spotLight color={'white'} castShadow position={[ 0, 3, -4 ]} />
                        <ambientLight color={'white'} />
                        {/* <pointLight color={'red'} castShadow position={[ 0, 3, -4 ]} /> */}

                        <group position-y={1}>
                            <BikeModel scale={1.6} />
                        </group>


                        <CanvasText
                            text='Bike'
                            size={7.2}
                            mobileSize={4}
                            z={-4}
                            y={1}
                        />


                        <color args={['#F2DC99']} attach={'background'} />
                    </Canvas>
                    
                    {/* content overlay */}
                    <ModelContentOverlay title='Go Cyber' url='/bike' />
                </div>
                
            </div>



        </div>
    )
}


const ModelContentOverlay = ({ title, url }: { title: string, url: string})=> {

    return (
        <div className='choice_canvas__go'>
            <Button
                variant='contained'
                color='primary'
                href={url}
            >
                { title }
            </Button>
        </div>
    )
}

type CanvasTextProps = {
    text: string,
    color?: string,
    mobileSize: number
    size: number
    z: number
    y: number
}
const CanvasText = ({ text, color, mobileSize, size, z, y }: CanvasTextProps) => {
    const width = useWindowWidth()
    const isMobile = width < 768

    return (
        <Float floatIntensity={3} speed={1.2}>
            
            <Text
                font="/fonts/Eva_Bold.json"
                fontSize={isMobile ? mobileSize : size}

                outlineColor={'white'}
                outlineWidth={.02}
                color={color || '#F2DC99'}
                // fillOpacity={.2}
                position-z={z}
                position-y={y}
            >
                {text}
                {/* <meshBasicMaterial color="pink" />
                <meshBasicMaterial color="#F2ACB9" /> */}
            </Text>

        </Float>
    )
}

export default HomePage
