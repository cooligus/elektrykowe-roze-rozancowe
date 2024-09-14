import * as React from "react"

import Image from "next/image"
import mary from "@/app/images/mary.svg"

export default function Heading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-yellow-500 via-cyan-600 to-yellow-500 z-0">
      <div className="w-screen h-100 absolute z-0 flex justify-center overflow-hidden">
        <Image
        className="md:w-screen min-w-[40em]"
        src={mary}
        alt="Picture of saint dominic getting rossary"
        />
      </div>
      <div className="z-10 bg-zinc-900/80 rounded-xl py-5 px-7 text-center drop-shadow-2xl backdrop-blur-lg">
        <h1 className="md:text-6xl text-3xl text-rose-600 uppercase font-extrabold">
          Eletrykowe <br/>
          Róże Różańcowe
        </h1>
        <p className="text-white md:text-2xl text-lg font-extralight">
            Modlisz się jednym dziesiątkiem, <br/>
            a róża odmawia resztę
        </p>
      </div>
    </div>
  )
}
