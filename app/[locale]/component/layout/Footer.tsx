'use client';

import dynamic from 'next/dynamic';
import MContainer from "@/app/[locale]/component/layout/MContainer";
import Image from "next/image";
import { syne } from "@/app/[locale]/fonts";
import MLink from "@/app/[locale]/component/micro/MLink";
import { useTranslations } from "next-intl";

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
];

const Map = dynamic(() => import("../../../[locale]/component/ui/block/Map"), { ssr: false });

const Footer = () => {
    const t = useTranslations("Footer");

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
                    <div className={`${syne.className} font-bold block pp-16 text-black`}>
                        <p>{t("email")}</p>
                        <p>{t("phone")}</p>
                    </div>
                    <div className="block pp-16 text-brand">
                        <p>{t("terms&conditions")}</p>
                        <p>{t("rightsReserved")}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <p className={`${syne.className} text-brand pp-20 font-bold`}>{t("mapLabel")}</p>
                    <div className="flex flex-col gap-2">
                        {footerNavigationItems && footerNavigationItems.map((item) => (
                            <MLink key={item.label} route={item.href} type="footer" className="!p-0">
                                {t(`Link.${item.label}`)}
                            </MLink>
                        ))}
                    </div>
                </div>
                <div className="flex col-span-1 md:col-span-2">
                    <Map />
                </div>
            </MContainer>
        </MContainer>
    );
}

export default Footer;
