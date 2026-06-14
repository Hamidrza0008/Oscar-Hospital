"use client";
import { motion } from "framer-motion";
import { Ambulance, Scan, Building, BedDouble } from "lucide-react";
const facilities = [
  {
    icon: Ambulance,
    title: "Emergency Services",
    text: "Rapid response ambulance and trauma-ready emergency room available 24/7.",
  },
  {
    icon: Scan,
    title: "Diagnostics",
    text: "Digital imaging, pathology, and on-site lab with accurate, fast reports.",
  },
  {
    icon: Building,
    title: "Modern Infrastructure",
    text: "Smart wards, sterile operating theatres and ICU-grade monitoring.",
  },
  {
    icon: BedDouble,
    title: "Patient Care",
    text: "Comfortable rooms, attentive nursing, and family-friendly visitation.",
  },
];
export default function Facilities() {
  return (
    <section id="facilities" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-oscar-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,255,178,0.18),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
            Hospital Facilities
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            World-class infrastructure, built for outcomes.
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Every facility designed around safety, hygiene, and patient comfort.
          </p>
        </motion.div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white/12 backdrop-blur-xl border border-white/25 p-7 text-white hover:bg-white/20 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-white/20 grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-white/85 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
