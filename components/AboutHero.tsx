"use client";

import * as React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { BentoGridShowcase } from "@/components/ui/bento-product-features";
import { Code, Users, TrendingUp, Zap, Target, Cpu, Rocket } from "lucide-react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const FullCycleCard = () => (
    <Card className="flex h-full flex-col bg-stone-900 border-stone-800">
        <CardHeader>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                <Rocket className="h-6 w-6" />
            </div>
            <CardTitle className="text-white">Full-Cycle Innovation</CardTitle>
            <CardDescription className="text-stone-400">
                From initial concept to global scale. We handle every stage of the digital product lifecycle with precision and expertise, ensuring your vision becomes a market-leading reality.
            </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
            <div className="rounded-lg bg-stone-800 p-4 border border-stone-700">
                <div className="flex items-center gap-3 mb-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-stone-300">Strategy & Design</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-stone-300">Development</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-stone-300">Deployment & Scale</span>
                </div>
            </div>
        </CardContent>
    </Card>
);

const UserCard = () => (
    <Card className="h-full bg-stone-900 border-stone-800">
        <CardContent className="flex h-full flex-col justify-between p-6">
            <div>
                <CardTitle className="text-base font-medium text-white">
                    Expert Engineers
                </CardTitle>
                <CardDescription className="text-stone-400">Top 1% Talent</CardDescription>
            </div>
            <div className="flex -space-x-4 overflow-hidden pt-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full bg-stone-800 border-2 border-stone-900 flex items-center justify-center text-stone-500">
                        <Users className="h-5 w-5" />
                    </div>
                ))}
                <div className="h-10 w-10 rounded-full bg-stone-800 border-2 border-stone-900 flex items-center justify-center text-stone-500 text-xs font-bold">
                    +47
                </div>
            </div>
        </CardContent>
    </Card>
);

const PrecisionCard = () => (
    <Card className="h-full bg-stone-900 border-stone-800">
        <CardContent className="flex h-full flex-col justify-between p-6">
            <div className="flex items-start justify-between">
                <div>
                    <CardTitle className="text-base font-medium text-white">Performance</CardTitle>
                    <CardDescription className="text-stone-400">Optimization Score</CardDescription>
                </div>
                <Target className="h-5 w-5 text-green-500" />
            </div>
            <div className="pt-4">
                <span className="text-5xl font-bold text-white">99%</span>
            </div>
            <div className="flex justify-between text-xs text-stone-500 pt-2">
                <span>Lighthouse Score</span>
                <span>SEO Optimized</span>
            </div>
        </CardContent>
    </Card>
);

const StatisticCard = () => (
    <Card className="relative h-full w-full overflow-hidden bg-stone-900 border-stone-800">
        {/* Dotted background */}
        <div
            className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "16px 16px",
            }}
        />
        <CardContent className="relative z-10 flex h-full items-center justify-center p-6 text-center">
            <div>
                <span className="text-6xl font-bold text-white block">85+</span>
                <span className="text-sm text-stone-400">Projects Delivered</span>
            </div>
        </CardContent>
    </Card>
);

const SpeedCard = () => (
    <Card className="h-full bg-stone-900 border-stone-800">
        <CardContent className="flex h-full flex-col justify-end p-6">
            <div className="mb-4">
                <Zap className="h-8 w-8 text-yellow-500" />
            </div>
            <CardTitle className="text-base font-medium text-white">
                Rapid Delivery
            </CardTitle>
            <CardDescription className="text-stone-400">
                Agile methodologies that cut time-to-market in half without compromising quality.
            </CardDescription>
        </CardContent>
    </Card>
);

const TechStackCard = () => (
    <Card className="h-full bg-stone-900 border-stone-800">
        <CardContent className="flex h-full flex-wrap items-center justify-between gap-4 p-6">
            <div>
                <CardTitle className="text-base font-medium text-white">Modern Tech Stack</CardTitle>
                <CardDescription className="text-stone-400">
                    Built with the latest frameworks.
                </CardDescription>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-stone-700 bg-stone-800 text-stone-300">
                    <Code className="h-4 w-4" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-stone-700 bg-stone-800 text-stone-300">
                    <Cpu className="h-4 w-4" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-stone-700 bg-stone-800 text-stone-300">
                    <TrendingUp className="h-4 w-4" />
                </div>
            </div>
        </CardContent>
    </Card>
);

export default function AboutHero() {
    return (
        <div className="w-full">
            <div className="mb-2 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2">
                    About
                </h1>
                <div className="h-40 flex items-center justify-center w-full">
                    <TextHoverEffect text="DIGINEOM" />
                </div>
                <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto -mt-4">
                    We are a strategic digital innovation partner. We help ambitious companies
                    transform using the latest in design and technology.
                </p>
            </div>

            <BentoGridShowcase
                integration={<FullCycleCard />}
                trackers={<UserCard />}
                statistic={<StatisticCard />}
                focus={<PrecisionCard />}
                productivity={<SpeedCard />}
                shortcuts={<TechStackCard />}
            />
        </div>
    );
}
