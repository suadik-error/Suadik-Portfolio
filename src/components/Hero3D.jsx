import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function Cube() {
  return (
    <mesh rotation={[10, 10, 0]}>
      <boxGeometry args={[2,2,2]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}

export default function Hero3D(){

return(

<section className="h-screen">

<Canvas>

<ambientLight intensity={0.5}/>
<directionalLight position={[2,2,5]} />

<Cube/>

<OrbitControls/>

</Canvas>

<div className="absolute top-40 left-20 text-white">

<h1 className="text-5xl font-bold">
Suadik Husseini
</h1>

<p className="mt-4">
Full Stack MERN Developer
</p>

</div>

</section>

)

}