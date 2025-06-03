// src/app/menu/page.tsx
"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TakeawayMenu } from "@/components/takeaway-menu";
import { InHouseMenu } from "@/components/in-house-menu";

export default function MenuPage() {
  return (
    <div className="bg-[#B6CA93] min-h-screen">
      <div className="container mx-auto py-10 px-4 md:px-6">
        <div className="flex flex-col items-center mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Våre Menyer
          </h1>
          <p className="text-muted-foreground max-w-[700px]">
            Me lagar mat med kjærleik og førsteklasses råvarer. For oss er kos og hyggeleg stemning ein viktig del av matgleda.
          </p>
        </div>

      <Tabs defaultValue="in-house" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="in-house">Cafe Meny</TabsTrigger>
          <TabsTrigger value="takeaway">Hent Heim Tapasmeny</TabsTrigger>
        </TabsList>
        <TabsContent value="in-house">
          <InHouseMenu />
        </TabsContent>
        <TabsContent value="takeaway">
          <TakeawayMenu />
        </TabsContent>
      </Tabs>
    </div>
  </div>
  );
}