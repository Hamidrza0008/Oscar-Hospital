"use client";
import { motion } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  Bone,
  Baby,
  Flower2,
  Siren,
  ArrowUpRight,
} from "lucide-react";
const departments = [
  {
    icon: Stethoscope,
    name: "General Medicine",
    desc: "Comprehensive primary care for all age groups.",
  },
  {
    icon: HeartPulse,
    name: "Cardiology",
    desc: "Heart screening, diagnostics and interventional care.",
  },
  {
    icon: Bone,
    name: "Orthopedics",
    desc: "Bone, joint and spine treatments by senior specialists.",
  },
  {
    icon: Baby,
    name: "Pediatrics",
    desc: "Compassionate child healthcare from newborn to teen.",
  },
  {
    icon: Flower2,
    name: "Gynecology",
    desc: "Women's wellness, maternity and reproductive care.",
  },
  {
    icon: Siren,
    name: "Emergency Care",
    desc: "24/7 critical response with rapid triage and ICU.",
    highlight: true,
  },
];
export default function Departments() {
  return (
    <section id="departments" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F4FBFF] border border-[#cfe7ff] px-4 py-1.5 text-xs font-semibold text-[#0066FF]">
              Medical Departments
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Specialised care across every{" "}
              <span className="text-oscar-gradient">department.</span>
            </h2>
          </motion.div>
          <a
            href="#appointment"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-[#0066FF] hover:gap-3 transition-all"
          >
            Consult a specialist <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {departments.map(({ icon: Icon, name, desc, highlight }, i) => (
            <motion.a
              key={name}
              href="#appointment"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-3xl p-7 overflow-hidden border transition-all ${
                highlight
                  ? "bg-oscar-gradient text-white border-transparent shadow-blue"
                  : "bg-white border-slate-100 hover:border-[#cfe7ff] hover:shadow-blue"
              }`}
            >
              <div
                className={`h-14 w-14 rounded-2xl grid place-items-center ${
                  highlight
                    ? "bg-white/20 text-white"
                    : "bg-[#F4FBFF] text-[#0066FF] group-hover:bg-oscar-gradient group-hover:text-white"
                } transition-colors`}
              >
                <Icon className="h-7 w-7" />
              </div>
              <h3
                className={`mt-6 text-xl font-bold ${
                  highlight ? "text-white" : "text-slate-900"
                }`}
              >
                {name}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  highlight ? "text-white/85" : "text-slate-600"
                }`}
              >
                {desc}
              </p>
              <div
                className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
                  highlight ? "text-[#00FFB2]" : "text-[#0066FF]"
                }`}
              >
                Learn more{" "}
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              {highlight && (
                <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-[#00FFB2] text-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-900 animate-pulse" />
                  24/7
                </span>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}