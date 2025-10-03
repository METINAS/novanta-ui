import React from "react";
import {Flat} from "@/app/[locale]/component/ui/section/FlatList";
import {getTranslations} from "next-intl/server";

const ListItem: React.FC<Flat> = async ({
                                            id,
                                            flatNumber,
                                            floor,
                                            roomCount,
                                            interiorMSquared,
                                            exteriorMSquared,
                                            cellarMSquared,
                                            totalMSquared,
                                            price,
                                            state,
                                            floorPlan
                                        }) => {
    const t = await getTranslations("Table.FlatState");

    return (
        <>
            <div
                className={`grid grid-cols-10 p-1 font-semibold text-center justify-center items-center overflow-x-auto ${
                    id % 2 === 0 ? "bg-white" : "bg-[#DEE2E8]"
                }`}
            >
                <p className="text-brand font-bold">{flatNumber}</p>
                <p>{floor}</p>
                <p>{roomCount}</p>
                <p>{interiorMSquared}m²</p>
                <p>{exteriorMSquared}m²</p>
                <p>{cellarMSquared}m²</p>
                <p>{totalMSquared}m²</p>
                <p>{price}€</p>
                <p>{t(state)}</p>
                <p>{floorPlan}</p>
            </div>
        </>
    )
}

export default ListItem;