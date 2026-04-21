"use client";

import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="text-3xl font-semibold text-brand-600">
          SmileCare Dental Clinic
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Caring for your smile
        </p>
      </motion.div>
    </motion.div>
  );
}