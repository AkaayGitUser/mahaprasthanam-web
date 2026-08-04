"use client";

import dynamic from "next/dynamic";
import React from "react";

const LazyMap = dynamic(() => import("./Map"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full min-h-[250px] md:min-h-[300px] bg-[#0A1A24] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-luxury-pattern opacity-[0.03]" />
            <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-[#F58220]/20 border-t-[#F58220] rounded-full animate-spin" />
                <span className="text-sm font-semibold tracking-wider text-gray-400 font-plus-jakarta uppercase">
                    Loading Hyderabad Map...
                </span>
            </div>
        </div>
    ),
});

interface MapContainerProps {
    activeLocationId: string | null;
    onSelectLocation: (id: string | null) => void;
}

export default function MapContainer({ activeLocationId, onSelectLocation }: MapContainerProps) {
    return (
        <div id="map-section" className="w-full h-[250px] md:h-[300px] relative overflow-hidden bg-[#0A1A24]">
            <LazyMap activeLocationId={activeLocationId} onSelectLocation={onSelectLocation} />
        </div>
    );
}
