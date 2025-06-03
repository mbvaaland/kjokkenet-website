// src/components/ui/badge.tsx
"use client";

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "outline" | "solid";
  className?: string;
}

// A simple Badge. Adjust the base classes and colors as needed.
export function Badge({
  children,
  variant = "solid",
  className = "",
}: BadgeProps) {
  // “outline” variant gets a border; “solid” gets a background.
  const base = "inline-block px-2 py-1 rounded-full text-xs font-medium";
  const variantClass =
    variant === "outline"
      ? "border border-gray-300 text-gray-700 bg-white"
      : "bg-gray-200 text-gray-800";

  return <span className={`${base} ${variantClass} ${className}`}>{children}</span>;
}