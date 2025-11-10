"use client";

import React from "react";
import type { Token } from "@/store/tokenSlice";
import TokenImageLogo from "./ImageLogo"; 
import TokenMainContent from "./MainContent";

const TokenDisplayCard: React.FC<{ token: Token }> = ({ token }) => {

  const formatValue = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`;
    return `$${value.toFixed(0)}`;
  };

  return (
    <a
      href="#"
      className="flex flex-row gap-2 p-3 md:p-4 bg-gray-900/50 hover:bg-gray-800/70 transition duration-300 cursor-pointer border-b border-gray-800 md:min-h-[6rem]"
    >
      
      {/* 1. Logo/Address Column: Use the imported component */}
      <TokenImageLogo token={token} />
      
      {/* 2. Main Content Column: Use the imported component */}
      <TokenMainContent token={token} formatValue={formatValue} />
      
    </a>
  );
};

export default TokenDisplayCard;