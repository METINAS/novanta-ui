"use client"

import MContainer from "@/app/[locale]/component/layout/MContainer";
import {useTranslations} from "next-intl";
import SectionHeading from "@/app/[locale]/component/micro/SectionHeading";
import Button from "@/app/[locale]/component/micro/Button";
import {GoArrowDown, GoArrowUp} from "react-icons/go";
import {useState} from "react";
import {useLocale} from "use-intl";

const References = () => {
    const t = useTranslations("References");
    const locale = useLocale();

    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <MContainer
                variant="full"
                backgroundImage="/image/client/landing/developer_bg.png"
                className="py-8 md:py-16"
            >
                <MContainer variant="regular">
                    <div className="flex flex-col gap-8 text-white">
                        <SectionHeading theme="dark">{t("sectionTitle")}</SectionHeading>
                        <div className="flex flex-col gap-2">
                            <h2>{t("title-1")}</h2>
                            <p className="h2 font-weight-light">{t("title-2")}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pp-18">
                            <div className="pp-18">
                                {t("description1")}
                            </div>
                            <div className="pp-18">
                                {t("description2")}
                            </div>
                            <div className="pp-18">
                                {t("description3")}
                            </div>
                        </div>
                        <div className="flex w-full justify-center">
                            <Button
                                variant="brand"
                                size="lg"
                                onClick={() => setOpen(!open)}
                                className="transition-all duration-300 flex items-center gap-4"
                            >
                                {t("cta")}
                                <GoArrowDown
                                    className={`transform transition-transform duration-300 ${
                                        open ? "rotate-180" : "rotate-0"
                                    }`}
                                />
                            </Button>
                        </div>
                        {/*{open && (*/}
                        {/*    // <CardCarousel locale={locale} />*/}
                        {/*)}*/}
                    </div>
                </MContainer>
            </MContainer>
        </>
    )
}



export default References;