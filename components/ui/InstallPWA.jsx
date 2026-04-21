"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

export default function InstallPWA() {
  const [prompt, setPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!prompt) return;

    prompt.prompt();
    await prompt.userChoice;
    setPrompt(null);
  };

  if (!prompt) return null;

  return (
    <button
      onClick={handleInstall}
      className="
        flex items-center justify-center gap-2
        px-3 md:px-4 py-2
        rounded-xl
        bg-brand-900 text-white
        text-sm font-semibold
        shadow-sm hover:shadow-md
        transition
      "
    >
      <Download size={16} />

      <span className="hidden md:flex">
        Install App
      </span>
    </button>
  );
}