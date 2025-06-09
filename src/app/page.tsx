// src/app/page.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Home() {
  // Opening hours data
  const openingHours = [
    { day: "Måndag", hours: "Stengt" },
    { day: "Tysdag", hours: "10:00 - 16:00" },
    { day: "Onsdag", hours: "10:00 - 16:00" },
    { day: "Torsdag", hours: "10:00 - 17:00" },
    { day: "Fredag", hours: "10:00 - 16:00" },
    { day: "Laurdag", hours: "10:00 - 16:00" },
    { day: "Søndag", hours: "Stengt" },
  ]

  return (
    <div className="scroll-smooth">
      {/* Home Section */}

      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('/kjokkenet_12.jpg')]"
      ></section>

      {/* Menu Section */}

      <section id="menu" className="min-h-screen flex flex-col md:flex-row bg-[#7c9885]">
        {/* Left half (text + button) */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 h-auto md:h-screen">
          <div className="text-center w-full max-w-md">
            <h2 className="text-4xl text-white font-light tracking-wide mb-3">Meny</h2>
            <hr className="mx-auto w-32 border-t border-white mb-8" />

            <div className="space-y-6 text-white">
              <p className="text-lg font-light leading-relaxed">
                Me lagar mat med kjærleik og førsteklasses råvarer. For oss er kos og hyggeleg stemning ein viktig del
                av matgleda.
              </p>

              <p className="text-lg font-light leading-relaxed">
                Ønsker du en rask og smakfull lunsj? Me har alltid ferske lunsjbokser klare!
              </p>
            </div>

            <div className="flex items-center justify-center space-x-6 mt-8">
              <Link
                href="/menu"
                className="
                  bg-[#d97706]
                  text-white
                  px-8 py-3
                  rounded-lg
                  hover:bg-[#b45309]
                  transition-colors
                  duration-200
                  font-medium
                  text-lg
                "
              >
                Se full meny
              </Link>
            </div>
          </div>
        </div>

        {/* Right half (image) */}
        <div className="w-full md:w-1/2 flex-1 md:h-screen relative">
          <Image src="/kjokkenet_5.jpg" alt="Meny photo" fill className="object-cover" sizes="100vw" />
        </div>
      </section>

      {/* Opening Hours Section */}

      <section id="opening-hours" className="min-h-screen flex items-center justify-center bg-[#7c9885]">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-[#E8DCC3] rounded-lg shadow-md p-6 sm:p-8 md:p-10 w-full max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-stretch md:h-[40rem]">
              {/* Left: Orange "Åpningstider" box */}
              <div className="bg-[#d97706] text-white rounded-lg w-full md:w-1/2 flex items-center justify-center">
                <div className="max-w-sm text-center p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide mb-8">Åpningstider</h2>
                  <ul className="space-y-2">
                    {openingHours.map((item, index) => (
                      <li key={index} className="border-b border-orange-500 pb-1 pr-2 flex justify-between">
                        <span className="font-semibold">{item.day}:</span>
                        <span className="font-light text-sm">{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Photo */}
              <div className="w-full md:w-1/2 relative h-64 md:h-full">
                <Image
                  src="/kjokkenet_7.jpg"
                  alt="Photo"
                  fill
                  className="object-cover rounded shadow"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}

      <section id="contact" className="min-h-screen flex bg-[#7c9885]">
        <div className="w-full flex flex-col md:flex-row">
          {/* Left: Kontakt oss photo */}
          <div className="w-full md:w-1/2 h-64 md:h-screen relative">
            <Image
              src="/kjokkenet_20.webp"
              alt="Kontakt oss photo"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          {/* Right: Kontakt oss text box */}
          <div className="w-full md:w-1/2 h-auto md:h-screen flex items-start md:items-center justify-center pt-8 md:pt-0 px-6 md:px-12">
            <div className="max-w-md text-center">
              <h2 className="text-4xl text-white font-light tracking-wide mb-3">Kontakt oss</h2>
              <hr className="mx-auto w-60 border-t border-white mb-8" />

              <div className="space-y-6 text-white">
                <p className="text-lg font-light leading-relaxed">
                  Du kan kontakte oss for spørsmål, bestillingar eller anna informasjon.
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="text-base font-medium">Planlegg eit uforgløymeleg selskap hos oss!</p>
                    <p className="text-base font-medium">
                      Vi opnar dørene for lukka selskap utanom ordinær opningstid, enten det er ei feiring, eit møte
                      eller ein spesiell anledning.
                    </p>
                  </div>
                  <p className="text-base font-medium">Vi ser fram til å høyre frå deg.</p>
                </div>
              </div>

              {/* Contact info with icons */}
              <div className="space-y-6 pt-4">
                <p className="text-center text-lg font-light text-white">
                  Hilsen Linn & resten av gjengen på Kjøkkenet.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-white" />
                    <span className="text-base text-white">+47 51 48 20 08</span>
                  </div>

                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-white" />
                    <span className="text-base text-white">linn@kjokkenet-bryne.no</span>
                  </div>

                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-white" />
                    <span className="text-base text-white">Storgata 44, 4340 Bryne</span>
                  </div>
                </div>
              </div>

              {/* Social media */}
              <div className="flex justify-center space-x-6 pt-4 mb-8">
                <a
                  href="https://www.facebook.com/KjokkenetBryne/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <FaFacebook className="w-8 h-8 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/kjokkenetcafeogdelikatesse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <FaInstagram className="w-8 h-8 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
