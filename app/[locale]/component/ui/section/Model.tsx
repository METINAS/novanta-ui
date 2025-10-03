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
                            label: "Floor 4",
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
                        },
                        {
                            id: "f2",
                            label: "Floor 2",
                            shapes: [
                                { points:
                                    `
                                        1290, 740
                                        1290, 700
                                        1245, 720
                                        1290, 735
                                        1290, 745
                                        1220, 775
                                        1175, 760
                                        1115, 780
                                        1165, 795
                                        1165, 805
                                        1087.5, 842.5
                                        1035, 827.5
                                        970, 845
                                        1025, 860
                                        1025, 870
                                        940, 915
                                        890, 895
                                        820, 920
                                        867.5, 940
                                        867.5, 945
                                        775, 995
                                        705, 970
                                        620, 1010
                                        267.5, 857.5
                                        267.5, 870
                                        220, 885
                                        225, 930
                                        685, 1140
                                        940, 1005
                                        1032.5, 975
                                        1032.5, 960
                                        1087.5, 930
                                        1172.3, 900
                                        1172.3, 885
                                        1220, 860
                                        1225, 860
                                        1297.5, 835
                                        1297.5, 820
                                        1345, 800  
                                        1345, 760                                       
                                    `
                                }
                            ]
                        },
                    ]}
                    onSelect={(f) => console.log("Selected", f.id)}
                />

            </MContainer>
        </>
    )
}

export default Model;