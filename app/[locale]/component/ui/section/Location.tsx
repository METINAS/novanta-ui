import MContainer from "@/app/[locale]/component/layout/MContainer";
import Image from "next/image";
import {getTranslations} from "next-intl/server";
import Button from "@/app/[locale]/component/micro/Button";
import {GoArrowRight} from "react-icons/go";
import SectionHeading from "@/app/[locale]/component/micro/SectionHeading";
import {syne} from "@/app/[locale]/fonts";

const Location = async () => {
    const t = await getTranslations("Locality");

    return (
        <>
            <MContainer variant="regular">
                <div className="flex flex-col gap-4 md:flex-row py-8 md:py-16">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center">
                        <SectionHeading
                            theme="light"
                        >
                            {t("sectionTitle")}
                        </SectionHeading>
                        <div className={`${syne.className} flex flex-col gap-2`}>
                            <h2>{t("title-1")}</h2>
                            <p className="h2 text-brand font-weight-light">{t("title-2")}</p>
                        </div>
                        <p>{t("description")}</p>
                        <div className="flex">
                            <Button
                                variant="emerald"
                                size="md"
                                rightIcon={<GoArrowRight />}
                                aria-label={t("cta")}
                                texture="solid"
                            >
                                {t("cta")}
                            </Button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center justify-end">
                        <Image
                            src="/image/client/landing/locality_image.png"
                            alt="intro_img"
                            width={512}
                            height={512}
                        />
                    </div>
                </div>
            </MContainer>
        </>
    )
}

export default Location;