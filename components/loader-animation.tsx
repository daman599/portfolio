"use client";

import Lottie from "lottie-react";
import movingBoatAnimation from "@/moana.json";
import { motion, AnimatePresence } from "motion/react";
import FlipFadeText from "./ui/flip-fade-text";

export const LoaderAnimation = () => {
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, filter: "blur(2px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ ease: "easeInOut", duration: 1.5 }}
                exit={{ opacity: 0, filter: "blur(2px)" }}
                className="w-full max-w-3xl mx-auto flex gap-3 flex-col items-center justify-center min-h-screen">
                <Lottie animationData={movingBoatAnimation} />

                <FlipFadeText />
            </motion.div>
        </AnimatePresence >
    );
}