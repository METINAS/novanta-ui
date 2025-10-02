import {getLocale, getTranslations} from "next-intl/server";
import MContainer from "@/app/[locale]/component/layout/MContainer";
import SectionHeading from "@/app/[locale]/component/micro/SectionHeading";
import CardCarousel from "@/app/[locale]/component/ui/block/CardCarousel";
import { syne } from "@/app/[locale]/fonts";

const References = async () => {
    const t = await getTranslations("References");
    const locale = await getLocale();

    return (
        <MContainer
            variant="full"
            backgroundImage="/image/client/landing/developer_bg.png"
            className="py-8 md:py-16 border-b-8 border-brand"
        >
            <MContainer variant="regular">
                <div className="flex flex-col gap-8 text-white">
                    <SectionHeading theme="dark">{t("sectionTitle")}</SectionHeading>

                    <div className={`${syne.className} flex flex-col gap-2`}>
                        <p className="h1">{t("title-1")}</p>
                        <p className="h1 font-weight-light">{t("title-2")}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pp-18">
                        <div className="pp-18">{t("description1")}</div>
                        <div className="pp-18">{t("description2")}</div>
                    </div>

                    <div className="grid transition-all duration-500 ease-in grid-rows-[1fr] opacity-100">
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