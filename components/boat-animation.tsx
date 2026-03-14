"use client";

import Lottie from "lottie-react";
import movingBoatAnimation from "@/moana.json";
import { motion, AnimatePresence } from "motion/react";

export const BoatAnimation = () => {
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, filter: "blur(2px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
                exit={{ opacity: 0, filter: "blur(2px)" }}
                className="w-full max-w-3xl mx-auto flex gap-3 ">
                <Lottie animationData={movingBoatAnimation} />

            </motion.div>
        </AnimatePresence >
    );
}