import {Flat} from "@/app/[locale]/component/ui/section/FlatList";

export type AvailabilityMap = Record<number, Record<number, number>>;

export function buildAvailability(flats: Flat[]): AvailabilityMap {
    return flats.reduce((acc, f) => {
        if (f.state !== "available") return acc;
        const byRooms = acc[f.floor] ?? (acc[f.floor] = {});
        byRooms[f.roomCount] = (byRooms[f.roomCount] ?? 0) + 1;
        return acc;
    }, {} as AvailabilityMap);
}

export const groupByFloor = (items: Flat[]) =>
    items.reduce<Record<number, Flat[]>>((acc, f) => {
        (acc[f.floor] ??= []).push(f);
        return acc;
    }, {});