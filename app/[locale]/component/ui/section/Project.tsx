import React from "react";
import {KPIReadDTO} from "@/app/[locale]/types";
import KPI from "@/app/[locale]/component/ui/block/KPI";
import MContainer from "@/app/[locale]/component/layout/MContainer";
import {getTranslations} from "next-intl/server";
import Image from "next/image";


const kpiValues: KPIReadDTO[] = [
    {value: "kpiValue1", description: "kpiDesc1"},
    {value: "kpiValue2", description: "kpiDesc1"},
    {value: "kpiValue3", description: "kpiDesc1"},
    {value: "kpiValue4", description: "kpiDesc1"},
    {value: "kpiValue5", description: "kpiDesc1"}
]

const projectDescPoints: ProjectDescPointProps[] = [
    { text: "projectPo1" },
    { text: "projectPo2" },
    { text: "projectPo3" },
    { text: "projectPo4" },
    { text: "projectPo5" },
    { text: "projectPo6" },
    { text: "projectPo7" }
]

const Project = async () => {
    const t = await getTranslations("KPI");

    return (
        <>
            <MContainer variant="regular" className="py-8 md:py-16">
                <div className="flex-flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-center gap-4">
                        {kpiValues.length > 0 && kpiValues.map((k => (
                            <KPI key={k.value} value={t(`Value.${k.value}`)} description={t(`Desc.${k.description}`)} />
                        )))}
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
                <div className="bg-background-gray flex flex-col gap-8 text-black p-4 md:p-8">
                    <p className="pp-20">PROJEKT</p>
                    <div className="flex w-full">
                        <h2>JEDINECNE BYTY <br/> s komfortom rodinneho domu</h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-3/4">
                            <Image
                                src=""
                                alt=""
                                width={128}
                                height={128}
                            />
                        </div>
                        <div className="w-full md:w-1/4 flex flex-col gap-2">
                            {}
                        </div>
                    </div>
                </div>
            </MContainer>
        </>
    )
}

type ProjectDescPointProps = {
    text: string;
}

const ProjectDescPoint: React.FC<ProjectDescPointProps> = ({ text }) => {
    return (
        <>
            <p className="pp-20 text-black">{text}</p>
        </>
    )
}

export default Project;