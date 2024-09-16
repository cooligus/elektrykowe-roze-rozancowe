import * as React from "react"

export default function Footer() {
  const footerLinks = [
    {
      description: "Co to różaniec?",
      href: "https://sanktuarium-cieszecin.pl/rozaniec-czym-jest-rozaniec-jak-odmawiac-rozaniec"
    },
    {
      description: "Polityka prywatności",
      href: "https://lexdigital.pl/polityka-prywatnosci-wzor-zgodny-z-rodo"
    },
  ]
  return (
    <div className="bg-black md:p-30 p-10 ">
      <div className="container m-auto flex md:justify-between flex-col md:flex-row">
        <h2 className="md:text-6xl text-2xl text-rose-600 uppercase font-extrabold md:text-left text-center">
          Eletrykowe <br/>
          Róże Różańcowe
        </h2>
        <ul className="list-none font-extrabold text-xl md:text-right text-center text-white">
          {
            footerLinks.map((link, i) => 
              <li key={i}>
                <a href={link.href}>{link.description}</a>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}
