import PartialBleedBanner from "@/app/[locale]/component/layout/PartialBleedBanner";
import SectionHeading from "@/app/[locale]/component/micro/SectionHeading";
import Button from "@/app/[locale]/component/micro/Button";
import {GoArrowRight} from "react-icons/go";
import MContainer from "@/app/[locale]/component/layout/MContainer";
import {getTranslations} from "next-intl/server";
import {syne} from "@/app/[locale]/fonts";

const ChooseFlat = async () => {
    const t = await getTranslations("ChooseFlat");

    return (
        <MContainer variant="full">
            <PartialBleedBanner
                image="/image/client/landing/choose_flat_bg.png"
                className="pt-8 md:pt-24"
            >
                <div
                    className="
                        bg-white text-black
                        p-0 md:p-12 pb-8
                        w-full md:max-w-[520px]
                        relative md:absolute md:right-0 md:bottom-0 mb-[-2px]
                    "
                >
                    <SectionHeading theme="light">{t("sectionHeading")}</SectionHeading>

                    <div className={`${syne.className} mt-4 mb-6`}>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">{t("title-1")}</h2>
                        <p className="h2 text-brand-500 font-semibold -mt-1">{t("title-2")}</p>
                    </div>

                    <p className="opacity-90">{t("description")}</p>

                    <div className="mt-8">
                        <Button variant="brand" rightIcon={<GoArrowRight/>}>
                            {t("cta")}
                        </Button>
                    </div>
                </div>
            </PartialBleedBanner>
        </MContainer>
    );
};

export default ChooseFlat;