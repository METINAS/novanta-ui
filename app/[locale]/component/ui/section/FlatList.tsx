import React from "react";
import MContainer from "@/app/[locale]/component/layout/MContainer";
import {getTranslations} from "next-intl/server";
import ListItem from "@/app/[locale]/component/micro/ListItem";

type State = "available" | "sold" | "reserved";

export type Flat = {
    id: number;
    flatNumber: string;
    floor: number;
    roomCount: number;
    interiorMSquared: number;
    exteriorMSquared: number;
    cellarMSquared: number;
    totalMSquared: number;
    price: number;
    state: State;
    floorPlan: string;
}

const tableLabel = [
    { label: "flatNumber" },
    { label: "floor" },
    { label: "roomCount" },
    { label: "interiorMSquared" },
    { label: "exteriorMSquared" },
    { label: "cellarMSquared" },
    { label: "totalMSquared" },
    { label: "price" },
    { label: "state" },
    { label: "floorPlan" },
]

const flats: Flat[] = [
    {
        id: 1,
        flatNumber: "A1",
        floor: 1,
        roomCount: 2,
        interiorMSquared: 35.2,
        exteriorMSquared: 6.5,
        cellarMSquared: 4,
        totalMSquared: 45.7,
        price: 120000,
        state: "available",
        floorPlan: "/plans/A1.png",
    },
    {
        id: 2,
        flatNumber: "B1",
        floor: 1,
        roomCount: 3,
        interiorMSquared: 55.1,
        exteriorMSquared: 10.3,
        cellarMSquared: 5,
        totalMSquared: 70.4,
        price: 165000,
        state: "reserved",
        floorPlan: "/plans/B1.png",
    },
    {
        id: 3,
        flatNumber: "C1",
        floor: 1,
        roomCount: 1,
        interiorMSquared: 28.0,
        exteriorMSquared: 4.2,
        cellarMSquared: 3,
        totalMSquared: 35.2,
        price: 95000,
        state: "sold",
        floorPlan: "/plans/C1.png",
    },
    {
        id: 4,
        flatNumber: "D1",
        floor: 2,
        roomCount: 2,
        interiorMSquared: 42.3,
        exteriorMSquared: 8.1,
        cellarMSquared: 4,
        totalMSquared: 54.4,
        price: 135000,
        state: "available",
        floorPlan: "/plans/D1.png",
    },
    {
        id: 5,
        flatNumber: "E1",
        floor: 2,
        roomCount: 3,
        interiorMSquared: 63.5,
        exteriorMSquared: 11.7,
        cellarMSquared: 6,
        totalMSquared: 81.2,
        price: 195000,
        state: "sold",
        floorPlan: "/plans/E1.png",
    },
    {
        id: 6,
        flatNumber: "F1",
        floor: 2,
        roomCount: 4,
        interiorMSquared: 78.9,
        exteriorMSquared: 14.3,
        cellarMSquared: 8,
        totalMSquared: 101.2,
        price: 250000,
        state: "available",
        floorPlan: "/plans/F1.png",
    },
    {
        id: 7,
        flatNumber: "G1",
        floor: 3,
        roomCount: 2,
        interiorMSquared: 40.0,
        exteriorMSquared: 7.5,
        cellarMSquared: 4,
        totalMSquared: 51.5,
        price: 130000,
        state: "reserved",
        floorPlan: "/plans/G1.png",
    },
    {
        id: 8,
        flatNumber: "H1",
        floor: 3,
        roomCount: 1,
        interiorMSquared: 29.8,
        exteriorMSquared: 5.0,
        cellarMSquared: 3,
        totalMSquared: 37.8,
        price: 100000,
        state: "available",
        floorPlan: "/plans/H1.png",
    },
    {
        id: 9,
        flatNumber: "I1",
        floor: 3,
        roomCount: 3,
        interiorMSquared: 59.6,
        exteriorMSquared: 9.2,
        cellarMSquared: 5,
        totalMSquared: 73.8,
        price: 180000,
        state: "sold",
        floorPlan: "/plans/I1.png",
    },
    {
        id: 10,
        flatNumber: "J1",
        floor: 4,
        roomCount: 2,
        interiorMSquared: 46.1,
        exteriorMSquared: 7.8,
        cellarMSquared: 4,
        totalMSquared: 57.9,
        price: 145000,
        state: "available",
        floorPlan: "/plans/J1.png",
    },
    {
        id: 11,
        flatNumber: "K1",
        floor: 4,
        roomCount: 4,
        interiorMSquared: 81.2,
        exteriorMSquared: 15.6,
        cellarMSquared: 8,
        totalMSquared: 104.8,
        price: 260000,
        state: "reserved",
        floorPlan: "/plans/K1.png",
    },
    {
        id: 12,
        flatNumber: "L1",
        floor: 4,
        roomCount: 3,
        interiorMSquared: 66.4,
        exteriorMSquared: 12.0,
        cellarMSquared: 6,
        totalMSquared: 84.4,
        price: 200000,
        state: "available",
        floorPlan: "/plans/L1.png",
    },
    {
        id: 13,
        flatNumber: "M1",
        floor: 5,
        roomCount: 2,
        interiorMSquared: 39.7,
        exteriorMSquared: 8.9,
        cellarMSquared: 4,
        totalMSquared: 52.6,
        price: 138000,
        state: "sold",
        floorPlan: "/plans/M1.png",
    },
    {
        id: 14,
        flatNumber: "N1",
        floor: 5,
        roomCount: 1,
        interiorMSquared: 27.9,
        exteriorMSquared: 3.8,
        cellarMSquared: 3,
        totalMSquared: 34.7,
        price: 93000,
        state: "available",
        floorPlan: "/plans/N1.png",
    },
    {
        id: 15,
        flatNumber: "O1",
        floor: 5,
        roomCount: 3,
        interiorMSquared: 58.5,
        exteriorMSquared: 9.5,
        cellarMSquared: 5,
        totalMSquared: 73.0,
        price: 185000,
        state: "reserved",
        floorPlan: "/plans/O1.png",
    },
    {
        id: 16,
        flatNumber: "P1",
        floor: 6,
        roomCount: 2,
        interiorMSquared: 44.2,
        exteriorMSquared: 7.6,
        cellarMSquared: 4,
        totalMSquared: 55.8,
        price: 142000,
        state: "available",
        floorPlan: "/plans/P1.png",
    },
    {
        id: 17,
        flatNumber: "Q1",
        floor: 6,
        roomCount: 4,
        interiorMSquared: 82.7,
        exteriorMSquared: 16.0,
        cellarMSquared: 8,
        totalMSquared: 106.7,
        price: 270000,
        state: "sold",
        floorPlan: "/plans/Q1.png",
    },
    {
        id: 18,
        flatNumber: "R1",
        floor: 6,
        roomCount: 3,
        interiorMSquared: 61.3,
        exteriorMSquared: 10.4,
        cellarMSquared: 6,
        totalMSquared: 77.7,
        price: 190000,
        state: "available",
        floorPlan: "/plans/R1.png",
    },
    {
        id: 19,
        flatNumber: "S1",
        floor: 7,
        roomCount: 2,
        interiorMSquared: 41.8,
        exteriorMSquared: 7.2,
        cellarMSquared: 4,
        totalMSquared: 53.0,
        price: 140000,
        state: "reserved",
        floorPlan: "/plans/S1.png",
    },
    {
        id: 20,
        flatNumber: "T1",
        floor: 7,
        roomCount: 3,
        interiorMSquared: 65.0,
        exteriorMSquared: 11.5,
        cellarMSquared: 6,
        totalMSquared: 82.5,
        price: 205000,
        state: "available",
        floorPlan: "/plans/T1.png",
    }
];

