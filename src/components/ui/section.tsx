import { cn } from "@/lib/utils"
import * as React from "react"

type SectionProps = {
  heading: string,
  className?: string
  id?: string
}

export default function Section(props: React.PropsWithChildren<SectionProps>) {
  return (
    <section
      className={cn(
        "p-6 relative z-10 bg-black",
        props.className
      )}
      id={props.id}
    >
      <h2 className="uppercase text-5xl font-extrabold text-b text-center mb-8">{props.heading}</h2>
      {props.children}
    </section>
  )
}
