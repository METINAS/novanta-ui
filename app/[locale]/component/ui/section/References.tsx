import MContainer from "@/app/[locale]/component/layout/MContainer";
import Image from "next/image";

const References = () => {
    return (
        <>
            <MContainer
                variant="full"
                backgroundImage="/image/client/landing/developer_bg.png"
                className="py-4 md:py-8"
            >
                <MContainer variant="regular">
                    <div className="flex flex-col gap-8 text-white">
                        <p className="pp-20">DEVELOPER</p>
                        <div className="flex w-full">
                            <h2>Od developera <br/> uspesnych projektov</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <div className="pp-18">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis doloremque eveniet, fuga harum ipsam laudantium, minima nam nobis non odit sunt ullam voluptatum? Aliquam doloremque fugit hic impedit officia officiis quisquam. Distinctio, repellat, temporibus!
                            </div>
                            <div className="pp-18">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem corporis id tempore veniam. Aliquid animi aut commodi consectetur delectus dolor eaque, earum est exercitationem facere, facilis fugiat illo incidunt iste labore minus nam natus nostrum numquam obcaecati sed suscipit unde velit voluptatem voluptatibus. Consequatur cupiditate laudantium nemo suscipit tenetur!
                            </div>
                        </div>
                    </div>
                </MContainer>
            </MContainer>
        </>
    )
}

export default References;