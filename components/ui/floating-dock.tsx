"use client";
/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "motion/react";

import { dockItemsType } from "@/types/floating-dock-items-type";

import { useRef, useState } from "react";

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
}: {
    items: dockItemsType[];
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({
    items,
    className,
}: {
    items: dockItemsType[];
    className?: string;
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={cn("relative block md:hidden", className)}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="absolute inset-x-0 bottom-full mb-2 right-0 flex flex-col gap-2"
                    >
                        {items.map((item, idx) => {
                            const Wrapper = item.socialLink ? "a" : Link;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: 10,
                                        transition: {
                                            delay: idx * 0.05,
                                        },
                                    }}
                                    transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                                >
                                    <Wrapper
                                        href={item.href}
                                        key={item.title}
                                        {...(item.socialLink ? { target: "_blank", rel: "noopener noreferer" } : {})}
                                        className="flex size-10 items-center justify-center rounded-full bg-secondary/80 p-2.5"
                                    >
                                        {item.icon}
                                    </Wrapper>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/80"
            >
                <IconLayoutNavbarCollapse className="h-5 w-5 " />
            </button>
        </div >
    );
};

const FloatingDockDesktop = ({
    items,
    className,
}: {
    items: dockItemsType[];
    className?: string;
}) => {
    let mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-100 px-4 pb-3 md:flex",
                className,
            )}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({
    mouseX,
    title,
    icon,
    href,
    socialLink
}: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    href: string;
    socialLink: boolean
}) {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

        return val - bounds.x - bounds.width / 2;
    });

    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    let heightTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [20, 40, 20],
    );

    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    let widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);
    const Wrapper = socialLink ? "a" : Link;

    return (
        <Wrapper
            href={href}
            {...(socialLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative flex aspect-square items-center justify-center rounded-full bg-secondary/50"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="absolute -top-10 left-1/2 w-fit rounded-md
                            bg-secondary px-2 py-0.5 text-sm
                            font-medium"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: widthIcon, height: heightIcon }}
                    className="flex items-center justify-center text-foreground"
                >
                    {icon}
                </motion.div>
            </motion.div>
        </Wrapper>
    );
}

