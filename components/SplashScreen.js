"use client";

import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white animate-fadeOut">

      <div className="text-center">

        <div className="relative w-24 h-24 mx-auto animate-bounceLogo">
          <Image
            src="/images/logo/logo.png"
            alt="Dental Clinic"
            fill
            priority
            sizes="100px"
            className="object-contain drop-shadow-lg"
          />
        </div>
      </div>

    </div>
  );
}