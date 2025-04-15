import { FaFacebook, FaInstagram } from 'react-icons/fa';

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
        className="pt-16 min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('/homepage2.png')]"
      >
        <div className="container mx-auto p-4 text-center transform -translate-y-40">
          <h2 className="text-white text-4xl font-bold">
            Velkommen til Kjøkkenet Kafe & Delikatesse
          </h2>
        </div>
      </section>

      {/* Menu Section */}
      <section
        id="menu"
        className="min-h-screen flex items-center justify-center bg-[#A3B18A]"
      >
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4">Meny</h2>
          {/* Menu content goes here */}
        </div>
      </section>

      {/* Opening Hours Section */}
      <section
        id="opening-hours"
        className="min-h-screen flex items-center justify-center bg-[#A3B18A]"
      >
        <div className="container mx-auto px-4 py-8">
          {/* Beige card container */}
          <div className="bg-[#E8DCC3] rounded-lg shadow-md p-6 sm:p-8 md:p-10 w-full max-w-5xl mx-auto">
            {/* Flex layout: stacks on mobile, side-by-side on desktop */}
            {/* Forced height only on md+ screens to maintain your desired desktop design */}
            <div className="flex flex-col md:flex-row gap-6 items-stretch md:h-[40rem]">
        
              {/* Orange Box */}
              <div className="bg-[#DD5710] text-white rounded-lg w-full md:w-1/2 flex items-center justify-center">
                {/* Narrow column so text is centered */}
                <div className="max-w-sm text-center p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Åpningstider</h2>
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

               {/* Photo */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  src="/kjokkenet_7.jpg"
                  alt="Photo"
                  /* On desktop (md+), the image fills the forced height; on mobile, it auto-sizes. */
                  className="md:h-full w-auto object-cover rounded shadow"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex bg-[#A3B18A]"
      >
        <div className="w-full flex flex-col md:flex-row">
          {/* Left Column: Photo covering full page vertically */}
          <div className="w-full md:w-1/2 h-screen">
            <img src="/kjokkenet_20.webp" alt="Kontakt oss photo" className="w-full h-full object-cover"/>
          </div>

          {/* Right Column: Text Box */}
          <div className="w-full md:w-1/2 h-screen flex items-center justify-center p-8">
            <div className="text-center">
              <h2 className="text-4xl text-white font-bold mb-2">Kontakt oss</h2>
              {/* Thin white line under heading */}
              <hr className="mx-auto w-60 border-t border-white mb-6" />

              <p className="leading-relaxed text-white mb-4">
                Du kan kontakte oss for spørsmål, bestillingar eller anna informasjon.<br />
                <br />
                Planlegg eit uforgløymeleg selskap hos oss!<br />
                Vi opnar dørene for lukka selskap utanom ordinær opningstid, enten det er ei feiring, eit møte eller ein spesiell anledning.<br />
                Ta kontakt med oss for meir informasjon.<br />
                <br />
                Hilsen Linn & resten av gjengen på Kjøkkenet.
              </p>
            <p className="text-sm leading-relaxed text-white mb-4">
              Telefon: +47 51 48 20 08<br />
              Email: linn@kjokkenet-bryne.no<br />
              Adresse: Storgata 44, 4340 Bryne
            </p>
            {/* Social Icons */}
            <div className="flex items-center justify-center space-x-6 mt-6">
              <a
                href="https://www.facebook.com/KjokkenetBryne/"  /* Replace with your Facebook URL */
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-black hover:text-blue-700"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/kjokkenetcafeogdelikatesse/"  /* Replace with your Instagram URL */
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