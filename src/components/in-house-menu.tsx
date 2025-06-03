"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Utensils, Coffee, Wine, Info } from "lucide-react"

export function InHouseMenu() {
  const menuSections = [
    {
      name: "Hovedretter",
      nameEn: "Main Dishes",
      icon: <Utensils className="h-5 w-5" />,
      items: [
        {
          name: "Pastasalat med kylling",
          description:
            "Pasta, salat, agurk, tomat, rødløk, gulrot, melon, sitron/lime, karri-marinert kylling, hvitløksdressing",
          price: 229,
          allergens: "gluten, laktose, sitrus",
        },
        {
          name: "Grønn salat med kylling",
          description:
            "Agurk, tomat, rødløk, fetaost, melon, mango/ananas, sitron/lime, oliven, sylta rødløk, karri-marinert kylling, tzatsiki",
          price: 249,
          allergens: "laktose, sitrus",
        },
        {
          name: "Gresk salat",
          description: "Tomat, agurk, rødløk, fetaost, oliven, paprika, melon, sitron/lime, tzatziki",
          price: 249,
          allergens: "laktose, sitrus",
        },
        {
          name: "Sandwich",
          description:
            "Focacciabrød med agurk, tomat, rødløk, gulerot, karri-marinert kylling, hvitløksdressing og rød pesto",
          price: 219,
          allergens: "gluten, laktose, sitrus",
        },
        {
          name: "Skagen toast",
          description:
            "Grovt surdeigsbrød med reker, dill, majones, sitron, egg, salat, agurk, rødløk, sylta rødløk, melon",
          price: 249,
          allergens: "gluten, reker, sitrus",
        },
        {
          name: "Varm toast",
          description:
            "Gratinert focacciabrød med hjemmelaget aivar, rødløk, tomat, kylling og bacon, og en liten salat med tzatsiki ved siden",
          price: 285,
          allergens: "gluten, laktose, sitrus",
        },
        {
          name: "Suppa med kylling",
          description: "Krema tomatsuppe med karri-marinert kylling",
          price: 220,
          allergens: "",
        },
      ],
    },
    {
      name: "Barnemeny",
      nameEn: "Kids Menu",
      icon: <Utensils className="h-5 w-5" />,
      items: [
        {
          name: "Pasta og pølsa",
          description: "Pastaskruer, pølsa, melon, agurk, gulrot og ketchup",
          price: 145,
          allergens: "",
        },
      ],
    },
    {
      name: "Drikkevarer",
      nameEn: "Beverages",
      icon: <Wine className="h-5 w-5" />,
      items: [
        { name: "Brus", price: 58 },
        { name: "Juice", price: 69 },
        { name: "Alkoholfri øl", price: 63 },
        { name: "Øl", price: 110 },
        { name: "Vin gl.", price: 145 },
        { name: "Vin fl.", price: 490 },
        { name: "Bobbler gl.", price: 145 },
        { name: "Bobbler fl.", price: 490 },
      ],
    },
    {
      name: "Kaffi",
      nameEn: "Coffee",
      icon: <Coffee className="h-5 w-5" />,
      items: [
        { name: "Americano", price: 45 },
        { name: "Espresso", price: 45 },
        { name: "Capucciono", price: 56 },
        { name: "Latte", price: 61 },
        { name: "Islatte", price: 59 },
        { name: "Caffe mocca", price: 66 },
        { name: "Is caffe mocca", price: 64 },
        { name: "Cortado", price: 50 },
        { name: "Chai latte", price: 66 },
        { name: "Te (pose)", price: 45 },
        { name: "Te (løs)", price: 49 },
        { name: "Kakao", price: 66 },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 text-green-700">Cafe Meny</h2>
        <p className="text-muted-foreground mb-4">
          In-House Dining Menu - Enjoy fresh, locally sourced dishes in our cozy restaurant
        </p>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-sm font-medium text-green-800">Focacciabrød og pesto følger med på alle retter</p>
          <p className="text-xs text-green-600">Focaccia bread and pesto included with all dishes</p>
        </div>
      </div>

      {menuSections.map((section) => (
        <div key={section.name} className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            {section.icon}
            <h3 className="text-xl font-semibold text-green-700">{section.name}</h3>
            <span className="text-sm text-muted-foreground">({section.nameEn})</span>
          </div>

          <div className="grid gap-4">
            {section.items.map((item) => (
              <Card key={item.name}>
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-green-800">{item.name}</CardTitle>
                    <span className="font-medium">Kr. {item.price},-</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  {item.description && <CardDescription className="mb-2">{item.description}</CardDescription>}
                  {item.allergens && (
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700">
                        Allergener: {item.allergens}
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <div className="space-y-4">
        <Card className="bg-yellow-50 border-yellow-200">
          <CardHeader className="p-4">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4 text-yellow-600" />
              <CardTitle className="text-lg text-yellow-800">Ukas rett</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-yellow-700">Spør oss gjerne om ukas rett 😊</p>
            <p className="text-xs text-yellow-600">Ask us about this week's special</p>
          </CardContent>
        </Card>

        <div className="bg-muted p-4 rounded-lg space-y-2">
          <h3 className="font-medium">Tillegg og alternativer / Extras & Alternatives</h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>• Glutenfritt brød kan fås til 25kr ekstra</p>
            <p>• Soya, havre, krem m.m. 7kr ekstra (kaffe)</p>
            <p>• Det kan være variasjon av grønnsaker alt etter tilgang på råvarer</p>
            <p>• Vi har også div. smakstilsetninger</p>
            <p className="text-xs pt-2 italic">Please inform us of any allergies or special dietary requirements</p>
          </div>
        </div>
      </div>
    </div>
  )
}