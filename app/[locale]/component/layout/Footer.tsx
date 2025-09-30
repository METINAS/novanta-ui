import MContainer from "@/app/[locale]/component/layout/MContainer";
import Image from "next/image";
import {getTranslations} from "next-intl/server";
import Map from "../../../[locale]/component/ui/block/Map";

type FooterNavItem = {
    label: string;
    href: string;
}

const footerNavigationItems: FooterNavItem[] = [
    { label: "intro", href: "" },
    { label: "developer", href: "" },
    { label: "project", href: "" },
    { label: "locality", href: "" },
    { label: "contact", href: "" },
    { label: "chooseFlat", href: "" },
]

const Footer = async () => {
    const t = await getTranslations("Footer");

    return (
        <MContainer variant="full">
            <MContainer variant="regular" className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 py-8 md:py-24">
                <div className="flex flex-col gap-4 lg:gap-8 justify-between">
                    <div className="block">
                        <Image
                            src="/image/layout/novanta_logo.webp"
                            alt="logo"
                            width={256}
                            height={84}
                        />
                    </div>
                    <div className="block pp-16 text-black">
                        <p>{t("email")}</p>
                        <p>{t("phone")}</p>
                    </div>
                    <div className="block pp-16 text-brand">
                        <p>{t("terms&conditions")}</p>
                        <p>{t("rightsReserved")}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <p className="text-brand pp-20 font-bold">{t("mapLabel")}</p>
                    <div className="flex flex-col gap-2">
                        {footerNavigationItems.length > 0 && footerNavigationItems.map((navItem) => (
                            <a key={navItem.label} className="text-black pp-16">{t(`Link.${navItem.label}`)}</a>
                        ))}
                    </div>
                </div>
                <div className="flex col-span-1 md:col-span-2">
                    <Map />
                </div>
            </MContainer>
        </MContainer>
    )
}

export default Footer;