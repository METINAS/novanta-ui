"use client"

import ImageCarousel from "@/app/[locale]/component/ui/block/ImageCarousel";
import MContainer from "@/app/[locale]/component/layout/MContainer";
import Button from "@/app/[locale]/component/micro/Button";
import {getTranslations} from "next-intl/server";
import {useTranslations} from "next-intl";
import {GoArrowRight, GoBriefcase} from "react-icons/go";
import {syne} from "@/app/[locale]/fonts";

const heroImages = [
    { url: "/image/client/landing/hero_1.png", alt: "Exteriér projektu za súmraku" },
    { url: "/image/client/landing/hero_2.png", alt: "Moderná architektúra – denný záber" },
];

const Hero = () => {
    const t = useTranslations("Hero")

    return (
        <section className="relative h-dvh min-h-[520px]">
            <ImageCarousel images={heroImages} intervalMs={6000} />

            <div className="absolute inset-0 bg-black/60" />

            <MContainer variant="regular" className="relative z-10 h-full">
                <div className="flex h-full items-center">
                    <div className="max-w-4xl flex flex-col gap-4 md:gap-8">
                        <h1 className={`${syne.className} text-white text-4xl md:text-7xl font-bold leading-tight`} dangerouslySetInnerHTML={{ __html: t("title") }}/>
                        <p className="mt-4 pp-30 text-white/90 text-lg">
                            {t("description")}
                        </p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <Button
                                variant="brand"
                                rightIcon={<GoArrowRight />}
                            >
                                {t("Cta.reserveFlat")}
                            </Button>
                            <Button
                                variant="emerald"
                                rightIcon={<GoBriefcase />}
                            >
                                {t("Cta.developer")}
                            </Button>
                        </div>
                    </div>
                </div>
            </MContainer>
        </section>
    );
};

export default Hero;