import Hero from "@/app/[locale]/component/ui/section/Hero";
import Intro from "@/app/[locale]/component/ui/section/Intro";
import Project from "@/app/[locale]/component/ui/section/Project";
import References from "@/app/[locale]/component/ui/section/References";
import Location from "@/app/[locale]/component/ui/section/Location";

export default function Home() {

    return (
        <>
            <div className="flex flex-col">
                <Hero />
                <Intro />
                <References />
                <Project />
                <Location />
            </div>
        </>
    );
}
