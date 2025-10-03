import React from "react";
import { getTranslations } from "next-intl/server";
import { Flat } from "@/app/[locale]/component/ui/section/FlatList";

type ListItemProps = Flat & { indexInGroup: number };

const ListItem: React.FC<ListItemProps> = async ({
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
                                                     floorPlan,
                                                     indexInGroup,
                                                 }) => {
    const tState = await getTranslations("Table.FlatState");
    const rowBg = indexInGroup % 2 === 0 ? "bg-white" : "bg-[#DEE2E8]";

    return (
        <div
            className={`grid grid-cols-10 p-2 font-semibold text-center items-center ${rowBg}`}
        >
            <p className="text-brand font-bold">{flatNumber}</p>
            <p>{floor}</p>
            <p>{roomCount}</p>
            <p>{interiorMSquared}m²</p>
            <p>{exteriorMSquared}m²</p>
            <p>{cellarMSquared}m²</p>
            <p>{totalMSquared}m²</p>
            <p>{price}€</p>
            <p>{tState(state)}</p>
            <p className="truncate">{floorPlan}</p>
        </div>
    );
};

export default ListItem;
