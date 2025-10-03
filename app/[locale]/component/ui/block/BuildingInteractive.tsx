// app/components/BuildingInteractive.tsx
"use client";

import React, { useMemo, useRef, useState } from "react";

type FloorShape = { points: string };

type Floor = {
    id: string;
    points?: string;
    shapes?: FloorShape[];
    label: string;
    meta?: Record<string, unknown>;
};

type Props = {
    imageSrc: string;
    viewBox: { width: number; height: number };
    floors: Floor[];
    onSelect?: (floor: Floor) => void;
    highlightColor?: string;
    className?: string;
};

export default function BuildingInteractive({
                                                imageSrc,
                                                viewBox,
                                                floors,
                                                onSelect,
                                                highlightColor = "rgba(255, 51, 0, 0.40)",
                                                className,
                                            }: Props) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [hoverId, setHoverId] = useState<string | null>(null);
    const [tooltip, setTooltip] = useState<{ left: number; top: number; text: string } | null>(null);

    const vb = useMemo(() => `0 0 ${viewBox.width} ${viewBox.height}`, [viewBox]);

    const handleMouseMove = (e: React.MouseEvent<SVGGElement>, text: string) => {
        const rect = wrapperRef.current?.getBoundingClientRect();
        if (!rect) return;
        setTooltip({
            left: e.clientX - rect.left + 8,
            top: e.clientY - rect.top - 28,
            text,
        });
    };

    const handleLeave = () => {
        setHoverId(null);
        setTooltip(null);
    };

    const handleKey = (e: React.KeyboardEvent<SVGGElement>, floor: Floor) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect?.(floor);
        }
    };

    return (
        <div ref={wrapperRef} className={`relative w-full ${className ?? ""}`}>
            <svg
                viewBox={vb}
                className="w-full select-none"
                role="img"
                aria-label="Interactive building"
            >
                <image href={imageSrc} x="0" y="0" width={viewBox.width} height={viewBox.height} />

                {floors.map((f) => {
                    const polys: FloorShape[] = f.shapes ?? (f.points ? [{ points: f.points }] : []);
                    const isHover = hoverId === f.id;

                    return (
                        <g
                            key={f.id}
                            role="button"
                            tabIndex={0}
                            aria-label={f.label}
                            className="focus:outline-none"
                            onMouseEnter={() => setHoverId(f.id)}
                            onMouseLeave={handleLeave}
                            onMouseMove={(e) => handleMouseMove(e, f.label)}
                            onClick={() => onSelect?.(f)}
                            onFocus={() => setHoverId(f.id)}
                            onBlur={handleLeave}
                            onKeyDown={(e) => handleKey(e, f)}
                        >
                            {polys.map((p, i) => (
                                <polygon
                                    key={`${f.id}-${i}`}
                                    points={p.points}
                                    fill={isHover ? highlightColor : "rgba(0,0,0,0.001)"}
                                    stroke="transparent"
                                    className="cursor-pointer transition-[fill] duration-150 focus:ring-2 focus:ring-brand"
                                    pointerEvents="all"
                                />
                            ))}
                        </g>
                    );
                })}
            </svg>

            {tooltip && (
                <div
                    className="absolute z-10 rounded-md bg-white/95 px-2 py-1 text-xs shadow-lg border border-black/5"
                    style={{ left: tooltip.left, top: tooltip.top, pointerEvents: "none" }}
                >
                    {tooltip.text}
                </div>
            )}
        </div>
    );
}