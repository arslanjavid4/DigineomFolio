'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const teamMembers = [
    {
        name: 'Sarah Johnson',
        role: 'CEO & Founder',
        bio: 'Visionary leader with 15 years in tech. Formerly VP of Engineering at TechGiant.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60',
        funImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&sat=-100', // Using B&W trick for now if no "fun" variant
        social: {
            twitter: '#',
            linkedin: '#',
            github: '#',
        },
    },
    {
        name: 'David Chen',
        role: 'CTO',
        bio: 'Architect behind our core AI. PhD in Machine Learning from Stanford.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60',
        funImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&sat=-100',
        social: {
            twitter: '#',
            linkedin: '#',
            github: '#',
        },
    },
    {
        name: 'Emily Davis',
        role: 'Head of Design',
        bio: 'Award-winning designer obsessed with pixel perfection and user delight.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60',
        funImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&sat=-100',
        social: {
            twitter: '#',
            linkedin: '#',
            github: '#',
        },
    },
    {
        name: 'Michael Wilson',
        role: 'Lead Developer',
        bio: 'Full-stack wizard who turns complex problems into elegant code.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60',
        funImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60&sat=-100',
        social: {
            twitter: '#',
            linkedin: '#',
            github: '#',
        },
    },
    {
        name: 'Sofia Rodriguez',
        role: 'Product Manager',
        bio: 'Bridging the gap between business goals and technical execution.',
        image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?w=800&auto=format&fit=crop&q=60',
        funImage: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?w=800&auto=format&fit=crop&q=60&sat=-100',
        social: {
            twitter: '#',
            linkedin: '#',
            github: '#',
        },
    },
    {
        name: 'James Lee',
        role: 'DevOps Engineer',
        bio: 'Keeping our infrastructure robust, secure, and scalable 24/7.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60',
        funImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&sat=-100',
        social: {
            twitter: '#',
            linkedin: '#',
            github: '#',
        },
    },
];

export default function TeamSection() {
    return (
        <section className="py-24 bg-neutral-900/50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                        Meet the <span className="gradient-text">Minds</span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        The brilliant individuals powering our innovation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TeamCard({ member, index }: { member: any; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative h-80 w-full overflow-hidden">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={clsx(
                        "object-cover transition-opacity duration-500",
                        isHovered ? "opacity-0" : "opacity-100"
                    )}
                />
                <Image
                    src={member.funImage}
                    alt={`${member.name} fun`}
                    fill
                    className={clsx(
                        "object-cover transition-opacity duration-500 absolute inset-0 grayscale",
                        isHovered ? "opacity-100" : "opacity-0"
                    )}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative p-6 -mt-12 z-10">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed border-t border-white/10 pt-4">
                    {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    <a href={member.social.github} className="text-neutral-500 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href={member.social.linkedin} className="text-neutral-500 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-neutral-500 hover:text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
