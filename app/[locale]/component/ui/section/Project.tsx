import React from "react";
import { KPIReadDTO } from "@/app/[locale]/types";
import KPI from "@/app/[locale]/component/ui/block/KPI";
import MContainer from "@/app/[locale]/component/layout/MContainer";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import SectionHeading from "@/app/[locale]/component/micro/SectionHeading";
import Button from "@/app/[locale]/component/micro/Button";
import { GoArrowRight } from "react-icons/go";

const kpiValues: KPIReadDTO[] = [
    { value: "kpiValue1", description: "kpiDesc1" },
    { value: "kpiValue2", description: "kpiDesc1" },
    { value: "kpiValue3", description: "kpiDesc1" },
    { value: "kpiValue4", description: "kpiDesc1" },
    { value: "kpiValue5", description: "kpiDesc1" }
];

type ProjectDescPointProps = { text: string };
const projectDescPoints: ProjectDescPointProps[] = [
    { text: "projectPo1" },
    { text: "projectPo2" },
    { text: "projectPo3" },
    { text: "projectPo4" },
    { text: "projectPo5" },
    { text: "projectPo6" },
    { text: "projectPo7" }
];

const Project = async () => {
    const t = await getTranslations("Project");

    return (
        <>
            <MContainer variant="regular">
                <div className="flex-flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-center gap-4">
                        {kpiValues.map(k => (
                            <KPI
                                key={k.value}
                                value={t(`KPI.Value.${k.value}`)}
                                description={t(`KPI.Desc.${k.description}`)}
                            />
                        ))}
                        <div className="flex w-full justify-center">
                            <Image
                                src="/image/client/landing/waranty_badge.svg"
                                alt="warany badge"
                                width={128}
                                height={128}
                            />
                        </div>
                    </div>
                </div>
            </MContainer>

            <MContainer variant="regular" className="py-8 md:py-16">
                <div className="w-full bg-neutral-200 px-5 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="max-w-[820px]">
                            <SectionHeading theme="light">PROJEKT</SectionHeading>
                            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
                                Jedinečné byty
                            </h2>
                            <p className="h2 text-brand mt-1">s komfortom rodinného domu</p>
                        </div>

                        <div className="md:pt-2 md:w-[220px]">
                            <Button
                                variant="brand"
                                rightIcon={<GoArrowRight />}
                                size="lg"
                                className="w-full"
                            >
                                Zistiť viac
                            </Button>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8">
                            <div className="bleed-left-to-viewport">
                                <Image
                                    src="/image/client/landing/choose_flat_bg.png"
                                    alt="Bytový projekt"
                                    width={1600}
                                    height={900}
                                    className="w-full h-auto block"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <ul className="divide-neutral-400/50 divide-y-2">
                                {projectDescPoints.map((p, i) => (
                                    <li key={i} className="py-4">
                                        <p className="uppercase tracking-wide text-[13px] font-medium leading-5">
                                            {t(`ProjectDescPoint.${p.text}`)}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </MContainer>
        </>
    );
};

export default Project;