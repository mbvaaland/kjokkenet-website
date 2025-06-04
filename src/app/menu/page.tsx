"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TakeawayMenu } from "@/components/takeaway-menu"
import { InHouseMenu } from "@/components/in-house-menu"

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("in-house")

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        activeTab === "in-house"
          ? "bg-gradient-to-br from-[#f0f4e8] via-[#e8f2dc] to-[#dce8d0]"
          : "bg-gradient-to-br from-[#fed7aa] via-[#fed7aa] to-[#fdba74]"
      }`}
    >
      <div className="container mx-auto py-10 px-4 md:px-6">
        <div className="flex flex-col items-center mb-10 text-center">
          <h1
            className={`text-3xl md:text-4xl font-bold tracking-tight mb-8 transition-colors duration-300 ${
              activeTab === "in-house" ? "text-[#4a5d4a]" : "text-[#b45309]"
            }`}
          >
            Våre Menyer
          </h1>
        </div>

        <Tabs defaultValue="in-house" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8 h-14 p-1 bg-white/90 backdrop-blur-sm shadow-lg border-2 border-gray-200 rounded-xl">
            <TabsTrigger
              value="in-house"
              className="h-full text-base font-semibold rounded-lg transition-all duration-300 data-[state=active]:bg-[#7c9885] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105 hover:bg-[#e8f2dc] hover:text-[#4a5d4a]"
            >
              Cafe Meny
            </TabsTrigger>
            <TabsTrigger
              value="takeaway"
              className="h-full text-base font-semibold rounded-lg transition-all duration-300 data-[state=active]:bg-[#d97706] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105 hover:bg-[#fed7aa] hover:text-[#b45309]"
            >
              Takeaway Tapas Meny
            </TabsTrigger>
          </TabsList>
          <TabsContent value="in-house" className="mt-0">
            <InHouseMenu />
          </TabsContent>
          <TabsContent value="takeaway" className="mt-0">
            <TakeawayMenu />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}