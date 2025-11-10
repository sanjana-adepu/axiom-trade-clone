// ./TokenTabletLayout.tsx
import React from 'react';
import type { Token } from '@/lib/api';  
import TokenDisplayCard from '../ui/DisplayCard'; 
import { columnHeaders, PulseId } from '../Table'; 

interface TokenTabletLayoutProps {
    selectedPulse: PulseId;
    setSelectedPulse: React.Dispatch<React.SetStateAction<PulseId>>;
    filteredTokens: Token[];
    currentPulseName: string;
}

export default function TokenTabletLayout({
    selectedPulse,
    setSelectedPulse,
    filteredTokens,
    currentPulseName
}: TokenTabletLayoutProps) {
    return (
        <div className="hidden md:block lg:hidden rounded-xl overflow-hidden shadow-2xl border border-gray-800">

            {/* Tablet Tab Navigation */}
            <div className="flex justify-around bg-gray-900/50 border-b border-gray-800">
                {columnHeaders.map(col => (
                    <button
                        key={`tablet-tab-${col.id}`}
                        onClick={() => setSelectedPulse(col.id)}
                        className={`flex-1 p-4 text-center font-semibold transition-colors text-base uppercase tracking-wider
                            ${selectedPulse === col.id 
                                ? "text-white border-b-2 border-pink-500 bg-gray-800" 
                                : "text-gray-400 hover:text-white hover:bg-gray-800/50"}`
                            }
                    >
                        {col.name}
                    </button>
                ))}
            </div>

            {/* Tablet Content List */}
            <div className="bg-gray-950/50">
                {filteredTokens.map(token => (
                    <div key={token.address} className="border-b border-gray-800 last:border-b-0">
                        <TokenDisplayCard token={token} />
                    </div>
                ))}
                {filteredTokens.length === 0 && (
                    <p className="p-8 text-gray-500 text-center">
                        No tokens currently in the **{currentPulseName}** pulse.
                    </p>
                )}
            </div>
        </div>
    );
}