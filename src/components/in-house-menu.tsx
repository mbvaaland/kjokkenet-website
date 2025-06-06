// src/components/in-house-menu.tsx
"use client";

import { Utensils, Coffee, Wine, Info } from "lucide-react";

export function InHouseMenu() {
  const menuSections = [
    {
      name: "Hovedretter",
      icon: <Utensils className="h-5 w-5" />,
      items: [
        {
          name: "Pastasalat med kylling",
          description:
            "Pasta, salat, agurk, tomat, rødløk, gulrot, melon, sitron/lime, karri-marinert kylling, hvitløksdressing",
          price: 229,
        },
        {
          name: "Grønn salat med kylling",
          description:
            "Agurk, tomat, rødløk, fetaost, melon, mango/ananas, sitron/lime, oliven, sylta rødløk, karri-marinert kylling, tzatsiki",
          price: 249,
        },
        {
          name: "Gresk salat",
          description: "Tomat, agurk, rødløk, fetaost, oliven, paprika, melon, sitron/lime, tzatziki",
          price: 249,
        },
        {
          name: "Sandwich",
          description:
            "Focacciabrød med agurk, tomat, rødløk, gulerot, karri-marinert kylling, hvitløksdressing og rød pesto",
          price: 219,
        },
        {
          name: "Skagen toast",
          description:
            "Grovt surdeigsbrød med reker, dill, majones, sitron, egg, salat, agurk, rødløk, sylta rødløk, melon",
          price: 249,
        },
        {
          name: "Varm toast",
          description:
            "Gratinert focacciabrød med hjemmelaget aivar, rødløk, tomat, kylling og bacon, og en liten salat med tzatsiki ved siden",
          price: 285,
        },
        {
          name: "Suppa med kylling",
          description: "Krema tomatsuppe med karri-marinert kylling",
          price: 220,
        },
        {
          name: "Ukas rett",
          description: "Spør oss gjerne om ukas rett!",
          // no `price` here
        },
      ],
    },
    {
      name: "Barnemeny",
      icon: <Utensils className="h-5 w-5" />,
      items: [
        {
          name: "Pasta og pølsa",
          description: "Pastaskruer, pølsa, melon, agurk, gulrot og ketchup",
          price: 145,
        },
      ],
    },
    {
      name: "Drikkevarer",
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
      icon: <Coffee className="h-5 w-5" />,
      items: [
        { name: "Americano", price: 45 },
        { name: "Espresso", price: 45 },
        { name: "Cappuccino", price: 56 },
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
  ];

  return (
    <div className="px-4 space-y-12 pb-12">
      <div className="text-center mb-8">
        <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg max-w-md mx-auto">
          <p className="text-sm font-medium text-[#4a5d4a]">Focacciabrød og pesto følger med alle retter</p>
        </div>
      </div>

      {menuSections.map((section) => (
        <div key={section.name} className="space-y-6">
          <div className="flex items-center gap-3 justify-center">
            {section.icon}
            <h3 className="text-xl font-semibold text-[#4a5d4a]">{section.name}</h3>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {section.items.map((item, index) => (
              <div key={item.name} className="group">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-[#4a5d4a] mb-1">{item.name}</h4>
                    {"description" in item && item.description && (
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                   )}
                  </div>
                  {item.price !== undefined && (
                    <div className="text-right flex-shrink-0">
                      <span className="font-medium text-[#4a5d4a]">
                        Kr. {item.price},-
                      </span>
                    </div>
                  )}
                </div>
                {index < section.items.length - 1 && (
                  <div className="mt-4 border-b border-green-200/50"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="max-w-2xl mx-auto">
        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Info className="h-6 w-6 text-[#4a5d4a]" />
          </div>
          <div className="text-sm text-gray-600 space-y-3 pt-1">
            <p>• Me har glutenfritt brød til 25kr ekstra</p>
            <p>• Soya, havre, krem m.m. 7kr ekstra</p>
            <p>• Me har også div. smakstilsetninger</p>
            <p>• Det kan være variasjon av grønnsaker alt etter tilgang på råvarer</p>
          </div>
        </div>
      </div>
    </div>
  );
}