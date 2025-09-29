
import ImageCarousel from "@/app/[locale]/component/ui/block/ImageCarousel";
import MContainer from "@/app/[locale]/component/layout/MContainer";

const heroImages = [
    { url: "/image/client/landing/hero_1.png", alt: "Exteriér projektu za súmraku" },
    { url: "/image/client/landing/hero_2.png", alt: "Moderná architektúra – denný záber" },
];

const Hero = () => {
    return (
        <section className="relative h-dvh min-h-[520px]">
            <ImageCarousel images={heroImages} intervalMs={6000} />

            <div className="absolute inset-0 bg-black/60" />

            <MContainer variant="regular" className="relative z-10 h-full">
                <div className="flex h-full items-center">
                    <div className="max-w-2xl">
                        <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight">
                            Novanta — moderné bývanie
                        </h1>
                        <p className="mt-4 text-white/90 text-lg">
                            Prémiová lokalita, nadčasová architektúra, komfort bez kompromisov.
                        </p>
                    </div>
                </div>
            </MContainer>
        </section>
    );
};

export default Hero;