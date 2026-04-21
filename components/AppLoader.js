"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

export default function AppLoader({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const alreadyLoaded = sessionStorage.getItem("appLoaded");

        if (alreadyLoaded) {
            
            setLoading(false);
            return;
        }

        const timer = setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("appLoaded", "true");
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <SplashScreen />}
            {children}
        </>
    );
}