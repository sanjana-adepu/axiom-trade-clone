// SecurityBadges.tsx
import React from "react";
import {
  UserX,
  ChefHat,
  Target,
  Ghost,
  Users,
} from "lucide-react";
import type { Token } from "@/store/tokenSlice"; 
interface SecurityBadgesProps {
  securityMetrics: Token["securityMetrics"];
}

const SecurityBadges: React.FC<SecurityBadgesProps> = ({ securityMetrics }) => (
  <div className="flex flex-row flex-wrap items-center gap-2 py-2">
    
    {/* Anti-Bot / Red Person */}
    <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full border border-red-500/50 text-red-400 text-xs">
      <UserX className="w-3 h-3 text-red-500" />
      <span>{securityMetrics.antiBot}</span>
    </div>

    {/* LP Lock / Green Chef Hat */}
    <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full border border-green-500/50 text-green-400 text-xs">
      <ChefHat className="w-3 h-3 text-green-500" />
      <span>{securityMetrics.lpLock}</span>
    </div>
    
    {/* Target Tax / Red Target */}
    <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full border border-red-500/50 text-red-400 text-xs">
      <Target className="w-3 h-3 text-red-500" />
      <span>{securityMetrics.targetTax}</span>
    </div>
    
    {/* Honeypot Risk / Red Ghost */}
    <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full border border-red-500/50 text-red-400 text-xs">
      <Ghost className="w-3 h-3 text-red-500" />
      <span>{securityMetrics.honeypotRisk}</span>
    </div>
    
    {/* Owner Share / Green People */}
    <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full border border-green-500/50 text-green-400 text-xs">
      <Users className="w-3 h-3 text-green-500" />
      <span>{securityMetrics.ownerShare}</span>
    </div>
  </div>
);

export default SecurityBadges;