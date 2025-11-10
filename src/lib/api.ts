import axios from "axios";

export interface Token {
  address: string;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  marketCap: number;
  volume: number;
  ageHours: number;
  pulse_no: 1 | 2 | 3;
  stats: {
    liquidity: string;
    holders: number;
    burned: string;
    mcapChange: number;
    volatility: number;
    users: number; 
    buys: number; 
    trophies: number; 
    verified: string; 
  };
  metrics: {
    tax: number;
    lp: number;
    buy: number;
    sell: number;
    total: number;
  };
  // NEW SECURITY METRICS OBJECT ADDED
  securityMetrics: {
    antiBot: string; // Red person/star icon, e.g., "50%"
    lpLock: string;  // Green chef hat/lock icon, e.g., "0% 1mo"
    targetTax: string; // Red target icon, e.g., "14%"
    honeypotRisk: string; // Red ghost/mask icon, e.g., "50%"
    ownerShare: string; // Green people/tree icon, e.g., "0%"
    lpLocked: string; // Red bar chart/stack icon, e.g., "0%"
    pulse: number; // For the yellow pulse icon (>> and pulse icon)
  };
}

export async function fetchInitialTokens(): Promise<Token[]> {
  const { data } = await axios.get("/api/seed/tokens.json");
  return data;
}
