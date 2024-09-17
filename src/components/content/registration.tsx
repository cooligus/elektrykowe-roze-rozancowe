import * as React from "react"

import Image from "next/image"
import Section from "../ui/section"
import confession from "@/../public/images/confession.jpg"

export default function Registration() {
  return (
    <Section heading="Zapisy" className="pb-40">
      <div className="flex justify-center items-center gap-5 md:flex-row flex-col">
        <div className="md:w-[30em] md:h-[20em] w-[15em] overflow-hidden flex items-center rounded-xl">
          <Image
          className="object-fill relative top-7"
          src={confession}
          alt="Confession: happy priest"
          />
        </div>
        <p className="font-extrabold text-xl md:text-left text-center">
          Ponieważ nasze plakaty są <br/>
          trollogenne, nie obsługujemy <br/>
          cyfrowych zapisów - musisz<br/>
          iść do ludzi którzy są podani <br/>
          w <a href="#contact" className="underline">kontakcie</a>
        </p> 
      </div>
    </Section>
  )
}
