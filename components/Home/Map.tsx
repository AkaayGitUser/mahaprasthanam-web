"use client";

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface LocationData {
    id: string;
    name: string;
    lat: number;
    lng: number;
    description: string;
}

const LOCATIONS: LocationData[] = [
    {
        id: "jubilee",
        name: "Jubilee Hills",
        lat: 17.4082,
        lng: 78.3978,
        description: "Near Whisper Valley, Film Nagar, Jubilee hills, Shaikpet, Hyderabad, Telangana 500104",
    },
    {
        id: "punjagutta",
        name: "Punjagutta",
        lat: 17.4258,
        lng: 78.4526,
        description: "CCFW+W7M, Nagarjuna Cir Rd, Mothi Nagar, Dwarakapuri, Punjagutta, Hyderabad, Telangana 500082",
    },
    {
        id: "begumpet",
        name: "Begumpet",
        lat: 17.4428,
        lng: 78.4636,
        description: "Begumpet, Hyderabad, Telangana 500018",
    },
];

// Highlighted polygon coordinates for each location
const JUBILEE_POLYGON: [number, number][] = [
    [17.4091, 78.3970],
    [17.4097, 78.3972],
    [17.4092, 78.3982],
    [17.4084, 78.3984],
    [17.4074, 78.3978],
    [17.4079, 78.3969]
];

const PUNJAGUTTA_POLYGON: [number, number][] = [
    [17.4265, 78.4518],
    [17.4268, 78.4532],
    [17.4253, 78.4535],
    [17.4250, 78.4520]
];

const BEGUMPET_POLYGON: [number, number][] = [
    [17.4435, 78.4628],
    [17.4438, 78.4645],
    [17.4421, 78.4648],
    [17.4418, 78.4630]
];

const DEFAULT_CENTER: [number, number] = [17.4200, 78.4300];
const DEFAULT_ZOOM = 12;
const ACTIVE_ZOOM = 16;

interface MapProps {
    activeLocationId: string | null;
    onSelectLocation: (id: string | null) => void;
}

