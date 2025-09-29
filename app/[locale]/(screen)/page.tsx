import Hero from "@/app/[locale]/component/ui/section/Hero";
import Intro from "@/app/[locale]/component/ui/section/Intro";
import Project from "@/app/[locale]/component/ui/section/Project";
import References from "@/app/[locale]/component/ui/section/References";
import Location from "@/app/[locale]/component/ui/section/Location";
import ImageGallery from "@/app/[locale]/component/ui/block/ImageGallery";

const gallery1Images = [
    "/image/client/landing/gallery_1.png",
    "/image/client/landing/gallery_2.png",
    "/image/client/landing/gallery_3.png"
]

const gallery2Images = [
    "/image/client/landing/gallery_4.png",
    "/image/client/landing/gallery_5.png",
    "/image/client/landing/gallery_6.png"
]

export default function Home() {

    return (
        <>
            <div className="flex flex-col">
                <Hero />
                <Intro />
                <References />
                <Project />
                <ImageGallery images={gallery1Images} />
                <Location />
                <div className="hidden md:block">
                    <ImageGallery images={gallery2Images} />
                </div>
            </div>
        </>
    );
}
