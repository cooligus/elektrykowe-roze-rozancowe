import { cn } from "@/lib/utils"
import * as React from "react"

type SectionProps = {
  heading: string,
  className?: string
  style?: React.CSSProperties,
  headerClass?: string,
  id?: string
}

export default function Section(props: React.PropsWithChildren<SectionProps>) {
  return (
    <section
      className={cn(
        "p-6 relative z-10 bg-primary",
        props.className
      )}
      id={props.id}
      style={props.style}
    >
      <h2 className={cn("uppercase text-5xl font-extrabold text-b text-center mb-8", props.headerClass)}>{props.heading}</h2>
      {props.children}
    </section>
  )
}
