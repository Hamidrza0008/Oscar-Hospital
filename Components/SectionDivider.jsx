"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative py-8 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#0066FF] to-transparent"
      />

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="h-2 w-2 rounded-full bg-[#0066FF] shadow-[0_0_15px_#0066FF]" />
      </motion.div>
    </div>
  );
}