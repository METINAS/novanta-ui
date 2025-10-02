'use client'

import React from "react";
import Image from "next/image";
import {syne} from "@/app/[locale]/fonts";
import MLink from "@/app/[locale]/component/micro/MLink";
import {GoArrowRight} from "react-icons/go";
import {getTranslations} from "next-intl/server";
import {useTranslations} from "next-intl";

type ReferenceCardPoint = {
    pointText: string;
}

export type ReferenceCardProps = {
    image: string;
    heading: string;
    description: string;
    points?: ReferenceCardPoint[];
    href: string;
}

const ReferenceCard: React.FC<ReferenceCardProps> = ({ image, heading, description, points, href }) => {

    const t = useTranslations("ReferenceCard");

    return (
        <>
            <div className="flex flex-col select-none">
                <Image
                    src={image}
                    alt={heading}
                    width={1024}
                    height={1024}
                    className="w-full h-auto border-b-8 border-brand"
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    draggable={false}
                />
                <div className="flex flex-col p-4 justify-between bg-white min-h-[580px] lg:min-h-[510px]">
                    <div className="flex flex-col gap-4">
                        <p className={`${syne.className} pp-26 uppercase text-brand font-bold min-h-[72px]`}>
                            {heading}
                        </p>
                        <p className="pp-16 text-black px-4">
                            {description}
                        </p>
                        <ul className={`${syne.className} font-bold list-disc px-4 flex flex-col gap-4`}>
                            {points && points.map((point) => (
                                <li key={point.pointText} className="text-black pp-16">{point.pointText}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex">
                        <MLink route={href} type="link" icon={<GoArrowRight />}>
                            {t("readMore")}
                        </MLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReferenceCard;