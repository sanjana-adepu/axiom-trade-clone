// ./TokenMobileLayout.tsx
import { Filter, Menu } from "lucide-react";
import React from 'react';
import type { Token } from '@/lib/api';  // Assuming Token type is exported
import TokenDisplayCard from './DisplayCard'; // Import the card component
import { columnHeaders, PulseId } from './Table'; // Import types/constants

interface TokenMobileLayoutProps {
    selectedPulse: PulseId;
    setSelectedPulse: React.Dispatch<React.SetStateAction<PulseId>>;
    filteredTokens: Token[];
    currentPulseName: string;
}

export default function TokenMobileLayout({
    selectedPulse,
    setSelectedPulse,
    filteredTokens,
    currentPulseName
}: TokenMobileLayoutProps) {
    return (
        <div className="md:hidden"> 
            
            {/* Mobile App Header (Sticky) */}
            <div className="sticky top-0 z-10 bg-gray-900 border-b border-gray-800 shadow-lg">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                        <Menu className="w-6 h-6 text-white" aria-label="Menu" />
                        <div className="flex space-x-2">
                            {columnHeaders.map(col => (
                                <button
                                    key={`mobile-tab-${col.id}`}
                                    onClick={() => setSelectedPulse(col.id)}
                                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors
                                        ${selectedPulse === col.id 
                                            ? "bg-indigo-600 text-white" 
                                            : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`
                                        }
                                >
                                    {col.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="text-sm font-bold text-gray-400">P1 P2 P3</div>
                </div>
            </div>

            {/* Mobile Content List */}
            <div>
                {filteredTokens.map(token => (
                    <div key={token.address}>
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