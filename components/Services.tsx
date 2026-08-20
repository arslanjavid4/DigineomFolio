"use client";

import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Code, Palette, Smartphone, Database, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Code className="h-4 w-4" />,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Scalable, fast, and secure solutions.",
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    icon: <Palette className="h-4 w-4" />,
    title: "UI/UX Design",
    description:
      "User-centered design that combines aesthetics with functionality. We create intuitive interfaces that drive engagement.",
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  },
  {
    icon: <Smartphone className="h-4 w-4" />,
    title: "Mobile Development",
    description:
      "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter for maximum reach.",
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
  },
  {
    icon: <Database className="h-4 w-4" />,
    title: "Backend Development",
    description:
      "Robust server-side solutions with RESTful APIs, microservices architecture, and cloud-native applications.",
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
  },
  {
    icon: <Cloud className="h-4 w-4" />,
    title: "Cloud Solutions",
    description:
      "AWS, Azure, and GCP expertise. We help you migrate, scale, and optimize your infrastructure in the cloud.",
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid gap-6 border-t pt-6 md:grid-cols-2"
        >
          <p className="eyebrow text-[#1863dc]">Capabilities / 01—05</p>
          <h2 className="display text-5xl md:text-7xl">
            From first thought to final product.
          </h2>
        </motion.div>
        <div>
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group grid gap-5 border-t py-7 md:grid-cols-[90px_1fr_1fr] md:items-start md:py-10"
            >
              <span className="font-mono text-xs text-[#1863dc]">0{index + 1}</span>
              <h3 className="text-3xl font-semibold tracking-[-0.045em] md:text-5xl">{service.title}</h3>
              <p className="max-w-lg text-base leading-relaxed text-neutral-600 md:text-lg">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
