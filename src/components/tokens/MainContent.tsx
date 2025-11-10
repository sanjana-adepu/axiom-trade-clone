// TokenMainContent.tsx
import React from "react";
import {
  Clock,
  Diamond,
  Layers,
  Search,
  Sun,
} from "lucide-react";
import type { Token } from "@/store/tokenSlice";
import SecurityBadges from "./SecurityBadges"; 

interface TokenMainContentProps {
  token: Token;
  formatValue: (value: number) => string; 
}

const TokenMainContent: React.FC<TokenMainContentProps> = ({ token, formatValue }) => (
  <div className="flex flex-col flex-1">
    
    {/* TOP ROW: Name, Symbol, Age, Stats, MC/V */}
    <div className="flex flex-row">
      <div className="flex flex-col">
        {/* Name/Symbol */}
        <div className="text-lg md:text-base font-bold text-white leading-tight">
            {token.symbol} {  }
            <span className="text-sm md:text-xs text-gray-400 font-medium">
                {token.name}
            </span>
        </div>
        <div className="">
          {/* Age and other stats (Search, Users, Buys, Trophy, Crown) */}
          <div className="flex flex-row items-center text-sm md:text-xs text-gray-400 font-medium space-x-2">             
            
            {/* 7h (Age) */}
            <Clock className="w-3 h-3 text-pink-500" /> 
            <span>{token.ageHours}h</span> 
            
            {/* Search (Audit/Scan) */}
            <Search className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer" /> 

            {/* Users (Audited/Whitelisted) */}
            <div className="flex items-center space-x-1">
                <div className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <span className="text-blue-500">{token.stats.users || 1}</span>
            </div>

            {/* Buys (Block/Stack) */}
            <div className="flex items-center space-x-1">
                <Layers className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer" /> 
                <span className="text-blue-500">{token.stats.buys || 0}</span>
            </div>

            {/* Trophy */}
            <div className="flex items-center space-x-1">
                <Diamond className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer" /> 
                <span className="text-gray-500">{token.stats.trophies || 0}</span>
            </div>

            {/* Crown */}
            <div className="flex items-center space-x-1">
                <Sun className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer" /> 
                <span className="text-gray-500">{token.stats.verified || '0/7'}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* MC/V Metrics and Holders Stats */}
      <div className="flex flex-col items-end space-y-1 ml-auto">
        <div className="text-right">
          <div className="text-sm text-gray-400">
            MC <span className="text-white font-bold">{formatValue(token.marketCap)}</span>
          </div>
          <div className="text-sm text-gray-400">
            V <span className="text-white font-bold">{formatValue(token.volume)}</span>
          </div>
        </div>
        
        {/* Holders Stats */}
        <div className="text-xs text-gray-500 flex flex-col items-end">
            <div className="flex items-center space-x-1">
                <Diamond className="w-3 h-3" aria-label="Fees" />
                <span>{token.stats.liquidity}</span>
                <span className="ml-1">TX 2 —</span>
            </div>
        </div>
      </div>
    </div>
    
    {/* Security Badges Row*/}
    <SecurityBadges securityMetrics={token.securityMetrics} />
  </div>
);

export default TokenMainContent;