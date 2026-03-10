import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

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
            <div className="relative">
                <h2 className="text-base md:text-lg lg:text-xl">
                    Projects Across the Digital Ocean</h2>
                <svg
                    className="absolute left-0 bottom-0 top-6 w-16"
                    height="8"
                    viewBox="0 0 200 10"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 10 Q50 10 100 5 T200 10"
                        stroke="var(--accent)"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
            </div>

            <div className="flex flex-col justify-center gap-6 mt-14 ">
                {projects.map((item) => (
                    <div key={item.title} className="flex flex-col md:flex-row gap-4 bg-neutral-100 rounded-xl border border-neutral-200/70 p-4 w-full">
                        <Image
                            src={item.imagePath}
                            alt="project-image"
                            height={200}
                            width={200}
                            className="rounded-lg w-full md:w-48 object-cover"
                        />
                        <div className="flex flex-col md:flex-row items-start justify-between gap-2 w-full mt-2 md:mt-0">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold">{item.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {item.techStack.map((tech) => (
                                        <div key={tech} className="bg-accent/10 text-xs sm:text-sm text-neutral-800 px-2 py-1 rounded-md font-medium">
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-2 md:gap-4 mt-2 md:mt-0">
                                <a href={item.githubLink} target="_blank" className="hover:text-accent text-neutral-500 transition-colors duration-300">
                                    <Github size={20} />
                                </a>
                                <a href={item.liveLink} target="_blank" className="hover:text-accent text-neutral-500 transition-colors duration-300">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}