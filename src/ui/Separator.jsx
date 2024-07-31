

import React from "react";

export function Separator({ orientation = "horizontal", className = "" }) {
  return (
    <div
      className={`separator ${orientation === "vertical" ? "w-px h-full" : "h-px w-full"} bg-gray-200 ${className}`}
    />
  );
}
