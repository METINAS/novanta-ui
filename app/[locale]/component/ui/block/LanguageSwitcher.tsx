'use client'

import {useEffect, useRef, useState} from "react";
import {usePathname} from "next/navigation";
import {useLocale} from "use-intl";
import Image from "next/image";
import Button from "@/app/[locale]/component/micro/Button";
import {syne} from "@/app/[locale]/fonts";

const languages = [
    {code: "sk", name: "Slovenčina"},
    {code: "en", name: "English"},
]

type LangCode = (typeof languages)[number]["code"];
const LOCALE_REGEX = /^\/(sk|en)(?=\/|$)/;

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname() || "";
    const currentLocale = useLocale() as LangCode;
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage =
        languages.find((l) => l.code === currentLocale) || languages[0];

    const handleLanguageChange = (lang: LangCode) => {
        if (lang === currentLocale) {
            setIsOpen(false);
            return;
        }

        const search =
            typeof window !== "undefined" ? window.location.search : "";
        const hash = typeof window !== "undefined" ? window.location.hash : "";

        const newPath = LOCALE_REGEX.test(pathname)
            ? pathname.replace(LOCALE_REGEX, `/${lang}`)
            : `/${lang}${pathname.startsWith("/") ? "" : "/"}${pathname}`;

        window.location.href = `${newPath}${search}${hash}`;
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return (
        <>
            <div className={`relative ${syne.className}`} ref={dropdownRef}>
                {/* Desktop */}
                <div className="hidden sm:block">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-4 bg-transparent font-bold text-white cursor-pointer`}
                    >
                        <span className="text-sm font-medium">
                            {currentLanguage.code.toUpperCase()}
                        </span>
                    </button>
                </div>

                {/* Mobile */}
                <div className="sm:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-4 bg-transparent font-bold text-white cursor-pointer`}
                    >
                        <span className="text-xs font-medium">
                            {currentLanguage.code.toUpperCase()}
                        </span>
                    </button>
                </div>

                {isOpen && (
                    <div
                        className="absolute right-0 top-full mt-2 backdrop-blur-lg z-50 font-bold">
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => handleLanguageChange(language.code)}
                                className={`w-full px-8 py-3 text-center flex items-center gap-3 bg-black/80 hover:bg-brand/20 transition-colors hover:cursor-pointer ${
                                    currentLocale === language.code
                                        ? "bg-brand/30 text-white"
                                        : "text-white hover:text-white"
                                }`}
                            >
                                <div className="flex flex-col">
                                    <span className="font-medium text-sm">{language.name}</span>
                                </div>
                                {currentLocale === language.code && (
                                    <div className="ml-auto w-2 h-2 bg-brand rounded-full"></div>
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default LanguageSwitcher;