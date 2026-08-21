"use client";

import React, { useState, useEffect } from "react";

export default function HyderabadMap() {
  const [processedMapUrl, setProcessedMapUrl] = useState<string | null>(null);
  const [hasZoomed, setHasZoomed] = useState(false);

  // Client-side Canvas Flood-Fill Algorithm to remove white rectangular background outside the map shape
  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = "/map.png";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, img.width, img.height);
      const data = imgData.data;
      const width = img.width;
      const height = img.height;

      // Flood-fill BFS to make outer white background pixels 100% transparent
      const visited = new Uint8Array(width * height);
      const queue: number[] = [];

      const isOuterWhite = (x: number, y: number) => {
        const idx = (y * width + x) * 4;
        return data[idx] > 230 && data[idx + 1] > 230 && data[idx + 2] > 230;
      };

      // Border pixels check
      for (let x = 0; x < width; x++) {
        if (isOuterWhite(x, 0)) { queue.push(x, 0); visited[0 * width + x] = 1; }
        if (isOuterWhite(x, height - 1)) { queue.push(x, height - 1); visited[(height - 1) * width + x] = 1; }
      }
      for (let y = 0; y < height; y++) {
        if (isOuterWhite(0, y)) { queue.push(0, y); visited[y * width + 0] = 1; }
        if (isOuterWhite(width - 1, y)) { queue.push(width - 1, y); visited[y * width + (width - 1)] = 1; }
      }

      let head = 0;
      while (head < queue.length) {
        const cx = queue[head++];
        const cy = queue[head++];
        const idx = (cy * width + cx) * 4;
        data[idx + 3] = 0; // Set Alpha to 0

        const neighbors = [
          [cx + 1, cy],
          [cx - 1, cy],
          [cx, cy + 1],
          [cx, cy - 1],
        ];

        for (let i = 0; i < neighbors.length; i++) {
          const [nx, ny] = neighbors[i];
          if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
            const nPos = ny * width + nx;
            if (!visited[nPos] && isOuterWhite(nx, ny)) {
              visited[nPos] = 1;
              queue.push(nx, ny);
            }
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      setProcessedMapUrl(canvas.toDataURL("image/png"));
    };
  }, []);

  return (
    <div
      onMouseEnter={() => setHasZoomed(true)}
      className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] cursor-pointer p-1"
    >
      {/* Zoomable Container - shifts left towards logo on zoom */}
      <div
        className={`relative w-full h-auto transform transition-all duration-[1200ms] ease-[steps(5,end)] origin-[41%_50%] ${
          hasZoomed
            ? "scale-[1.34] sm:scale-[1.38] lg:scale-[1.42] -translate-x-14 sm:-translate-x-22 lg:-translate-x-32 -translate-y-3 sm:-translate-y-4 lg:-translate-y-5"
            : "scale-100 -translate-x-2 sm:-translate-x-4 translate-y-0"
        }`}
      >

        {/* Map Image */}
        <img
          src={processedMapUrl || "/map.png"}
          alt="Telangana Map"
          className="w-full h-auto object-contain drop-shadow-md"
        />

        {/* Jubilee Hills Location Marker */}
        <div
          className={`absolute top-[44%] left-[37.5%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 transition-all duration-500 ease-out ${
            hasZoomed
              ? "opacity-100 scale-100 pointer-events-auto delay-[1000ms]"
              : "opacity-0 scale-90 pointer-events-none"
          }`}
        >
          {/* Black Pin Dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#0A1C28] mb-0.5 ring-1.5 ring-white/90 shadow-sm" />

          {/* Frosted Glassmorphism Badge */}
          <div className="flex items-center gap-1.5 bg-white/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/80 shadow-md shadow-black/10 whitespace-nowrap">
            <span className="font-extrabold text-[#0A1C28] text-[8.5px] sm:text-[9.5px] font-plus-jakarta leading-none tracking-tight">
              Jubilee Hills
            </span>
            <span className="text-gray-300 text-[8px]">•</span>
            <p
              
              className="text-[#F78B1F] font-semibold text-[7.5px] sm:text-[8.5px] underline underline-offset-1 hover:text-orange-600 tracking-tight leading-none"
            >
              Get Direction
            </p>
          </div>
        </div>

        {/* Panjagutta Location Marker */}
        <div
          className={`absolute top-[62%] left-[39.5%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 transition-all duration-500 ease-out ${
            hasZoomed
              ? "opacity-100 scale-100 pointer-events-auto delay-[1000ms]"
              : "opacity-0 scale-90 pointer-events-none"
          }`}
        >
          {/* Black Pin Dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#0A1C28] mb-0.5 ring-1 ring-white/90 shadow-sm" />

          {/* Frosted Glassmorphism Badge */}
          <div className="flex items-center gap-1.5 bg-white/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/80 shadow-md shadow-black/10 whitespace-nowrap">
            <span className="font-extrabold text-[#0A1C28] text-[8.5px] sm:text-[9.5px] font-plus-jakarta leading-none tracking-tight">
              Panjagutta
            </span>
            <span className="text-gray-300 text-[8px]">•</span>
            <p
              
              className="text-[#F78B1F] font-semibold text-[7.5px] sm:text-[8.5px] underline underline-offset-1 hover:text-orange-600 tracking-tight leading-none"
            >
              Get Direction
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
