"use client";
import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  Star,
  ShieldPlus,
  ArrowRight,
  Phone,
  HeartPulse,
  Stethoscope,
  Activity,
  Plus,
} from "lucide-react";
const features = [
  { icon: Clock, label: "Open 24 Hours" },
  { icon: MapPin, label: "Kandivali West, Mumbai" },
  { icon: Star, label: "500+ Patient Reviews" },
  { icon: ShieldPlus, label: "Emergency Support" },
];
const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};
export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-30 pb-20 lg:pt-26 lg:pb-32 bg-oscar-soft-gradient overflow-hidden"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#00D4FF]/20 blur-3xl animate-blob" />
        <div
          className="absolute top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#0066FF]/15 blur-3xl animate-blob"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#00FFB2]/15 blur-3xl animate-blob"
          style={{ animationDelay: "6s" }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,102,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div>
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-wide text-[#0066FF]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#00FFB2] shadow-mint" />
            Premium Healthcare Experience
          </motion.div>
          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05]"
          >
            Trusted Healthcare.
            <br />
            <span className="text-oscar-gradient">Available 24/7.</span>
          </motion.h1>
          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed"
          >
            Advanced medical care for every family — delivered by expert
            doctors with compassion, precision, and modern technology.
          </motion.p>
          {/* Feature pills */}
          <motion.ul
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 grid grid-cols-2 gap-3 max-w-lg"
          >
            {features.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 rounded-xl bg-white/70 border border-white px-3.5 py-2.5 text-sm font-medium text-slate-700 backdrop-blur"
              >
                <span className="grid place-items-center h-7 w-7 rounded-lg bg-[#F4FBFF] text-[#0066FF]">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </li>
            ))}
          </motion.ul>
          {/* CTAs */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#appointment"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-oscar-gradient px-7 py-4 text-base font-semibold text-white shadow-blue overflow-hidden"
            >
              <span className="relative z-10">Book Appointment</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 shine opacity-60" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:02228696998"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-[#00FFB2] px-7 py-4 text-base font-semibold text-slate-900 shadow-mint"
            >
              <Phone className="h-4 w-4 text-[#0066FF]" />
              Emergency Contact
            </motion.a>
          </motion.div>
          {/* Trust strip */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-10 flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-white bg-oscar-gradient"
                  style={{ opacity: 1 - i * 0.15 }}
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-1 font-semibold text-slate-900">3.7</span>
              </div>
              <div className="text-slate-500">Rated by 506+ patients</div>
            </div>
          </motion.div>
        </div>
        {/* RIGHT visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative h-[520px] lg:h-[640px]"
        >
          {/* Main hero card */}
          <div className="absolute inset-4 rounded-[2.5rem] bg-oscar-gradient shadow-blue overflow-hidden">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
            {/* Doctor silhouette */}
            <svg
              viewBox="0 0 400 600"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%]"
              fill="none"
            >
              <defs>
                <linearGradient id="coat" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#F4FBFF" />
                </linearGradient>
              </defs>
              {/* Head */}
              <circle cx="200" cy="140" r="62" fill="#fde7d3" />
              {/* Hair */}
              <path d="M138 130 q62 -90 124 0 q-10 -40 -62 -40 q-52 0 -62 40z" fill="#2b2418" />
              {/* Neck */}
              <rect x="184" y="195" width="32" height="30" fill="#fde7d3" />
              {/* Coat */}
              <path
                d="M80 600 L80 320 Q80 240 160 220 L184 240 L216 240 L240 220 Q320 240 320 320 L320 600 Z"
                fill="url(#coat)"
              />
              {/* Coat lapels */}
              <path d="M184 240 L200 360 L216 240 Z" fill="#F4FBFF" />
              <line x1="200" y1="270" x2="200" y2="500" stroke="#cfe7ff" strokeWidth="2" />
              {/* Stethoscope */}
              <path
                d="M165 245 q-25 50 0 90 q25 35 70 35"
                stroke="#0a1628"
                strokeWidth="5"
                fill="none"
              />
              <circle cx="240" cy="375" r="14" fill="#0a1628" />
              <circle cx="240" cy="375" r="6" fill="#00D4FF" />
              {/* Buttons */}
              <circle cx="200" cy="380" r="4" fill="#0066FF" />
              <circle cx="200" cy="430" r="4" fill="#0066FF" />
              {/* Badge */}
              <rect x="252" y="300" width="34" height="46" rx="4" fill="#00FFB2" />
              <rect x="258" y="312" width="22" height="3" fill="#0a1628" />
              <rect x="258" y="320" width="16" height="2" fill="#0a1628" />
            </svg>
            {/* Floating ECG line */}
            <svg
              viewBox="0 0 400 60"
              className="absolute top-10 left-6 right-6"
              fill="none"
            >
              <motion.path
                d="M0 30 L60 30 L75 10 L90 50 L110 20 L130 30 L400 30"
                stroke="#00FFB2"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              />
            </svg>
          </div>
          {/* Floating card: Heart rate */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-2 lg:-left-6 glass rounded-2xl p-4 w-52"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#FFE5EC] grid place-items-center text-rose-500">
                <HeartPulse className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Heart Rate</div>
                <div className="text-lg font-bold text-slate-900">
                  72 <span className="text-xs font-medium text-slate-500">bpm</span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Floating card: Appointment */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-24 -right-2 lg:-right-6 glass rounded-2xl p-4 w-60"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#F4FBFF] grid place-items-center text-[#0066FF]">
                <Stethoscope className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-slate-500">Next Appointment</div>
                <div className="text-sm font-bold text-slate-900">
                  Dr. R. Sharma · 10:30 AM
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider text-[#0066FF] font-bold">
                Confirmed
              </span>
              <span className="h-2 w-2 rounded-full bg-[#00FFB2] shadow-mint" />
            </div>
          </motion.div>
          {/* Floating card: 24/7 badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 left-6 glass rounded-2xl px-4 py-3 flex items-center gap-3"
          >
            <div className="relative h-9 w-9 rounded-xl bg-oscar-gradient grid place-items-center">
              <Plus className="h-4 w-4 text-white" strokeWidth={3} />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                Available
              </div>
              <div className="text-sm font-bold text-slate-900">24 Hours · Daily</div>
            </div>
          </motion.div>
          {/* Floating icon: Activity */}
          <motion.div
            animate={{ rotate: [0, 8, 0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 -right-3 h-14 w-14 rounded-2xl bg-white shadow-blue grid place-items-center"
          >
            <Activity className="h-6 w-6 text-[#0066FF]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
