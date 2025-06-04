// src/components/ui/tabs.tsx
"use client";

import * as TabsPrimitives from "@radix-ui/react-tabs";
import React from "react";

interface TabsProps {
  /** Either controlled (value & onValueChange) or uncontrolled (defaultValue) */
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  className,
  children,
}: TabsProps) {
  return (
    <TabsPrimitives.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      className={className}
    >
      {children}
    </TabsPrimitives.Root>
  );
}

export const TabsList = TabsPrimitives.List;
export const TabsTrigger = TabsPrimitives.Trigger;
export const TabsContent = TabsPrimitives.Content;