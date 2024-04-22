import { useFrame } from "@react-three/fiber"
import { useRef } from "react";

export default function Experience() {

    const cubeRef = useRef();

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta;
    });

    return (
        <>
            <mesh position-x={ -5 }>
                <sphereGeometry />
                <meshBasicMaterial color="orange" />
            </mesh>
            <mesh scale={ 10 } rotation-x={ -Math.PI * 0.5 } position-y={ -1 }>
                <planeGeometry />
                <meshBasicMaterial color="greenyellow" />
            </mesh>
            <mesh ref={ cubeRef } scale={ 1.5 } position-x={ 5 } rotation-y={ Math.PI * .53 }>
                <boxGeometry />
                <meshBasicMaterial color="mediumpurple" />
            </mesh>
        </>
    )
}