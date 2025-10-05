import React from "react";
import { getTranslations } from "next-intl/server";

export type TimelineItemDto = {
    label: string;
    date: string;
    percentage: number; // 0–100
};

type TimelineProps = {
    item: TimelineItemDto;
};

const TimelineItem: React.FC<TimelineProps> = async ({ item }) => {
    const t = await getTranslations("Timeline");
    const pct = Math.max(0, Math.min(100, item.percentage));
    const isHigh = pct >= 75;

    return (
        <div className="flex flex-col gap-2">
            <p className="font-semibold">{t(`Label.${item.label}`)}</p>

            <div className="relative w-full bg-gray-200 max-h-6 overflow-visible p-2">
                <span
                    className="absolute left-0 top-0 h-full max-h-4 bg-emerald transition-all duration-300"
                    style={{ width: `${pct}%` }}
                />

                <p
                    className={`absolute top-1/2 -translate-y-1/2 text-white font-semibold text-sm p-2 bg-brand whitespace-nowrap transition-all duration-300
                        ${isHigh && "right-4 mb-1" } 
                    `}
                    style={
                        !isHigh
                            ? { left: `${pct}%`, marginLeft: 8 }
                            : undefined
                    }
                >
                    {t(`Date.${item.date}`)}
                </p>
            </div>
        </div>
    );
};

export default TimelineItem;
