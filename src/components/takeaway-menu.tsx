"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame, Snowflake } from "lucide-react"

export function TakeawayMenu() {
  const tapasMenus = [
    {
      name: "Lunsjtapas",
      nameEn: "Lunch Tapas",
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
      nameEn: "Evening Tapas",
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
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Hent Heim Tapasmeny</h2>
        <p className="text-muted-foreground">
        Me skreddersyr dine tapasretter. Velg blant det som fristar
        frå vårt utval og komponer din eigen tapasmeny.
        </p>
      </div>

      <div className="grid gap-6">
        {tapasMenus.map((menu) => (
          <Card key={menu.name} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-2xl text-orange-600">{menu.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-gray-600">{menu.nameEn}</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{menu.price},-</div>
                  <div className="text-sm text-muted-foreground">per person</div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              {menu.name === "Lunsjtapas" ? (
                <div className="space-y-3">
                  {menu.items?.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Flame className="h-4 w-4 text-red-500" />
                      <h4 className="font-semibold text-red-600">Varmt:</h4>
                    </div>
                    <div className="space-y-2">
                      {menu.hotItems?.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Snowflake className="h-4 w-4 text-blue-500" />
                      <h4 className="font-semibold text-blue-600">Kaldt:</h4>
                    </div>
                    <div className="space-y-2">
                      {menu.coldItems?.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="font-medium mb-3">Bestillingsinformasjon / Ordering Information</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Ring oss eller kom innom for å bestilla.</p>
          <p>Call us or visit our cafe to order your tapas.</p>
          <p className="font-medium text-foreground mt-3">Telefon: 51 48 20 08</p>
        </div>
      </div>
    </div>
  )
}