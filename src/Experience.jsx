import { useFrame } from "@react-three/fiber"
import { useRef } from "react";

export default function Experience() {

    const cubeRef = useRef();
    const groupRef = useRef();

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta;
        groupRef.current.rotation.y += delta;
    });

    return (
        <>
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