import * as React from "react"

import HeadingCard from "@/components/content/heading"
import Rules from "@/components/content/rules"
import Registration from "@/components/content/registration"
import Contact from "@/components/content/contact"
import Footer from "@/components/content/footer"

export default function Home() {
  return (
    <div>
      <HeadingCard/>
      <Rules/>
      <Registration/>
      <Contact/>
      <Footer/>
    </div>
  )
}