export default function Map({ activeLocationId, onSelectLocation }: MapProps) {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<L.Map | null>(null);
    const markersRef = useRef<{ [key: string]: L.Marker }>({});
    const activePolygonRef = useRef<L.Polygon | null>(null);

    // Custom CSS to fix map controls and animations
    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
            .leaflet-container {
                font-family: inherit;
            }
            .custom-leaflet-marker {
                background: transparent;
                border: none;
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    // Create custom marker icons
    const createCustomMarkerIcon = (isActive: boolean, name: string, id: string) => {
        if (isActive) {
            const displayName = id === "jubilee" ? "Mahaprasthanam" : name;
            return L.divIcon({
                className: "custom-leaflet-marker",
                html: `
                    <div class="relative flex flex-col items-center" style="transform: translate(-50%, -50%);">
                        <span style="
                            color: #E30016;
                            font-size: 17px;
                            font-weight: 800;
                            white-space: nowrap;
                            text-shadow: 
                                -2.5px -2.5px 0 #FFFFFF, 
                                 2.5px -2.5px 0 #FFFFFF, 
                                -2.5px  2.5px 0 #FFFFFF, 
                                 2.5px  2.5px 0 #FFFFFF, 
                                -2.5px  0px   0 #FFFFFF, 
                                 2.5px  0px   0 #FFFFFF, 
                                 0px   -2.5px 0 #FFFFFF, 
                                 0px    2.5px 0 #FFFFFF;
                            font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
                            letter-spacing: -0.3px;
                            pointer-events: none;
                        ">
                            ${displayName}
                        </span>
                    </div>
                `,
                iconSize: [140, 24],
                iconAnchor: [0, 0],
            });
        }

        return L.divIcon({
            className: "custom-leaflet-marker",
            html: `
                <div class="relative flex flex-col items-center group" style="transform: translate(-50%, -100%); margin-top: 16px;">
                    <!-- SVG Pin -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#F58220" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="drop-shadow-md transition-all duration-300">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3" fill="#FFFFFF"/>
                    </svg>
                    
                    <!-- Tooltip label -->
                    <div class="absolute top-9 whitespace-nowrap bg-[#0B2230]/95 backdrop-blur-sm border border-gray-800/80 text-white text-[11px] font-semibold px-2 py-0.5 rounded-md shadow-md pointer-events-none transform translate-y-0.5 transition-all duration-300">
                        ${name}
                    </div>
                </div>
            `,
            iconSize: [32, 32],
            iconAnchor: [0, 0],
        });
    };

    // Initialize Map
    useEffect(() => {
        if (!mapContainerRef.current || mapRef.current) return;

        // Initialize Map
        const map = L.map(mapContainerRef.current, {
            center: DEFAULT_CENTER,
            zoom: DEFAULT_ZOOM,
            zoomControl: false,
            scrollWheelZoom: false,
        });

        mapRef.current = map;

        // Add standard zoom control at topright
        L.control.zoom({ position: "topright" }).addTo(map);

        // Add tile layers - Satellite hybrid layer to match mockup option
        const satelliteLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {});
        const boundariesLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}", { maxZoom: 18 });
        const labelsLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}", { maxZoom: 18 });

        // Add layers to the map
        satelliteLayer.addTo(map);
        boundariesLayer.addTo(map);
        labelsLayer.addTo(map);

        // Add Markers
        LOCATIONS.forEach((loc) => {
            const marker = L.marker([loc.lat, loc.lng], {
                icon: createCustomMarkerIcon(false, loc.name, loc.id),
            }).addTo(map);

            marker.on("click", () => {
                onSelectLocation(loc.id);
            });

            markersRef.current[loc.id] = marker;
        });

        // Add a general map click handler to reset focus
        map.on("click", (e) => {
            if (e.originalEvent.target === mapContainerRef.current || (e.originalEvent.target as HTMLElement).classList.contains("leaflet-container")) {
                onSelectLocation(null);
            }
        });

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    // Handle selection, camera panning/zooming, and drawing custom polygons
    useEffect(() => {
        const map = mapRef.current;
        if (!map) return;

        // Remove previous polygon layer
        if (activePolygonRef.current) {
            map.removeLayer(activePolygonRef.current);
            activePolygonRef.current = null;
        }

        // Update markers icons to reflect selection status
        LOCATIONS.forEach((loc) => {
            const marker = markersRef.current[loc.id];
            if (marker) {
                const isActive = loc.id === activeLocationId;
                marker.setIcon(createCustomMarkerIcon(isActive, loc.name, loc.id));

                // Bring active marker to front
                if (isActive) {
                    marker.setZIndexOffset(1000);
                } else {
                    marker.setZIndexOffset(0);
                }
            }
        });

        if (activeLocationId) {
            const activeLoc = LOCATIONS.find((loc) => loc.id === activeLocationId);
            if (activeLoc) {
                // Add yellow-bordered polygon highlight centered on the selected location
                let polyCoords: [number, number][] = [];
                if (activeLocationId === "jubilee") {
                    polyCoords = JUBILEE_POLYGON;
                } else if (activeLocationId === "punjagutta") {
                    polyCoords = PUNJAGUTTA_POLYGON;
                } else if (activeLocationId === "begumpet") {
                    polyCoords = BEGUMPET_POLYGON;
                }

                if (polyCoords.length > 0) {
                    const poly = L.polygon(polyCoords, {
                        color: "#FFD700",       // Yellow/gold border outline
                        fillColor: "#FFD700",   // Yellow/gold fill
                        fillOpacity: 0.25,      // Semi-transparent fill
                        weight: 3.5,            // Solid line width
                    }).addTo(map);
                    activePolygonRef.current = poly;
                }

                map.flyTo([activeLoc.lat, activeLoc.lng], ACTIVE_ZOOM, {
                    animate: true,
                    duration: 1.5,
                });
            }
        } else {
            // Zoom out to see everything
            map.flyTo(DEFAULT_CENTER, DEFAULT_ZOOM, {
                animate: true,
                duration: 1.2,
            });
        }
    }, [activeLocationId]);

    return (
        <div className="relative w-full h-full">
            {/* Map Container */}
            <div ref={mapContainerRef} className="w-full h-full z-0" />

            {/* Reset Focus Overlay Button */}
            {activeLocationId && (
                <button
                    onClick={() => onSelectLocation(null)}
                    className="absolute bottom-4 right-4 z-[400] bg-[#0B2230]/90 hover:bg-[#0B2230] text-white border border-gray-700/50 rounded-full px-4 py-2 text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6" />
                        <path d="M9 21H3v-6" />
                        <path d="M21 3l-7 7" />
                        <path d="M3 21l7-7" />
                    </svg>
                    Reset Map View
                </button>
            )}
        </div>
    );
}
