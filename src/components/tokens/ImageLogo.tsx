import React from "react";
import type { Token } from "@/store/tokenSlice"; 

interface TokenImageLogoProps {
  token: Token;
}

const TokenImageLogo: React.FC<TokenImageLogoProps> = ({ token }) => (
  // Logo/Address Column 
  <div className="flex flex-col shrink-0">
    <div className="w-15 h-15"> 
      <img
        src={token.logo}
        alt={token.name}
        className="rounded-md ring-1 ring-pink-500/50 md:ring-2 md:ring-gray-600 w-full h-full object-cover" 
        width={48} 
        height={48}
      />
    </div>
    <div className="text-xs mt-2 font-mono text-gray-500">
      {token.address.substring(0, 5)}...pump
    </div>
  </div>
);

export default TokenImageLogo;