"use client";
import { motion } from "framer-motion";
import { UserCheck, ShieldPlus, Microscope, HeartHandshake } from "lucide-react";
const items = [
  {
    icon: UserCheck,
    title: "Experienced Doctors",
    text: "A multi-disciplinary team of senior consultants with decades of clinical experience.",
  },
  {
    icon: ShieldPlus,
    title: "Advanced Medical Care",
    text: "Evidence-based treatments backed by globally accepted clinical protocols.",
  },
  {
    icon: Microscope,
    title: "Modern Equipment",
    text: "State-of-the-art diagnostic and surgical technology for precision outcomes.",
  },
  {
    icon: HeartHandshake,
    title: "Patient First Approach",
    text: "Compassionate, transparent and personalised care for every individual.",
  },
];
export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-oscar-soft-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#0066FF]">
            Why Choose Us
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Healthcare worth your{" "}
            <span className="text-oscar-gradient">trust.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Four pillars that define the Oscar experience.
          </p>
        </motion.div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-white border border-white p-7 shadow-[0_10px_40px_-15px_rgba(0,102,255,0.15)] hover:shadow-blue transition-shadow"
            >
              <div className="h-14 w-14 rounded-2xl bg-oscar-gradient grid place-items-center text-white shadow-blue">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {text}
              </p>
              <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#00FFB2] opacity-0 group-hover:opacity-100 transition shadow-mint" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}