'use client'

import MContainer from "@/app/[locale]/component/layout/MContainer";
import BuildingInteractive from "@/app/[locale]/component/ui/block/BuildingInteractive";

const Model = () => {
    return (
        <>
            <MContainer variant="regular">
                <BuildingInteractive
                    imageSrc="/image/model/AXO6.png"
                    viewBox={{ width: 1600, height: 1600 }}
                    floors={[
                        {
                            id: "f3",
                            label: "Floor 3 – 7 flats",
                            shapes: [
                                { points: `
                                    470, 700
                                    470, 662.5 
                                    620,610 
                                    620,555
                                    975, 442.5
                                    1000, 450
                                    1010, 445
                                    1240, 497.5
                                    1232.5, 505
                                    1255,510 
                                    1250,605
                                    770,805
                                    `
                                },
                                //X Y
                                // near left top
                                // near right top
                                //right bottom
                                //left bottom - check
                            ],
                        },
                    ]}
                    onSelect={(f) => console.log("Selected", f.id)}
                />

            </MContainer>
        </>
    )
}

export default Model;