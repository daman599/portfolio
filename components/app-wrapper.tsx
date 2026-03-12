"use client";

import React, { useEffect, useState } from "react";
import { LoaderAnimation } from "./loader-animation";

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!loading) return;

        const timer = setTimeout(() => {
            setLoading(false);
        }, 13000 + 400);

        return () => clearTimeout(timer);
    }, [loading]);

    if (loading) return <LoaderAnimation />

    return children;
}