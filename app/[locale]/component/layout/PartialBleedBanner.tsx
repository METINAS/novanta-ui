import React from "react";
import MContainer from "@/app/[locale]/component/layout/MContainer";

type PartialBleedBannerProps = {
    image: string;
    overlayClassName?: string;
    className?: string;
    children?: React.ReactNode;
};

const PartialBleedBanner: React.FC<PartialBleedBannerProps> = ({
                                                                   image,
                                                                   overlayClassName,
                                                                   className,
                                                                   children
                                                               }) => {
    return (
        <section className={`relative w-full ${className || ""}`}>
            <div
                className="absolute inset-y-0 left-0"
                style={{
                    width: "calc(50vw + min(100vw, 1440px)/2 - 20px)",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                aria-hidden="true"
            />

            <div
                className={`absolute inset-y-0 left-0 ${overlayClassName}`}
                style={{
                    width: "calc(50vw + min(100vw, 1440px)/2 - 20px)"
                }}
                aria-hidden="true"
            />

            <div className="relative z-10">
                <MContainer variant="regular">
                    {children}
                </MContainer>
            </div>
        </section>
    );
};

export default PartialBleedBanner;