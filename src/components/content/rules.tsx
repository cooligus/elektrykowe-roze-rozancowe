import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import people from "@/app/images/people.svg";
import rosary from "@/app/images/rosary.svg";
import change from "@/app/images/change.svg";
import meeting from "@/app/images/meeting.svg";
import Section from "../ui/section";

export default function Rules() {
  const cards = [
    {
      description: "Jedna róża składa się z 20 osób",
      image: people
    },
    {
      description: "Każda osoba codziennie odmawia jeden dziesiątek różańca",
      image: rosary
    },
    {
      description: "Co miesiąc wymienia się tajemniczkę u zalatora (szefa róży)",
      image: change
    },
    {
      description: "Co miesiąc na discordzie odbywa się krótkie spotkanie",
      image: meeting
    }
  ]
  return (
    <Section heading="Reguły" className="py-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 max-w-[65em] m-auto">
      {
        cards.map((card, i) => 
          <Card className="bg-gradient-to-r from-purple-800 to-rose-600 border-none text-white w-[16em] text-center justify-self-center" key={i}>
            <CardHeader>
              <CardTitle>{card.description}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Image src={card.image} alt="" className="invert w-[12em]"/>
            </CardContent>
          </Card>
        )
      }
      </div>
    </Section>
  )
}
