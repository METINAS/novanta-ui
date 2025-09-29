import MContainer from "@/app/[locale]/component/layout/MContainer";
import Image from "next/image";

const Intro = () => {
    return (
        <>
            <MContainer variant="regular">
                <div className="flex flex-col gap-4 md:flex-row py-4 md:py-8">
                    <div className="w-1/2 flex flex-col gap-4 justify-center">
                        <p>Intro</p>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti dolores earum iure maxime molestiae mollitia provident quas sapiente ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nisi perspiciatis porro sequi! Doloribus error excepturi odit voluptatem! Accusamus consequuntur dolorem error excepturi ipsam, pariatur reiciendis rem vitae. Aut excepturi explicabo fuga fugit ratione vitae. Assumenda dolore et impedit inventore labore, laudantium minima nemo nulla omnis, quis sit, suscipit tenetur.</p>
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                        <Image
                            src="/image/client/landing/intro_image.png"
                            alt="intro_img"
                            width={512}
                            height={512}
                        />
                    </div>
                </div>
            </MContainer>
        </>
    )
}

export default Intro;