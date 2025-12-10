'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ZoomParallaxProps {
    mainImage: string;
}

export function ZoomParallax({ mainImage }: ZoomParallaxProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    // 5 images: Main + 4 placeholders
    // Scales corresponding to indices 0, 1, 2, 3, 4
    const scales = [scale4, scale5, scale6, scale8, scale9];

    const images = [
        {
            src: mainImage,
            alt: "Main project image"
        },
        {
            src: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&q=80",
            alt: "Gallery image 1"
        },
        {
            src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
            alt: "Gallery image 2"
        },
        {
            src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
            alt: "Gallery image 3"
        },
        {
            src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
            alt: "Gallery image 4"
        }
    ];

    return (
        <div ref={container} className="relative h-[300vh] w-full mb-20">
            <div className="sticky top-0 h-screen overflow-hidden bg-[#050505]">
                {images.map((img, index) => {
                    const scale = scales[index];

                    let extraClasses = "";
                    // Positioning logic adapted from reference for 5 items
                    if (index === 1) extraClasses = "[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]";
                    if (index === 2) extraClasses = "[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]";
                    if (index === 3) extraClasses = "[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]";
                    if (index === 4) extraClasses = "[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]";

                    return (
                        <motion.div
                            key={index}
                            style={{ scale }}
                            className={`absolute top-0 flex h-full w-full items-center justify-center ${extraClasses}`}
                        >
                            <div className="relative h-[25vh] w-[25vw]">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
