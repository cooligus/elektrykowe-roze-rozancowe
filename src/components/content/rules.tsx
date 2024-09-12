import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import people from "@/app/people.svg";
import rosary from "@/app/rosary.svg";
import change from "@/app/change.svg";
import meeting from "@/app/meeting.svg";

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
    <div className="p-6">
      <h2 className="uppercase text-5xl font-extrabold text-b text-center mb-8">Reguły</h2>
      <div className="flex justify-center gap-5 ">
      {
        cards.map(card => 
          <Card className="bg-gradient-to-r from-pink-700 to-rose-800 text-white w-[16em] text-center">
            <CardHeader>
              <CardTitle>{card.description}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src={card.image} alt="" className="invert w-[12em]"/>
            </CardContent>
          </Card>
        )
      }
      </div>
    </div>
  )
}
