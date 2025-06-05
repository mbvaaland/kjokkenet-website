// src/components/takeaway-menu.tsx
import { Flame, Snowflake } from "lucide-react";

export function TakeawayMenu() {
  const tapasMenus = [
    {
      name: "Lunsjtapas",
      price: 339,
      items: [
        "Pastasalat med kylling",
        "Grøn salat",
        "Kyllingspyd",
        "Vårrullar med chillisaus",
        "Kjøkkenet's Foccacia",
        "Kjøkkenet's pesto",
        "Dressing",
      ],
    },
    {
      name: "Kveldstapas",
      price: 495,
      hotItems: [
        "Jærpoteter",
        "Tapasboller",
        "Steikte grønsaker med ldsøe-pølser",
        "Vårrullar/Samosa med chillisaus",
        "Kyllingspyd",
      ],
      coldItems: [
        "Pastasalat med kylling",
        "Grøn salat",
        "Oliven",
        "Skagenrøre med reker",
        "Taleggio-ost, nøtter, aprikos og honning",
        "Kjøkkenet's Foccacia",
        "Kjøkkenet's Pesto",
        "Dressing",
      ],
    },
  ];

  return (
    <div className="px-4 space-y-12 pb-12">
      <div className="space-y-12 max-w-2xl mx-auto">
        {tapasMenus.map((menu) => (
          <div
            key={menu.name}
            className="bg-white/60 backdrop-blur-sm rounded-lg border border-orange-100 overflow-hidden"
          >
            <div className="bg-orange-100 px-6 py-4 border-b border-orange-100">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-[#cc5801]">{menu.name}</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#cc5801]">{menu.price},-</div>
                  <div className="text-sm text-gray-600">per person</div>
                </div>
              </div>
            </div>

            <div className="p-6">
              {menu.name === "Lunsjtapas" ? (
                <div className="space-y-3">
                  {menu.items?.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#cc5801] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Flame className="h-4 w-4 text-[#cc5801]" />
                      <h4 className="font-semibold text-[#cc5801]">Varmt:</h4>
                    </div>
                    <div className="space-y-3">
                      {menu.hotItems?.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-[#cc5801] rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Snowflake className="h-4 w-4 text-[#cc5801]" />
                      <h4 className="font-semibold text-[#cc5801]">Kaldt:</h4>
                    </div>
                    <div className="space-y-3">
                      {menu.coldItems?.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-[#cc5801] rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-orange-100 max-w-2xl mx-auto">
        <h3 className="font-medium mb-3 text-[#cc5801]">Bestillingsinformasjon</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p>
            Me skreddersyr dine tapasretter. Velg blant det som fristar frå vårt
            utval og komponer din eigen tapasmeny. Ring oss eller kom innom for
            å bestilla.
          </p>
          <p className="font-medium text-[#cc5801] mt-3">Telefon: 51 48 20 08</p>
        </div>
      </div>
    </div>
  );
}