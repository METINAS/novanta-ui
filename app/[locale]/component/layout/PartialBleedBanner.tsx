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
                className="hidden md:block absolute inset-0"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                aria-hidden="true"
            />

            {overlayClassName && (
                <div className={`hidden md:block absolute inset-0 ${overlayClassName}`} aria-hidden="true" />
            )}

            <div className="relative z-10">
                <MContainer variant="regular" paddings={{ left: 20, right: 0 }}>
                    <div className="relative px-5 md:px-0 md:min-h-[560px]">
                        {children}
                    </div>
                </MContainer>
            </div>
        </section>
    );
};

export default PartialBleedBanner;