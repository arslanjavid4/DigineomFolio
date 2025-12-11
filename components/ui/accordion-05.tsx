"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const items = [
    {
        id: "1",
        title: "Discovery Phase",
        content:
            "We begin by deep-diving into your business goals, target audience, and market landscape. This foundational step ensures our strategy aligns perfectly with your vision.",
    },
    {
        id: "2",
        title: "Strategic Planning",
        content:
            "Our team crafts a comprehensive roadmap, defining technical architecture, design direction, and project milestones to ensure a smooth execution.",
    },
    {
        id: "3",
        title: "UX/UI Design",
        content:
            "We create intuitive, high-fidelity designs that prioritize user experience. Our focus is on engagement, accessibility, and brand consistency across all touchpoints.",
    },
    {
        id: "4",
        title: "Agile Development",
        content:
            "Using modern frameworks and iterative cycles, we build robust, scalable solutions. Regular updates and feedback loops keep you involved throughout the process.",
    },
    {
        id: "5",
        title: "Quality Assurance",
        content:
            "Rigorous testing across devices and browsers guarantees a bug-free, optimized launch. We ensure security, performance, and reliability are top-notch.",
    },
    {
        id: "6",
        title: "Launch & Growth",
        content:
            "We manage the deployment process and provide post-launch support. Our partnership continues as we help you scale and evolve your digital product.",
    },
];

export default function Accordion05() {
    return (
        <div className="w-full max-w-3xl mx-auto">
            <Accordion type="single" defaultValue="1" collapsible className="w-full">
                {items.map((item) => (
                    <AccordionItem value={item.id} key={item.id} className="last:border-b border-white/10">
                        <AccordionTrigger className="text-left pl-6 md:pl-14 overflow-hidden text-neutral-400 duration-200 hover:no-underline cursor-pointer -space-y-6 data-[state=open]:space-y-0 data-[state=open]:text-white [&>svg]:hidden">
                            <div className="flex flex-1 items-start gap-4">
                                <p className="text-xs font-mono">{item.id}</p>
                                <h1
                                    className={`uppercase relative text-center text-3xl md:text-5xl font-light tracking-tight`}
                                >
                                    {item.title}
                                </h1>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent className="text-neutral-400 pb-6 pl-6 md:px-20 text-lg leading-relaxed">
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
