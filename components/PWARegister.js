"use client";

import { useEffect } from "react";

export default function PWARegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const register = () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => {
          if (process.env.NODE_ENV === "development") {
            console.log("SW registered");
          }
        })
        .catch(() => {
        });
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(register, { timeout: 3000 });
    } else {
      const timer = setTimeout(register, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
}