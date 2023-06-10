'use client'

import Link from "next/link";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Text3D } from "@react-three/drei";


const HeaderNav = () => {
  return (
    <div className="flex items-center justify-between gap-x-5 text-white">
        <div className="w-[100px] h-[60px]">
          <Canvas camera={{ position: [0, 0, 3] }} shadows >
            <ambientLight intensity={0.7} />
            <directionalLight
           position={[0.3, 0.8, 0.3]}
            intensity={1}
            castShadow
          />
            <Center >
              <Text3D font={"./fonts/GilroyBold.json"} scale={2} rotation={[0, -0.3, 0]}  receiveShadow >
                Ash
                <meshStandardMaterial color="#B2B2B2" />
              </Text3D>
            </Center>
          </Canvas>
        </div>
        <div className="flex flex-1 items-center justify-start pl-10 gap-x-5">
          <Link href="">About</Link>
          <Link href="">Skills</Link>
          <Link href="">Experience</Link>
          <Link href="">Projects</Link>
        </div>
        <div className="relative flex flex-1 justify-end">
        <button
          type="button"
          className="p-0.5 bg-gradient-to-r from-blueOne via-blueTwo to-blueThree rounded-xl"
        >
          <div className="px-3 py-1 bg-black rounded-xl">Contact</div>
        </button>
      </div>
      </div>
  )
}

export default HeaderNav