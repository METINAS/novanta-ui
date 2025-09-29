import React from "react";

type KPIProps = {
    value: string;
    description: string;
}

const KPI: React.FC<KPIProps> = ({ value, description }) => {
    return (
        <>
            <div className="flex flex-col gap-4 text-center text-black">
                <p className="h1">
                    {value}
                </p>
                <p className="pp-18">
                    {description}
                </p>
            </div>

        </>
    )
}

export default KPI;