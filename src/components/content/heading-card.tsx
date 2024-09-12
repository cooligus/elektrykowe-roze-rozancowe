import * as React from "react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import saint from "@/app/saint.jpg"
import mary from "@/app/mary.svg"

export default function HeadingCard() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-indigo-800 to-red-600">
      <div className="w-screen h-100 absolute z-0 justify-center items-start">
        <Image
        className=""
        src={mary}
        alt="Picture of saint dominic getting rossary"
        />
      </div>
    <Card className="w-[45em] overflow-hidden flex flex-row z-10">
      <div
        className="max-w-[20em] max-h-[20em] min-w-[20em] min-h-[20em] overflow-hidden"
      >
        <Image 
        className="object-fill"
        src={saint}
        alt="Picture of saint dominic getting rossary"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-4xl text-rose-600 uppercase font-extrabold">Eletrykowe <br/>Róże Różańcowe</CardTitle>
        <CardDescription>
          Modlisz się jednym dziesiątkiem,
          a róża odmawia resztę
          </CardDescription>
      </CardHeader>
    </Card>
    </div>
  )
}