const groupByFloor = (items: Flat[]) =>
    items.reduce<Record<number, Flat[]>>((acc, f) => {
        (acc[f.floor] ??= []).push(f);
        return acc;
    }, {});

const FlatList = async () => {
    const t = await getTranslations("Table");

    const headers = [
        t("flatNumber"),
        t("floor"),
        t("roomCount"),
        t("interior"),
        t("exterior"),
        t("cellar"),
        t("total"),
        t("price"),
        t("state"),
        t("floorPlan"),
    ];

    const flatsByFloor = groupByFloor(flats);
    const floors = Object.keys(flatsByFloor)
        .map(Number)
        .sort((a, b) => a - b);

    return (
        <MContainer variant="full" className="bg-white py-8 md:py-16">
            <MContainer variant="regular">
                {floors.length === 0 ? (
                    <p className="text-center text-sm text-gray-500">{t("noData")}</p>
                ) : (

                    <div className="overflow-x-auto">
                        <div className="min-w-[960px]">

                            <div className="grid grid-cols-10 text-center items-center font-bold">
                                {headers.map((h, i) => (
                                    <p key={i} className="text-sm text-black p-2">
                                        {h}
                                    </p>
                                ))}
                            </div>

                            <div className="flex flex-col gap-6 md:gap-8">
                                {floors.map((floor) => {
                                    const list = flatsByFloor[floor];

                                    return (
                                        <section key={floor}>
                                            <div className="flex flex-col">
                                                {list.map((flat, idx) => (
                                                    <ListItem key={flat.id} indexInGroup={idx} {...flat} />
                                                ))}
                                            </div>
                                        </section>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
                <div className="w-full flex py-4">
                    <p className="pp-16 w-full md:w-1/3">
                        {t("description")}
                    </p>
                </div>
            </MContainer>
        </MContainer>
    );
};

export default FlatList;