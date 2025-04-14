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
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('/homepage2.png')]">
        <div className="container mx-auto p-4 text-center transform -translate-y-40">
          <h2 className="text-white text-4xl font-bold"> Velkommen til Kjøkkenet Kafe & Delikatesse</h2>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="min-h-screen flex items-center justify-center bg-[#A3B18A]">
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4">Meny</h2>
          {/* Menu content goes here */}
        </div>
      </section>

      {/* Opening Hours Section */}
      <section id="opening-hours" className="min-h-screen flex items-center justify-center bg-[#A3B18A]">
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Åpningstider</h2>
          {/* Orange Text Box */}
          <div className="bg-orange-600 text-orange-100 rounded-lg py-4 px-6 shadow-md w-full max-w-md mx-auto">
            <ul className="space-y-1">
              {openingHours.map((item, index) => (
                <li key={index} className="flex justify-between border-b border-orange-500 pb-1">
                  <span>{item.day}:</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-[#A3B18A]">
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4">Kontakt oss</h2>
          {/* Contact content goes here */}
        </div>
      </section>
    </div>
  );
}