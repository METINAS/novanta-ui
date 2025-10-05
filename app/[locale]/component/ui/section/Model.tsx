'use client'

import MContainer from "@/app/[locale]/component/layout/MContainer";
import BuildingInteractive, {Floor} from "@/app/[locale]/component/ui/block/BuildingInteractive";
import {buildAvailability} from "@/app/[locale]/util/buildAvailability";
import {flats} from "@/app/[locale]/component/ui/section/FlatList";

const availability = buildAvailability(flats);

const floors: Floor[] = [
    { id: "f4",
        label: "Floor 4",
        shapes: [
            {
                points:
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
        meta: { floorNumber: 4 }
    },
    {
        id: "f3",
        label: "Floor 3",
        shapes: [
            {
                points:
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
        ],
        meta: { floorNumber: 3 }
    },
    {
        id: "f2",
        label: "Floor 2",
        shapes: [
            {
                points:
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
        ],
        meta: { floorNumber: 2 }
    },
    {
        id: "f1",
        label: "Floor 1",
        shapes: [
            {
                points:
                    `
                                        1345, 795
                                        1295, 820
                                        1295, 835
                                        1220, 860
                                        1170, 890
                                        1170, 900
                                        1085, 930
                                        1030, 960
                                        1030, 975
                                        940, 1005
                                        685, 1140
                                        225, 925
                                        227.5, 965
                                        182.5, 980
                                        182.5, 985
                                        230, 1010
                                        230, 1020
                                        685, 1240
                                        695, 1235
                                        775, 1275
                                        855, 1230
                                        855, 1220
                                        780, 1187.5
                                        865, 1140
                                        945, 1177.5
                                        1015, 1140
                                        1015, 1130
                                        955, 1100
                                        955, 1095
                                        1020, 1060
                                        1095, 1090
                                        1160, 1055
                                        1160, 1045
                                        1100, 1025
                                        1100, 1015
                                        1155, 980
                                        1235, 1010
                                        1290, 980
                                        1290, 970
                                        1230, 950
                                        1230, 940
                                        1290, 907.5
                                        1315, 917.5
                                        1380, 880
                                        1380, 875
                                        1340, 865                                       
                                    `
            }
        ],
        meta: { floorNumber: 1 }
    }
]

const Model = () => {
    return (
        <>
            <MContainer variant="full" className={`bg-linear-to-b from-[#E6E9EC] to-[#DFE3E8]`}>
                <MContainer variant="regular">
                    <BuildingInteractive
                        imageSrc="/image/model/AXO6.png"
                        viewBox={{width: 1600, height: 1600}}
                        floors={floors}
                        onSelect={(f) => console.log("Selected", f.id)}
                        availability={availability}
                    />
                </MContainer>
            </MContainer>
        </>
    )
}

export default Model;