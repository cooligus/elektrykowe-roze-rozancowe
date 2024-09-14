import * as React from "react"

import Image from "next/image"
import joseph from "@/app/images/joseph.jpg"
import rose from "@/app/images/rose.jpg"
import Section from "../ui/section"
import { Card } from "../ui/card"

export default function Contact() {
  const cards = [
    {
      description: "Jerzy Talar",
      image: joseph,
      href: ''
    },
  ]
  return (
    <Section heading="Kontakt" id="contact" 
      className="py-40 px-0 text-white bg-center bg-no-repeat bg-hero bg-cover backdrop-blur-sm" 
      headerClass="text-rose-800 md:text-7xl text-5xl md:text-left md:absolute md:top-0 md:right-8 py-4 mb-0" 
      style={{backgroundImage: `url(${rose.src})`}}>
      <div className="flex justify-center gap-3">
        {cards.map((card, i) => 
        <Card className="border-none w-[16em] bg-zinc-900/80 text-center p-6 backdrop-blur-md" key={i}>
          <Image 
          src={card.image}
          alt="Profile picture of Jerzy Talar"
          className="rounded-full"
          />
          <p className="text-white font-extrabold text-2xl mt-4">
            {card.description}
          </p>
        </Card>
        )}
      </div>
    </Section>
  )
}
