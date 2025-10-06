import React from "react";
import MContainer from "@/app/[locale]/component/layout/MContainer";
import ImageInteractive from "@/app/[locale]/component/ui/block/ImageInteractive";
import {Flat} from "@/app/[locale]/component/ui/section/FlatList";

export const flatPolygons = [
    {
        id: 1,
        label: "Flat A1-01",
        points: "100,200 150,200 150,250 100,250",
        meta: { floor: 1 },
    },
    {
        id: 2,
        label: "Flat A1-02",
        points: "160,200 210,200 210,250 160,250",
        meta: { floor: 1 },
    },
];

type Props = {
    flats: Flat[];
    floor: number;
}

const FloorPlanSection: React.FC<Props> = ({ flats, floor }) => {
    const floors = flatPolygons
        .filter((p) => p.meta.floor === floor) //get flats on clicked floor
        .map((p) => { //map through them
            const flatData = flats.find((f) => f.id === p.id); //compare geometry objs IDs to fetched objs IDs
            return {
                ...p,
                meta: {
                    ...p.meta,
                    flatId: flatData?.id,
                    pdfUrl: flatData?.floorPlan,
                    price: flatData?.price,
                }
            }
        })

    return (
        <>
            <MContainer variant={`regular`}>
                <ImageInteractive
                    imageSrc={`/floorplans/floor-${floor}.png`}
                    viewBox={{ width: 1200, height: 600 }}
                    floors={floors}
                    onSelect={(flat) => {
                        if (flat.meta?.pdfUrl) window.open(flat.meta.pdfUrl, "_blank");
                    }}
                />
            </MContainer>
        </>
    )
}

export default FloorPlanSection;