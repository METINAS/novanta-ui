import TimelineItem, {TimelineItemDto} from "@/app/[locale]/component/ui/block/TimelineItem";
import MContainer from "@/app/[locale]/component/layout/MContainer";
import {getTranslations} from "next-intl/server";
import SectionHeading from "@/app/[locale]/component/micro/SectionHeading";

const timelineItems: TimelineItemDto[] = [
    { label: "building_permit", date: "target1", percentage: 25 },
    { label: "sales_launch", date: "target2", percentage: 70 },
    { label: "construction_start", date: "target3", percentage: 45 },
    { label: "construction_end", date: "target4", percentage: 100 },
    { label: "approval_and_transfer", date: "target5", percentage: 55 },
]

const Timeline = async () => {
    const t = await getTranslations("Timeline");

    return (
        <>
            <MContainer variant={`regular`} className={`flex flex-col md:flex-row gap-8 pb-8 md:pb-16`}>
                <div className="w-full flex flex-col gap-4 justify-center">
                    <SectionHeading theme="light">
                        {t("section_title")}
                    </SectionHeading>
                    <h2>{t("heading")}</h2>
                    <p className="pp-16">{t("description")}</p>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    {timelineItems.map((item) => (
                        <TimelineItem key={item.label} item={item} />
                    ))}
                </div>
            </MContainer>
        </>
    )
}

export default Timeline;