import React from "react";

type SectionHeadingProps = {
    children?: React.ReactNode
    twoSided?: boolean;
    className?: string;
    theme: "dark" | "light";
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, twoSided = false, className, theme = "light" }) => {
    return (
        <>
            <div className={`flex flex-row items-center gap-2 ${className}`}>
                <span className={`w-16 ${theme === "light" ? "bg-black" : "bg-white"} h-[2px]`}/>
                <p className={`pp-18 uppercase font-bold ${theme === "light" ? "text-black" : "text-white"}`}>{children}</p>
                {twoSided &&
                    <span className={`w-16 ${theme === "light" ? "bg-black" : "bg-white"} h-[2px]`}/>
                }
            </div>
        </>
    )
}

export default SectionHeading;