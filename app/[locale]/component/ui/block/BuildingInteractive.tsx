"use client";

import React, {useRef, useState} from "react";
import SectionHeading from "@/app/[locale]/component/micro/SectionHeading";
import {AvailabilityMap} from "@/app/[locale]/util/buildAvailability";
import {useTranslations} from "next-intl";

type FloorShape = { points: string };

export type Floor = {
    id: string;
    points?: string;
    shapes?: FloorShape[];
    label: string;
    meta?: { floorNumber?: number } & Record<string, unknown>;
};

type Props = {
    imageSrc: string;
    viewBox: { width: number; height: number };
    floors: Floor[];
    onSelect?: (floor: Floor) => void;
    highlightColor?: string;
    className?: string;
    availability?: AvailabilityMap;
    roomBuckets?: number[];
};

export default function BuildingInteractive({
                                                imageSrc,
                                                viewBox,
                                                floors,
                                                onSelect,
                                                highlightColor = "rgba(255, 51, 0, 0.40)",
                                                className,
                                                availability,
                                                roomBuckets = [1, 2, 3, 4, 5],
                                            }: Props) {
    const t = useTranslations("BuildingInteractive");

    const wrapperRef = useRef<HTMLDivElement>(null);
    const [hoverId, setHoverId] = useState<string | null>(null);
    const [hoverFloorNo, setHoverFloorNo] = useState<number | null>(null);
    const [tooltip, setTooltip] = useState<{ left: number; top: number } | null>(null);
    const [vb, setVb] = React.useState(`0 0 ${viewBox.width} ${viewBox.height}`);

    React.useEffect(() => {
        const computeVb = () => {
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
                const offsetX = viewBox.width * 0.05;
                const offsetY = viewBox.height * 0.05;
                setVb(`${offsetX} ${offsetY} ${viewBox.width - 2 * offsetX} ${viewBox.height - 2 * offsetY}`);
            } else {
                setVb(`0 0 ${viewBox.width} ${viewBox.height}`);
            }
        };

        computeVb();
        window.addEventListener("resize", computeVb, {passive: true});
        return () => window.removeEventListener("resize", computeVb);
    }, [viewBox.width, viewBox.height]);

    const svgToClient = (x: number, y: number) => {
        const rect = wrapperRef.current?.getBoundingClientRect();
        if (!rect) return {left: 0, top: 0};
        const scaleX = rect.width / viewBox.width;
        const scaleY = rect.height / viewBox.height;
        return {left: x * scaleX, top: y * scaleY};
    };

    const centroidFromPoints = (points: string) => {
        const pts = points
            .trim()
            .split(/\s+/)
            .map((p) => p.split(",").map(Number))
            .filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y)) as [number, number][];
        if (!pts.length) return {x: 0, y: 0};
        const {x, y} = pts.reduce(
            (acc, [px, py]) => ({x: acc.x + px, y: acc.y + py}),
            {x: 0, y: 0}
        );
        return {x: x / pts.length, y: y / pts.length};
    };

    const showTooltipAtClient = (clientX: number, clientY: number) => {
        const rect = wrapperRef.current?.getBoundingClientRect();
        if (!rect) return;
        setTooltip({
            left: clientX - rect.left + 8,
            top: clientY - rect.top - 28,
        });
    };

    const showTooltipAtCentroid = (f: Floor) => {
        const polys: FloorShape[] = f.shapes ?? (f.points ? [{points: f.points}] : []);
        if (!polys.length) return;
        const c = centroidFromPoints(polys[0].points);
        const {left, top} = svgToClient(c.x, c.y);
        setTooltip({left, top: Math.max(0, top - 28)});
    };

    const handleLeave = () => {
        setHoverId(null);
        setTooltip(null);
    };

    const handleKey = (e: React.KeyboardEvent<SVGGElement>, floor: Floor) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect?.(floor);
        } else if (e.key === "Escape") {
            handleLeave();
        } else {
            if (!tooltip) showTooltipAtCentroid(floor);
        }
    };

    const handlePointerEnter = (_e: React.PointerEvent<SVGGElement>, f: Floor) => {
        setHoverId(f.id);
        setHoverFloorNo(f.meta?.floorNumber ?? null);
    };

    const handlePointerLeave = () => {
        handleLeave();
    };

    const handlePointerMove = (e: React.PointerEvent<SVGGElement>, f: Floor) => {
        if (e.pointerType !== "mouse" && e.pressure === 0) return;
        setHoverFloorNo(f.meta?.floorNumber ?? null);
        showTooltipAtClient(e.clientX, e.clientY);
    };

    const handlePointerDown = (e: React.PointerEvent<SVGGElement>, f: Floor) => {
        setHoverId(f.id);
        setHoverFloorNo(f.meta?.floorNumber ?? null);
        showTooltipAtClient(e.clientX, e.clientY);

        const target = e.currentTarget as SVGGElement;
        if ("releasePointerCapture" in target) {
            target.releasePointerCapture?.(e.pointerId);
        }
    };

    return (
        <div
            ref={wrapperRef}
            className={`relative w-full overflow-hidden ${className ?? ""}`}
        >
            <svg
                viewBox={vb}
                className="w-full select-none transform md:scale-100 scale-110"
                role="img"
                aria-label="Interactive building"
                style={{transformOrigin: "center top"}}
            >
                <image
                    href={imageSrc}
                    x="0"
                    y="0"
                    width={viewBox.width}
                    height={viewBox.height}
                />

                {floors.map((f) => {
                    const polys: FloorShape[] = f.shapes ?? (f.points ? [{points: f.points}] : []);
                    const isHover = hoverId === f.id;

                    return (
                        <g
                            key={f.id}
                            role="button"
                            tabIndex={0}
                            aria-label={f.label}
                            className="focus:outline-none"
                            onFocus={() => {
                                setHoverId(f.id);
                                showTooltipAtCentroid(f);
                            }}
                            onBlur={handleLeave}
                            onKeyDown={(e) => handleKey(e, f)}
                            onPointerEnter={(e) => handlePointerEnter(e, f)}
                            onPointerLeave={handlePointerLeave}
                            onPointerMove={(e) => handlePointerMove(e, f)}
                            onPointerDown={(e) => handlePointerDown(e, f)}
                            onClick={() => onSelect?.(f)}
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

            {tooltip && hoverFloorNo != null && (
                <div
                    className="hidden md:flex flex-col absolute z-10 shadow-lg"
                    style={{ left: tooltip.left, top: tooltip.top, pointerEvents: "none" }}
                >
                    <div className="bg-emerald p-4">
                        <SectionHeading theme="dark">{hoverFloorNo}. {t("floor")}</SectionHeading>
                    </div>

                    <div className="bg-white p-4 flex flex-col gap-2">
                        <h6>{t("available_flats")}</h6>

                        {roomBuckets.map((rooms) => {
                            const count = availability?.[hoverFloorNo]?.[rooms] ?? 0;
                            return (
                                <div key={rooms} className="flex flex-row justify-between items-center">
                                    <p className="pp-18 font-bold">{rooms} {t("room")}</p>
                                    <p className="pp-18">{count}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}