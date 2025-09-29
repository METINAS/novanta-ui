import React from "react";
import MContainer from "@/app/[locale]/component/layout/MContainer";
import Image from "next/image";

type ImageGalleryProps = {
    images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    return (
        <>
            <MContainer variant="regular" className="py-8 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {images.map((image, i) => (
                        <div key={i}>
                            <Image
                                src={image}
                                alt={image}
                                width={512}
                                height={512}
                            />
                        </div>
                    ))}
                </div>
            </MContainer>
        </>
    )
}

export default ImageGallery;

