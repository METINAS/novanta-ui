import React from "react";
import clsx from "clsx";
import MContainer from "@/app/[locale]/component/layout/MContainer";

type MErrorProps = {
    children?: React.ReactNode
    className?: string;
}

const MError: React.FC<MErrorProps> = ({ children, className }) => {
    return (
        <>
            <MContainer variant={`regular`}>
                <p className={clsx("w-auto text-red-700 p-4 border border-red-700 bg-red-100 font-semibold text-center", className)}>
                    {children}
                </p>
            </MContainer>
        </>
    )
}

export default MError;