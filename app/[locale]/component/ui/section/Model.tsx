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
                            id: "f4",
                            label: "Floor 3 – 7 flats",
                            shapes: [
                                { points:
                                    `
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
                            ],
                        },
                        {
                            id: "f3",
                            label: "Floor 3",
                            shapes: [
                                { points:
                                    `
                                        267.5, 862.5
                                        267.5, 845
                                        285, 840
                                        280, 745
                                        472.5, 680
                                        472.5, 690
                                        765, 800
                                        1250, 600
                                        1282.5, 610
                                        1278.5, 685
                                        1290, 687.5
                                        1290, 700
                                        1280, 705
                                        1292.5, 705
                                        1292.5, 740
                                        1220, 777.5
                                        1170, 762.5
                                        1165, 770
                                        1165, 805
                                        1087.5, 842.5
                                        1040, 827.5
                                        1025, 832.5
                                        1025, 875
                                        940, 915
                                        890, 897.5
                                        870, 902.5
                                        870, 952.5
                                        775, 997.5
                                        705, 970
                                        620, 1010
                                    `
                                }
                            ]
                        }
                    ]}
                    onSelect={(f) => console.log("Selected", f.id)}
                />

            </MContainer>
        </>
    )
}

export default Model;