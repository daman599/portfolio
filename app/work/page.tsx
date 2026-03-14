"use client";

import { figmaDesigns, componentVideos } from "@/lib/creative-work-data";
import Image from "next/image";
import { motion, stagger, Variants } from "motion/react";

const parentVariant: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: stagger(0.10, { ease: "easeIn" })
        }
    },
}

const childVariant: Variants = {
    hidden: { opacity: 0, filter: "blur(1px)", y: 20 },
    show: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeIn"
        }
    },
}

export default function Work() {
    return (
        <>
            <h2 className="text-base italic text-shadow text-shadow-[0_-1px_0_rgba(255,255,255,0.8),0_3px_6px_rgba(0,0,0,0.4)]">
                Some of my creative work......</h2>
            <div className="my-14 md:my-20">
                <motion.h2 initial={{ opacity: 0, filter: "blur(2px)", y: 20 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="text-lg font-semibold">Components</motion.h2>

                <motion.p initial={{ opacity: 0, filter: "blur(2px)", y: 16 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="text-base text-neutral-600">Built some ui components while learning motion and tailwindcss.</motion.p>

                <motion.div variants={parentVariant}
                    initial={"hidden"}
                    whileInView={"show"}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
                    {componentVideos.map((video) => (
                        <motion.video variants={childVariant} key={video.path} src={video.path}
                            autoPlay muted loop height={300} width={300}
                            className="rounded-xl aspect-video border border-neutral-200"

                        />
                    ))}
                </motion.div>
            </div >

            <div className="my-16 md:my-24">
                <motion.h2 initial={{ opacity: 0, filter: "blur(2px)", y: 16 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="text-lg font-semibold">Designs</motion.h2>

                <motion.p initial={{ opacity: 0, filter: "blur(2px)", y: 16 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="text-base text-neutral-600">Here are some hero sections which i have designed in figma.</motion.p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5 border
                 border-neutral-200 rounded-xl bg-accent/5 p-3">
                    {figmaDesigns.map((design, indx) => (
                        <motion.div initial={{ opacity: 0, filter: "blur(3px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 * indx }}
                            viewport={{ once: true }}
                            key={indx}
                        >
                            <Image src={design.path} alt={"design"} height={300} width={300} className="rounded-xl" key={design.path} />
                        </motion.div>
                    ))}
                </div>
            </div >
        </>
    );
}