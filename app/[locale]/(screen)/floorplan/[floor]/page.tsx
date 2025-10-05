import Image from "next/image";
import MContainer from "@/app/[locale]/component/layout/MContainer";
import {notFound} from "next/navigation";

type PageProps = {
    params: { locale: string; floor: string };
};

const imageByFloor: Record<number, string> = {
    1: "/floorplans/floor-1.svg",
    2: "/floorplans/floor-2.svg",
    3: "/floorplans/floor-3.svg",
    4: "/floorplans/floor-4.svg",
}

export default function FloorplanPage({params: {floor}}: PageProps) {
    const floorNo = Number(floor);
    if (!Number.isFinite(floorNo) || !(floorNo in imageByFloor)) {
        notFound();
    }

    const src = imageByFloor[floorNo];

    return (
        <MContainer variant={`regular`} className={`mt-[88px] py-8 md:py-16`}>
            <h2>{floorNo}. poschodie</h2>
            <div className="w-full">
                <Image src={src} alt={`Pôdorys ${floorNo}. poschodie`} width={1600} height={1200} priority/>
            </div>
        </MContainer>
    );
}