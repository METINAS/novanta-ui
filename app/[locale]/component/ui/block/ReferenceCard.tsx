import React from "react";
import Image from "next/image";

type ReferenceCardPoint = {
    pointText: string;
}

export type ReferenceCardProps = {
    image: string;
    heading: string;
    points: ReferenceCardPoint[];
}

const ReferenceCard: React.FC<ReferenceCardProps> = ({ image, heading, points }) => {
    return (
        <>
            <div className="flex flex-col select-none">
                <Image
                    src={image}
                    alt={heading}
                    width={1024}
                    height={1024}
                    className="w-full h-auto"
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    draggable={false}
                />
                <div className="flex flex-col p-4 gap-4 bg-white min-h-[580px] lg:min-h-[510px]">
                    <p className="pp-18 uppercase text-brand font-bold">
                        {heading}
                    </p>
                    {points.length > 0 && points.map((point) => (
                        <p key={point.pointText} className="pp-16 text-black">{point.pointText}</p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ReferenceCard;