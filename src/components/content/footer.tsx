import * as React from "react"

export default function Footer() {
  return (
    <div className="bg-black md:p-30 p-20 flex md:justify-between flex-col md:flex-row">
        <h2 className="md:text-6xl text-2xl text-rose-600 uppercase font-extrabold">
          Eletrykowe <br/>
          Róże Różańcowe
        </h2>
        <ul className="list-none font-extrabold text-xl">
            <li><a href="https://sanktuarium-cieszecin.pl/rozaniec-czym-jest-rozaniec-jak-odmawiac-rozaniec">Co to różaniec?</a></li>
            <li><a href="https://lexdigital.pl/polityka-prywatnosci-wzor-zgodny-z-rodo">Polityka prywatności</a></li>
        </ul>
    </div>
  )
}
