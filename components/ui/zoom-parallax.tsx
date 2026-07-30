'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ZoomParallaxProps {
    mainImage: string;
    gallery?: string[];
}

export function ZoomParallax({ mainImage, gallery = [] }: ZoomParallaxProps) {
    return (
        <div className="px-5 pb-12 sm:px-8 lg:px-12">
            <div className="container-custom rounded-[22px] bg-[#eeece7] p-3 sm:p-6">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[14px]">
                    <Image src={mainImage} alt="Main project image" fill className="object-cover" priority />
                </div>
            </div>
        </div>
    );
}
