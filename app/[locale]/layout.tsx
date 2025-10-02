import React, {ReactNode} from "react";
import "./globals.css";
import {NextIntlClientProvider} from "next-intl";
import {Locale, routing} from "@/i18n/routing";
import {notFound} from "next/navigation";
import {getMessages} from "next-intl/server";
import Footer from "@/app/[locale]/component/layout/Footer";
import Navbar from "@/app/[locale]/component/layout/Navbar";
import {kanitBold, manrope, raleway, syne} from "@/app/[locale]/fonts";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }) {
    const { locale } = await params;
    console.log(locale);
    return {
        title: "Novanta development",
        description: "what is happening",
    };
}

export default async function RootLayout({ children, params }: { children: ReactNode, params: Params }) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${raleway.className} w-full`}>
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
