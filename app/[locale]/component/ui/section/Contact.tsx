import MContainer from "@/app/[locale]/component/layout/MContainer";
import SectionHeading from "@/app/[locale]/component/micro/SectionHeading";
import {getTranslations} from "next-intl/server";
import Button from "@/app/[locale]/component/micro/Button";
import {GoDeviceMobile, GoRead} from "react-icons/go";
import {syne} from "@/app/[locale]/fonts";

const Contact = async () => {
    const t = await getTranslations("Contact");

    return (
        <MContainer
            variant="full"
            backgroundImage="/image/client/landing/IV-update_02.jpg"
            className="relative py-8 md:py-16"
        >
            <div className="absolute inset-0 bg-black/60" />

            <MContainer variant="regular" className="relative z-10 h-full flex justify-center">
                <div className="flex flex-col gap-4 md:gap-8 text-center items-center">
                    <SectionHeading theme="dark" twoSided={true} >
                        {t("sectionTitle")}
                    </SectionHeading>
                    <div className={`${syne.className} flex flex-col gap-2`}>
                        <h2 className="text-white">{t("title-1")}</h2>
                        <p className="h2 text-white">{t("title-2")}</p>
                    </div>
                    <p className="text-white pp-18">{t("description")}</p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Button
                            variant="brand"
                            size="xl"
                            leftIcon={<GoDeviceMobile/>}
                            xlLabel={t("button.callCta")}
                            aria-label={t("button.callNum")}
                        >
                            {t("button.callNum")}
                        </Button>
                        <Button
                            variant="emerald"
                            size="xl"
                            leftIcon={<GoRead />}
                            xlLabel={t("button.emailCta")}
                            aria-label={t("button.writeMail")}
                        >
                            {t("button.writeMail")}
                        </Button>
                    </div>
                </div>
            </MContainer>
        </MContainer>
    )
}

export default Contact;