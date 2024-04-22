export default function Experience() {



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
            <mesh scale={ 1.5 } position-x={ 5 } rotation-y={ Math.PI * .53 }>
                <boxGeometry scale={ 1.5 } />
                <meshBasicMaterial color="mediumpurple" />
            </mesh>
        </>
    )
}