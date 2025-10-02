'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {referenceCardsEn, referenceCardsSk} from "@/app/[locale]/component/ui/block/ReferenceCardList";
import ReferenceCard from "@/app/[locale]/component/ui/block/ReferenceCard";
import {GoChevronLeft, GoChevronRight} from "react-icons/go";

type CardCarouselProps = {
    locale: string;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ locale }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: false, slidesToScroll: 1 })

    const items = locale === "sk" ? referenceCardsSk : referenceCardsEn;

    const [canPrev, setCanPrev] = useState(false)
    const [canNext, setCanNext] = useState(false)

    const updateButtons = useCallback(() => {
        if (!emblaApi) return
        setCanPrev(emblaApi.canScrollPrev())
        setCanNext(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        updateButtons()
        emblaApi.on('select', updateButtons)
        emblaApi.on('reInit', updateButtons)
    }, [emblaApi, updateButtons])

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    return (
        <div className="w-full px-0 md:px-8 min-h-[580px] lg:min-h-[510px]">
            <div className="relative">

                <div ref={emblaRef} className="overflow-hidden h-auto">
                    <div className="flex touch-pan-y md:cursor-grab md:active:cursor-grabbing">
                        {items.map((card, i) => (
                            <div
                                key={i}
                                className="shrink-0 basis-full md:basis-1/2 lg:basis-1/3 pr-4"
                                aria-roledescription="slide"
                            >
                                <ReferenceCard
                                    key={card.heading}
                                    image={card.image}
                                    heading={card.heading}
                                    points={card.points}
                                    description={card.description}
                                    href={card.href}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {(canPrev || canNext) && (
                    <div className="hidden md:flex pointer-events-none absolute inset-y-0 left-0 right-0 md:left-[-48px] md:right-[-48px] items-center justify-between px-1">
                        {canPrev ? (
                            <button
                                onClick={scrollPrev}
                                aria-label="Previous"
                                className="pointer-events-auto cursor-pointer inline-flex items-center justify-center h-10 w-10 text-white"
                            >
                                <GoChevronLeft className="h-8 w-8" />
                            </button>
                        ) : (
                            <span />
                        )}

                        {canNext ? (
                            <button
                                onClick={scrollNext}
                                aria-label="Next"
                                className="pointer-events-auto cursor-pointer inline-flex items-center justify-center h-10 w-10 text-white"
                            >
                                <GoChevronRight className="h-8 w-8" />
                            </button>
                        ) : (
                            <span />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CardCarousel;