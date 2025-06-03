// src/components/ui/tabs.tsx
"use client";

import * as TabsPrimitives from "@radix-ui/react-tabs";
import React from "react";

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

export function Tabs({ defaultValue, className, children }: TabsProps) {
  return (
    <TabsPrimitives.Root defaultValue={defaultValue} className={className}>
      {children}
    </TabsPrimitives.Root>
  );
}

export const TabsList = TabsPrimitives.List;
export const TabsTrigger = TabsPrimitives.Trigger;
export const TabsContent = TabsPrimitives.Content;