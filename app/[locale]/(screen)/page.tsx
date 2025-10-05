import Hero from "@/app/[locale]/component/ui/section/Hero";
import Intro from "@/app/[locale]/component/ui/section/Intro";
import Project from "@/app/[locale]/component/ui/section/Project";
import References from "@/app/[locale]/component/ui/section/References";
import Location from "@/app/[locale]/component/ui/section/Location";
import ImageGallery from "@/app/[locale]/component/ui/block/ImageGallery";
import Contact from "@/app/[locale]/component/ui/section/Contact";
import ChooseFlat from "@/app/[locale]/component/ui/section/ChooseFlat";
import Model from "@/app/[locale]/component/ui/section/Model";
import FlatList from "@/app/[locale]/component/ui/section/FlatList";
import Timeline from "@/app/[locale]/component/ui/section/Timeline";

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
            <div className="flex flex-col gap-8">
                <Hero />
                <Intro />
                <References />
                <Project />
                <ImageGallery images={gallery1Images} />
                <Location />

                <div className="relative z-10">
                    <ChooseFlat />
                </div>

                <div className="relative z-0 mt-0 md:mt-[calc(-256px-2rem)] mb-0 md:mb-[calc(-196px-2rem)]">
                    <Model />
                </div>

                <div className="relative z-10">
                    <FlatList />
                </div>

                <Timeline />

                <div className="hidden md:block">
                    <ImageGallery images={gallery2Images} />
                </div>

                <Contact />
            </div>
        </>
    );
}

