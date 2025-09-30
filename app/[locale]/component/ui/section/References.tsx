"use client"

import MContainer from "@/app/[locale]/component/layout/MContainer";
import {useTranslations} from "next-intl";
import SectionHeading from "@/app/[locale]/component/micro/SectionHeading";
import Button from "@/app/[locale]/component/micro/Button";
import {GoArrowDown} from "react-icons/go";
import {useEffect, useState} from "react";
import {useLocale} from "use-intl";
import CardCarousel from "@/app/[locale]/component/ui/block/CardCarousel";
import clsx from "clsx";

const STORAGE_KEY = "refsOpen";

const References = () => {
    const t = useTranslations("References");
    const locale = useLocale();

    const [open, setOpen] = useState<boolean>(() => {
        if (typeof window === "undefined") return true;
        const saved = window.localStorage.getItem(STORAGE_KEY);
        return saved ? saved === "1" : true;
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem(STORAGE_KEY, open ? "1" : "0");
        }
    }, [open]);

    return (
        <MContainer
            variant="full"
            backgroundImage="/image/client/landing/developer_bg.png"
            className="py-8 md:py-16 border-b-8 border-brand"
        >
            <MContainer variant="regular">
                <div className="flex flex-col gap-8 text-white">
                    <SectionHeading theme="dark">{t("sectionTitle")}</SectionHeading>

                    <div className="flex flex-col gap-2">
                        <h2>{t("title-1")}</h2>
                        <p className="h2 font-weight-light">{t("title-2")}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pp-18">
                        <div className="pp-18">{t("description1")}</div>
                        <div className="pp-18">{t("description3")}</div>
                        <div className="pp-18">{t("description2")}</div>
                        <div className="block">
                            <Button
                                variant="brand"
                                size="lg"
                                onClick={() => setOpen(v => !v)}
                                className="transition-all duration-300 flex items-center gap-4"
                            >
                                {t("cta")}
                                <GoArrowDown
                                    className={clsx(
                                        "transform transition-transform duration-300",
                                        open ? "rotate-180" : "rotate-0"
                                    )}
                                />
                            </Button>
                        </div>
                    </div>

                    <div
                        className={clsx(
                            "grid transition-all duration-500 ease-in",
                            open
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                        )}
                    >
                        <div className="overflow-hidden">
                            <CardCarousel locale={locale} />
                        </div>
                    </div>
                </div>
            </MContainer>
        </MContainer>
    );
};

export default References;