import * as React from "react"

import Image from "next/image"
import mary from "@/app/images/mary.svg"

export default function Heading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-indigo-800 to-red-600 z-0">
      <div className="w-screen h-100 absolute z-0 justify-center items-start">
        <Image
        className="w-screen"
        src={mary}
        alt="Picture of saint dominic getting rossary"
        />
      </div>
      <div className="z-10 bg-white/95 rounded-xl py-5 px-7 text-center drop-shadow-2xl">
        <h1 className="text-6xl text-rose-600 uppercase font-extrabold">
          Eletrykowe <br/>
          Róże Różańcowe
        </h1>
        <p className="text-black text-2xl font-extralight">
            Modlisz się jednym dziesiątkiem, <br/>
            a róża odmawia resztę
        </p>
      </div>
    </div>
  )
}
