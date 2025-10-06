import Image from "next/image";
import MContainer from "@/app/[locale]/component/layout/MContainer";
import { notFound } from "next/navigation";
import Contact from "@/app/[locale]/component/ui/section/Contact";
import MError from "@/app/[locale]/component/micro/MError";

type PageProps = {
    params: Promise<{ locale: string; floor: string }>;
};

const imageByFloor: Record<number, string> = {
    1: "/floorplans/floor-1.jpg",
    2: "/floorplans/floor-2.png",
    3: "/floorplans/floor-3.png",
    4: "/floorplans/floor-4.png",
};

function getBaseUrl() {
    return process.env.API_BASE_URL ?? "http://localhost:3001";
}

export async function getFlatsByFloor(floor: number) {
    try {
        const base = getBaseUrl();
        const res = await fetch(`${base}/api/floors/${floor}`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            console.error(`API returned status ${res.status} for floor ${floor}`);
            return null;
        }

        return await res.json();
    } catch (err) {
        console.error(`Failed to fetch flats for floor ${floor}:`, err);
        return null;
    }
}

export default async function FloorPlanPage(props: PageProps) {
    const { floor } = await props.params;
    const floorNo = Number(floor);

    if (!Number.isFinite(floorNo) || !(floorNo in imageByFloor)) {
        notFound();
    }

    const flats = await getFlatsByFloor(floorNo);
    const src = imageByFloor[floorNo];

    return (
        <>
            <MContainer variant="regular" className="mt-[88px] py-8 md:py-16">
                <h2>{floorNo}. poschodie</h2>

                <div className="w-full max-h-[800px] flex justify-center">
                    <Image
                        src={src}
                        alt={`Pôdorys ${floorNo}. poschodie`}
                        width={1200}
                        height={800}
                        priority
                    />
                </div>

                {flats ? (
                    <ul className="mt-8">
                        {flats.map((flat: any) => (
                            <li key={flat.id}>
                                <strong>{flat.name}</strong> – {flat.size} m²
                            </li>
                        ))}
                    </ul>
                ) : (
                    <MError>
                        Nepodarilo sa načítať údaje o bytoch pre toto poschodie.
                        <br />
                        Skúste to prosím neskôr.
                    </MError>
                )}
            </MContainer>

            <MContainer variant="full">
                <Contact />
            </MContainer>
        </>
    );
}
