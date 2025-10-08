'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import MLink from "@/app/[locale]/component/micro/MLink";
import { usePathname } from "next/navigation";
import Button from "@/app/[locale]/component/micro/Button";
import { GoArrowRight } from "react-icons/go";
import { useTranslations } from "next-intl";
import { isPhone } from "@/app/[locale]/util/isPhone";
import MContainer from "@/app/[locale]/component/layout/MContainer";
import LanguageSwitcher from "@/app/[locale]/component/ui/block/LanguageSwitcher";
import {Link} from "@/i18n/routing";

type NavLink = {
    text: string;
    href: string;
};

const navLinks: NavLink[] = [
    { text: "intro", href: "/" },
    { text: "developer", href: "/" },
    { text: "project", href: "/" },
    { text: "locality", href: "/" },
    { text: "contact", href: "/" },
];

const Navbar = () => {
    const t = useTranslations("Navbar");
    const [NAV_HEIGHT, setNavHeight] = useState<number>(72);
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        setNavHeight(isPhone() ? 48 : 72);
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", open);
        return () => document.body.classList.remove("overflow-hidden");
    }, [open]);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <>
            <nav
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur-lg transition-colors py-2 ${
                    scrolled || open ? "bg-black/90" : "bg-black/70"
                }`}
            >
                <MContainer variant="regular" className="relative">
                    <div
                        className="flex items-center justify-between"
                        style={{ height: NAV_HEIGHT }}
                    >
                        <div className="flex gap-2 items-center">
                            <Link href={`/`}>
                                <Image
                                    src="/image/layout/novanta_logo.webp"
                                    alt="Logo Novanta"
                                    height={512}
                                    width={512}
                                    priority
                                    className="h-[32px] lg:h-[48px] w-auto"
                                />
                            </Link>
                            <LanguageSwitcher />
                        </div>

                        <div className="hidden md:flex gap-6 items-center">
                            {navLinks.map((link) => (
                                <MLink
                                    type="nav"
                                    key={link.text}
                                    route={link.href}
                                    ariaLabel={t(`Link.${link.text}`)}
                                    className="text-white hover:text-white/80 transition"
                                >
                                    {t(`Link.${link.text}`)}
                                </MLink>
                            ))}
                            <Button
                                texture="solid"
                                variant="brand"
                                size="lg"
                                rightIcon={<GoArrowRight />}
                            >
                                {t(`Button.chooseFlat`)}
                            </Button>
                        </div>

                        <button
                            type="button"
                            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40"
                            aria-controls="primary-navigation"
                            aria-expanded={open}
                            aria-label={open ? t("Aria.navClose") : t("Aria.navOpen")}
                            onClick={() => setOpen((v) => !v)}
                        >
                            <svg
                                className={`${open ? "hidden" : "block"} h-6 w-6`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                            <svg
                                className={`${open ? "block" : "hidden"} h-6 w-6`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    <div
                        id="primary-navigation"
                        className={`md:hidden absolute left-0 right-0 top-full overflow-hidden transition-[max-height] duration-300 ${
                            open ? "max-h-[380px]" : "max-h-0"
                        }`}
                    >
                        <div className="bg-black/90 backdrop-blur">
                            <div className="py-3">
                                <nav className="flex flex-col gap-1">
                                    {navLinks.map((link) => (
                                        <MLink
                                            type="nav"
                                            key={link.text}
                                            route={link.href}
                                            ariaLabel=""
                                            className="block rounded-lg px-4 py-3 text-white hover:bg-white/10 transition"
                                            onClick={() => setOpen(false)}
                                        >
                                            {t(`Link.${link.text}`)}
                                        </MLink>
                                    ))}
                                </nav>

                                <div className="px-4">
                                    <Button
                                        texture="solid"
                                        variant="brand"
                                        size="md"
                                        className="mt-4 w-full"
                                        rightIcon={<GoArrowRight />}
                                    >
                                        {t("Button.chooseFlat")}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </MContainer>
            </nav>

            <button
                aria-hidden
                tabIndex={-1}
                className={`fixed left-0 right-0 top-[${NAV_HEIGHT}px] bottom-0 bg-black/40 md:hidden transition-opacity z-40 ${
                    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setOpen(false)}
            />
        </>
    );
};

export default Navbar;
