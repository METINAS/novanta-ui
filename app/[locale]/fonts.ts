import localFont from "next/font/local";

export const manrope = localFont({
    src: [
        {
            path: "../fonts/Manrope-VariableFont_wght.ttf",
            weight: "100 900",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-manrope",
    preload: true,
});

export const kanitBold = localFont({
    src: [
        {
            path: "../fonts/Kanit-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-kanit",
    preload: true,
});

export const raleway = localFont({
    src: [
        {
            path: "../fonts/Raleway-VariableFont_wght.ttf",
            weight: "100 900",
            style: "normal"
        },
    ],
    display: "swap",
    variable: "--font-raleway",
    preload: true,
});

export const syne = localFont({
    src: [
        {
            path: "../fonts/Syne-VariableFont_wght.ttf",
            weight: "100 900",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-syne",
    preload: true,
});