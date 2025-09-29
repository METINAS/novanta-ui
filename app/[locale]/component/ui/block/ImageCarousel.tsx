"use client";

import { useEffect, useState } from "react";
import NextImage from "next/image";
import clsx from "clsx";

type CarouselImage = {
    url: string;
    alt: string;
};

type ImageCarouselProps = {
    images: CarouselImage[];
    intervalMs?: number;
    className?: string;
};

const FADE_MS = 800;

const ImageCarousel: React.FC<ImageCarouselProps> = ({
                                                         images,
                                                         intervalMs = 6000,
                                                         className,
                                                     }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!images?.length) return;
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, intervalMs);
        return () => clearInterval(id);
    }, [images, intervalMs]);

    if (!images?.length) return null;

    return (
        <div className={clsx("absolute inset-0 overflow-hidden", className)}>
            {images.map((img, i) => {
                const isActive = i === index;
                return (
                    <div
                        key={img.url + i}
                        className={clsx(
                            "absolute inset-0 transition-opacity",
                            isActive ? "opacity-100" : "opacity-0"
                        )}
                        style={{ transitionDuration: `${FADE_MS}ms` }}
                        aria-hidden={!isActive}
                    >
                        <NextImage
                            src={img.url}
                            alt={img.alt}
                            fill
                            priority={i === 0}
                            className="object-cover object-center"
                            sizes="100vw"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ImageCarousel;