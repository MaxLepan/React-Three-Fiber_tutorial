import { extend, useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


extend({ OrbitControls });

export default function Experience() {

    const { camera, gl } = useThree();
    const cubeRef = useRef();
    const groupRef = useRef();

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta;
        // groupRef.current.rotation.y += delta;
    });

    return (
        <>

            <orbitControls args={ [ camera, gl.domElement ] } />

            <group ref={ groupRef }>
                <mesh position-x={ -2 }>
                    <sphereGeometry />
                    <meshBasicMaterial color="orange" />
                </mesh>
                <mesh ref={ cubeRef } scale={ 1.5 } position-x={ 2 } rotation-y={ Math.PI * .53 }>
                    <boxGeometry />
                    <meshBasicMaterial color="mediumpurple" />
                </mesh>
            </group>
            
            <mesh scale={ 10 } rotation-x={ -Math.PI * 0.5 } position-y={ -1 }>
                <planeGeometry />
                <meshBasicMaterial color="greenyellow" />
            </mesh>
        </>
    )
}