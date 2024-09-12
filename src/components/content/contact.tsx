import * as React from "react"

import Image from "next/image"
import joseph from "@/app/images/joseph.jpg"
import Section from "../ui/section"
import { Card } from "../ui/card"

export default function Contact() {
  return (
    <Section heading="Kontakt" id="contact" className="bg-gradient-to-r from-indigo-800 to-red-600 py-40">
      <div className="flex justify-center">
        <Card className="border-none w-[16em] bg-zinc-900/80 text-center p-6">
          <Image 
          src={joseph}
          alt="Profile picture of Jerzy Talar"
          className="rounded-full"
          />
          <p className="text-white font-extrabold text-2xl mt-4">
            Józef Talar
          </p>
        </Card>
      </div>
    </Section>
  )
}
