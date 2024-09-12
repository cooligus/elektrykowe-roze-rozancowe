import * as React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Section from "../ui/section"
import confession from "@/app/confession.jpg"

export default function Registration() {
  return (
    <Section heading="Zapisy">
      <div className="flex justify-center items-center gap-5">
        <div className="w-[30em] h-[20em] overflow-hidden flex items-center rounded-xl">
          <Image
          className="object-fill relative top-7"
          src={confession}
          alt="Confession: happy priest"
          />
        </div>
        <p className="font-extrabold text-xl">
          Ponieważ nasze plakaty są <br/>
          trollogenne, nie obsługujemy <br/>
          cyfrowych zapisów - patrz w <br/>
          kontakt 
        </p> 
      </div>
    </Section>
  )
}
