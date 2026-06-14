"use client";
import { motion } from "framer-motion";
import { Award, Users, Calendar, Building2 } from "lucide-react";
const stats = [
  { icon: Calendar, value: "15+", label: "Years of Service" },
  { icon: Users, value: "50k+", label: "Patients Treated" },
  { icon: Award, value: "30+", label: "Specialist Doctors" },
  { icon: Building2, value: "24/7", label: "Emergency Care" },
];
export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] bg-oscar-soft-gradient overflow-hidden shadow-blue">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,212,255,0.25),transparent_60%)]" />
            <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full">
              <rect width="400" height="500" fill="#F4FBFF" />
              {/* Hospital building */}
              <rect x="80" y="180" width="240" height="280" rx="8" fill="#fff" stroke="#cfe7ff" strokeWidth="2" />
              <rect x="180" y="120" width="40" height="80" fill="#0066FF" />
              <rect x="190" y="100" width="20" height="40" fill="#00FFB2" />
              <path d="M180 200 L220 200 L220 220 L210 220 L210 240 L190 240 L190 220 L180 220 Z" fill="#fff" />
              {/* Windows */}
              {[0, 1, 2].map((row) =>
                [0, 1, 2, 3].map((col) => (
                  <rect
                    key={`${row}-${col}`}
                    x={100 + col * 50}
                    y={260 + row * 50}
                    width="35"
                    height="35"
                    rx="3"
                    fill={(row + col) % 2 === 0 ? "#00D4FF" : "#F4FBFF"}
                    opacity="0.85"
                  />
                ))
              )}
              {/* Door */}
              <rect x="180" y="410" width="40" height="50" fill="#0066FF" />
              {/* Ground */}
              <rect y="460" width="400" height="40" fill="#F4FBFF" />
            </svg>
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 w-52">
            <div className="text-3xl font-bold text-oscar-gradient">3.7★</div>
            <div className="text-xs text-slate-600 mt-1">
              Rated by 506+ verified patients
            </div>
          </div>
        </motion.div>
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F4FBFF] border border-[#cfe7ff] px-4 py-1.5 text-xs font-semibold text-[#0066FF]">
            About Oscar Hospital
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            A legacy of care, built on trust and{" "}
            <span className="text-oscar-gradient">clinical excellence.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Located in the heart of Kandivali West, Oscar Hospital is a
            multi-speciality healthcare institution combining experienced
            doctors, advanced diagnostics, and a patient-first philosophy.
            Around the clock — every day.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-slate-100 bg-white p-5 hover:shadow-blue transition-shadow"
              >
                <div className="h-10 w-10 rounded-xl bg-[#F4FBFF] text-[#0066FF] grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-3 text-3xl font-bold text-slate-900">
                  {value}
                </div>
                <div className="text-sm text-slate-500">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}