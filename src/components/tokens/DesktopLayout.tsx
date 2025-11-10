// ./TokenDesktopLayout.tsx
import { Filter } from "lucide-react";
import React from 'react';
import type { Token } from '@/lib/api'; 
import TokenDisplayCard from './DisplayCard'; 

interface TokenDesktopLayoutProps {
    pulse1Tokens: Token[];
    pulse2Tokens: Token[];
    pulse3Tokens: Token[];
}

export default function TokenDesktopLayout({
    pulse1Tokens,
    pulse2Tokens,
    pulse3Tokens
}: TokenDesktopLayoutProps) {
    return (
        <div className="hidden lg:block rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            
            {/* Desktop Header Grid - Sticky */}
            <div className="grid grid-cols-3 bg-gray-900/50 text-gray-300 border-b border-gray-800 sticky top-0 z-10">
                <div className="px-6 py-4 text-left font-bold uppercase text-xs tracking-wider border-r border-gray-800">
                    New Pairs
                    <Filter className="inline ml-2 w-4 h-4 opacity-70" aria-label="Filter" />
                </div>
                <div className="px-6 py-4 text-left font-bold uppercase text-xs tracking-wider border-r border-gray-800">
                    Final Stretch
                </div>
                <div className="px-6 py-4 text-left font-bold uppercase text-xs tracking-wider">
                    Migrated
                </div>
            </div>

            {/* Desktop Content Grid: Fixed Height (80vh), Scrollable Columns */}
            <div 
                className="grid grid-cols-3 bg-gray-950/50"
                style={{ height: '80vh' }} 
            >
                
                {/* Column 1: New Pairs (Pulse 1) - Scrollable Container */}
                <div className="border-r border-gray-800 overflow-y-auto">
                    {pulse1Tokens.length > 0 ? (
                        pulse1Tokens.map((token) => (
                            <div key={token.address} className="border-b border-gray-800 last:border-b-0">
                                <TokenDisplayCard token={token}/>
                            </div>
                        ))
                    ) : (
                        <p className="p-6 text-gray-500 text-center text-sm">No new pairs.</p>
                    )}
                </div>

                {/* Column 2: Final Stretch (Pulse 2) - Scrollable Container */}
                <div className="border-r border-gray-800 overflow-y-auto">
                    {pulse2Tokens.length > 0 ? (
                        pulse2Tokens.map((token) => (
                            <div key={token.address} className="border-b border-gray-800 last:border-b-0">
                                <TokenDisplayCard token={token}/>
                            </div>
                        ))
                    ) : (
                        <p className="p-6 text-gray-500 text-center text-sm">No tokens in final stretch.</p>
                    )}
                </div>

                {/* Column 3: Migrated (Pulse 3) - Scrollable Container */}
                <div className="last:border-r-0 overflow-y-auto">
                    {pulse3Tokens.length > 0 ? (
                        pulse3Tokens.map((token) => (
                            <div key={token.address} className="border-b border-gray-800 last:border-b-0">
                                <TokenDisplayCard token={token} />
                            </div>
                        ))
                    ) : (
                        <p className="p-6 text-gray-500 text-center text-sm">No migrated tokens.</p>
                    )}
                </div>
            </div>
        </div>
    );
}