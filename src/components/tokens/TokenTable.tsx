"use client";

import React from 'react';
import { useTokens } from '@/hooks/useTokens';
import type { Token } from '@/store/tokenSlice';
import TokenMobileLayout from './MobileLayout';
import TokenTabletLayout from './TableLayout';
import TokenDesktopLayout from './DesktopLayout';

export const columnHeaders = [
    { id: 1 as const, name: "New Pairs" },
    { id: 2 as const, name: "Final Stretch" },
    { id: 3 as const, name: "Migrated" },
];

export type PulseId = 1 | 2 | 3;

export default function TokenTable() {
    // 1. State Management
    const [selectedPulse, setSelectedPulse] = React.useState<PulseId>(2); 

    // 2. Data Fetching
    const { data, isLoading, isError } = useTokens();

    if (isLoading) return <p className="p-4 text-gray-400">Loading tokens...</p>;
    if (isError) return <p className="p-4 text-red-500">Failed to load data.</p>;

    const tokens = data ?? [];
    if (tokens.length === 0)
        return <p className="p-4 text-gray-400">No tokens found.</p>;

    // 3. Data Filtering for Mobile/Tablet views
    const filteredTokens = tokens.filter(t => t.pulse_no === selectedPulse);
    const currentPulseName = columnHeaders.find(c => c.id === selectedPulse)?.name ?? "Unknown";

    // 4. Data Filtering for Desktop view
    const pulse1Tokens = tokens.filter(t => t.pulse_no === 1);
    const pulse2Tokens = tokens.filter(t => t.pulse_no === 2);
    const pulse3Tokens = tokens.filter(t => t.pulse_no === 3);

    return (
        <div className="p-2 bg-gray-950 text-white font-inter"> 
            
            {/* 1. MOBILE LAYOUT */}
            <TokenMobileLayout
                selectedPulse={selectedPulse}
                setSelectedPulse={setSelectedPulse}
                filteredTokens={filteredTokens}
                currentPulseName={currentPulseName}
            />
            
            {/* 2. TABLET LAYOUT */}
            <TokenTabletLayout
                selectedPulse={selectedPulse}
                setSelectedPulse={setSelectedPulse}
                filteredTokens={filteredTokens}
                currentPulseName={currentPulseName}
            />

            {/* 3. DESKTOP LAYOUT */}
            <TokenDesktopLayout
                pulse1Tokens={pulse1Tokens}
                pulse2Tokens={pulse2Tokens}
                pulse3Tokens={pulse3Tokens}
            />
        </div>
    );
}