"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeatureCarouselProps {
  features: Feature[];
  className?: string;
}

export default function FeatureCarousel({
  features,
  className,
}: FeatureCarouselProps) {
  return (
    <div className={cn("w-full", className)}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {features.map((feature, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="border-primary-200 bg-gradient-to-br from-white to-primary-50/50">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {feature.icon && (
                        <div className="mb-4 text-primary-600">
                          {feature.icon}
                        </div>
                      )}
                      <h3 className="text-2xl font-bold mb-3 text-primary-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}

