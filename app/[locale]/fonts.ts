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
})