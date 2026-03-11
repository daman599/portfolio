"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

interface projectType {
    title: string,
    imagePath: string,
    liveLink: string,
    githubLink: string,
    techStack: string[]
}

const projects: projectType[] = [
    {
        title: "Shadow - Box, Drop & Text Shadows",
        imagePath: "/shadow-project.png",
        liveLink: "https://shadow-mee.vercel.app",
        githubLink: "https://github.com/daman599/shadow",
        techStack: ["Next.js", "React.js", "TailwindCss", "Motion"]
    },
    {
        title: "Finnova Landing Page",
        imagePath: "/finnova-project.png",
        liveLink: "https://finnova-money.vercel.app",
        githubLink: "https://github.com/daman599/Finnova",
        techStack: ["Next.js", "React.js", "TailwindCss", "Motion"]
    },
]

export default function Projects() {
    return (
        <>
            <motion.div initial={{ opacity: 0, filter: "blur(2px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className="relative">
                <h2 className="text-base">
                    Projects Across the Digital Ocean</h2>
                <svg
                    className="absolute left-0 bottom-0 top-5 w-16"
                    height="8"
                    viewBox="0 0 200 10"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M0 10 Q50 10 100 5 T200 10"
                        stroke="var(--accent)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ delay: 0.5, duration: 0.3, ease: "easeIn" }}
                    />
                </svg>
            </motion.div>

            <div className="flex flex-col justify-center gap-6 mt-10 md:mt-14 ">
                {projects.map((item, index) => (
                    <motion.div initial={{ opacity: 0, filter: "blur(2px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 0.5, ease: "easeIn", delay: 0.3 * index, delayChildren: 0.2 }}
                        key={item.title} className="flex flex-col md:flex-row gap-4 bg-neutral-100 rounded-xl border border-neutral-200/70 p-2 w-full">
                        <Image
                            src={item.imagePath}
                            alt="project-image"
                            height={200}
                            width={200}
                            className="rounded-lg w-full md:w-40 object-cover hover:scale-105 transition-all duration-300"
                        />
                        <div className="flex flex-col md:flex-row items-start justify-between gap-5 w-full mt-2 md:mt-0">
                            <div className="flex flex-col gap-1 md:gap-2">
                                <h3 className="text-base font-semibold">{item.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {item.techStack.map((tech) => (
                                        <div key={tech} className="bg-accent/10 text-xs text-neutral-900 px-2 py-1 rounded-md font-medium">
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-2 md:gap-4 p-1">
                                <a href={item.githubLink} target="_blank" className="hover:text-accent text-neutral-500 transition-colors duration-300">
                                    <Github size={18} />
                                </a>
                                <a href={item.liveLink} target="_blank" className="hover:text-accent text-neutral-500 transition-colors duration-300">
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
}