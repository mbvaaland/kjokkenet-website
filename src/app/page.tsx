// src/app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";           
import { FaFacebook, FaInstagram } from "react-icons/fa";

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
  ];

  return (
    <div className="scroll-smooth">

      {/* Home Section */}
      
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('/kjokkenet_12.jpg')]"
      >
      </section>

      {/* Menu Section */}
      
      <section
        id="menu"
        className="min-h-screen flex flex-col md:flex-row bg-[#7c9885]"
      >
        {/* Left half (text + button) */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 h-auto md:h-screen">
          <div className="text-center w-full max-w-md">
            <h2 className="text-4xl text-white font-bold mb-2">Meny</h2>
            <hr className="mx-auto w-60 border-t border-white mb-6" />

            <p className="leading-relaxed text-white mb-4">
              Me lagar mat med kjærleik og førsteklasses råvarer. For oss er kos og hyggeleg stemning ein viktig del av matgleda.
              <br />
              <br />
              Ønsker du en rask og smakfull lunsj? Me har alltid ferske lunsjbokser klare!
              <br />
            </p>

            <div className="flex items-center justify-center space-x-6 mt-6">
              <Link
                href="/menu"
                className="
                  bg-[#d97706]
                  text-white
                  px-6 py-3
                  rounded-lg
                  hover:bg-[#b45309]
                  transition
                "
              >
                Se full meny
              </Link>
            </div>
          </div>
        </div>

        {/* Right half (image) */}
        <div className="w-full md:w-1/2 flex-1 md:h-screen relative">
          <Image
            src="/kjokkenet_5.jpg"
            alt="Meny photo"
            fill                                  
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Opening Hours Section */}

      <section
        id="opening-hours"
        className="min-h-screen flex items-center justify-center bg-[#7c9885]"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="bg-[#E8DCC3] rounded-lg shadow-md p-6 sm:p-8 md:p-10 w-full max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-stretch md:h-[40rem]">
              {/* Left: Orange “Åpningstider” box */}
              <div className="bg-[#d97706] text-white rounded-lg w-full md:w-1/2 flex items-center justify-center">
                <div className="max-w-sm text-center p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
                    Åpningstider
                  </h2>
                  <ul className="space-y-2">
                    {openingHours.map((item, index) => (
                      <li
                        key={index}
                        className="border-b border-orange-500 pb-1 pr-2 flex justify-between"
                      >
                        <span className="font-semibold">{item.day}:</span>
                        <span className="text-sm">{item.hours}</span>
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
          <div className="w-full md:w-1/2 h-auto md:h-screen flex items-start md:items-center justify-center pt-4 md:pt-0 px-4 md:px-8">
            <div className="text-center">
              <h2 className="text-4xl text-white font-bold mb-2">
                Kontakt oss
              </h2>
              <hr className="mx-auto w-60 border-t border-white mb-6" />

              <p className="leading-relaxed text-white mb-4">
                Du kan kontakte oss for spørsmål, bestillingar eller anna
                informasjon.
                <br />
                <br />
                Planlegg eit uforgløymeleg selskap hos oss!
                <br />
                Vi opnar dørene for lukka selskap utanom ordinær opningstid,
                enten det er ei feiring, eit møte eller ein spesiell anledning.
                <br />
                Vi ser fram til å høyre frå deg.
                <br />
                <br />
                Hilsen Linn & resten av gjengen på Kjøkkenet.
              </p>
              <p className="text-sm leading-relaxed text-white mb-4">
                Telefon: +47 51 48 20 08
                <br />
                Email: linn@kjokkenet-bryne.no
                <br />
                Adresse: Storgata 44, 4340 Bryne
              </p>
              {/* Social Icons */}
              <div className="flex items-center justify-center space-x-6 mt-6">
                <a
                  href="https://www.facebook.com/KjokkenetBryne/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl text-black hover:text-blue-700"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/kjokkenetcafeogdelikatesse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl text-black hover:text-pink-600"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}