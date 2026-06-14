"use client";
import { motion } from "framer-motion";
import { Star, Calendar } from "lucide-react";
const doctors = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Senior Cardiologist",
    exp: "20+ Years",
    rating: 4.9,
    hue: "#0066FF",
  },
  {
    name: "Dr. Priya Mehta",
    role: "Gynecologist",
    exp: "15+ Years",
    rating: 4.8,
    hue: "#00D4FF",
  },
  {
    name: "Dr. Anil Kapoor",
    role: "Orthopedic Surgeon",
    exp: "18+ Years",
    rating: 4.9,
    hue: "#0066FF",
  },
  {
    name: "Dr. Sneha Iyer",
    role: "Pediatrician",
    exp: "12+ Years",
    rating: 4.9,
    hue: "#00D4FF",
  },
];
function Avatar({ hue }) {
  return (
    <svg viewBox="0 0 200 220" className="w-full h-full">
      <defs>
        <linearGradient id={`bg-${hue}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F4FBFF" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect width="200" height="220" fill={`url(#bg-${hue})`} />
      <circle cx="100" cy="90" r="40" fill="#fde7d3" />
      <path d="M60 90 q40 -70 80 0 q-8 -32 -40 -32 q-32 0 -40 32z" fill="#2b2418" />
      <path
        d="M40 220 L40 170 Q40 130 90 122 L100 138 L110 122 Q160 130 160 170 L160 220 Z"
        fill="#ffffff"
        stroke="#cfe7ff"
        strokeWidth="2"
      />
      <path d="M90 122 L100 175 L110 122 Z" fill="#F4FBFF" />
      <path
        d="M82 138 q-15 30 0 55 q15 22 40 22"
        stroke={hue}
        strokeWidth="3"
        fill="none"
      />
      <circle cx="122" cy="215" r="6" fill={hue} />
    </svg>
  );
}
export default function Doctors() {
  return (
    <section id="doctors" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F4FBFF] border border-[#cfe7ff] px-4 py-1.5 text-xs font-semibold text-[#0066FF]">
            Meet Our Doctors
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Specialists you can{" "}
            <span className="text-oscar-gradient">truly rely on.</span>
          </h2>
        </motion.div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-slate-100 bg-white overflow-hidden hover:shadow-blue transition-shadow"
            >
              <div className="relative aspect-square bg-[#F4FBFF] overflow-hidden">
                <Avatar hue={d.hue} />
                <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-900 shadow">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  {d.rating}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-slate-900">{d.name}</h3>
                <p className="text-sm text-[#0066FF] font-medium">{d.role}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>{d.exp} experience</span>
                  <a
                    href="#appointment"
                    className="inline-flex items-center gap-1 font-semibold text-slate-900 group-hover:text-[#0066FF]"
                  >
                    <Calendar className="h-3.5 w-3.5" /> Book
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}