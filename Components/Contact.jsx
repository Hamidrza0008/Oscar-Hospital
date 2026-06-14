"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";
export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F4FBFF] border border-[#cfe7ff] px-4 py-1.5 text-xs font-semibold text-[#0066FF]">
            Visit Us
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Find Oscar Hospital in{" "}
            <span className="text-oscar-gradient">Kandivali West.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Open 24 hours, every day of the year. Walk in or call us anytime.
          </p>
          <div className="mt-10 space-y-4">
            <InfoRow
              icon={MapPin}
              title="Hospital Address"
              text="D & E Wing, Pooja Enclave, 15-22 Ambedkar Road, Kandivali West, Mumbai, Maharashtra 400067"
            />
            <InfoRow
              icon={Phone}
              title="Phone"
              text="022 2869 6998"
              href="tel:02228696998"
            />
            <InfoRow
              icon={Clock}
              title="Hours"
              text="Open 24 Hours · 7 days a week"
              accent
            />
            <InfoRow
              icon={Mail}
              title="Email"
              text="care@oscarhospital.in"
              href="mailto:care@oscarhospital.in"
            />
          </div>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://www.google.com/maps/search/?api=1&query=Oscar+Hospital+Kandivali+West+Mumbai"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-oscar-gradient text-white px-6 py-3.5 text-sm font-semibold shadow-blue"
          >
            <Navigation className="h-4 w-4" /> Get Directions
          </motion.a>
        </motion.div>
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] overflow-hidden border border-slate-100 shadow-blue min-h-[460px] bg-oscar-soft-gradient"
        >
          {/* Stylised map */}
          <svg
            viewBox="0 0 600 500"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="600" height="500" fill="#F4FBFF" />
            {/* Roads */}
            <path d="M0 200 L600 240" stroke="#cfe7ff" strokeWidth="22" />
            <path d="M0 200 L600 240" stroke="#fff" strokeWidth="2" strokeDasharray="10 8" />
            <path d="M280 0 L320 500" stroke="#cfe7ff" strokeWidth="18" />
            <path d="M280 0 L320 500" stroke="#fff" strokeWidth="2" strokeDasharray="8 6" />
            <path d="M0 380 L600 400" stroke="#dfeefe" strokeWidth="14" />
            <path d="M120 0 L100 500" stroke="#e8f3ff" strokeWidth="10" />
            <path d="M460 0 L500 500" stroke="#e8f3ff" strokeWidth="10" />
            {/* Blocks */}
            {[
              [50, 60, 60, 60],
              [180, 50, 70, 50],
              [360, 60, 70, 40],
              [520, 70, 50, 60],
              [40, 270, 80, 50],
              [180, 280, 70, 40],
              [380, 290, 80, 50],
              [520, 280, 50, 50],
              [60, 430, 60, 40],
              [200, 440, 60, 30],
              [380, 440, 80, 30],
            ].map(([x, y, w, h], i) => (
              <rect
                key={i}
                x={x}
                y={y}
                width={w}
                height={h}
                rx="6"
                fill="#fff"
                stroke="#cfe7ff"
              />
            ))}
            {/* Greenery */}
            <circle cx="80" cy="110" r="14" fill="#bff0d8" />
            <circle cx="550" cy="160" r="18" fill="#bff0d8" />
            <circle cx="430" cy="200" r="12" fill="#bff0d8" />
          </svg>
          {/* Pin */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#0066FF]/30 blur-xl animate-pulse" />
              <div className="relative h-12 w-12 rounded-full bg-oscar-gradient grid place-items-center shadow-blue">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap glass rounded-full px-3 py-1 text-xs font-semibold text-slate-900">
                Oscar Hospital
              </div>
            </div>
          </motion.div>
          {/* Address overlay */}
          <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4">
            <div className="text-xs uppercase tracking-wider text-[#0066FF] font-bold">
              Address
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-900">
              D & E Wing, Pooja Enclave, Ambedkar Road
            </div>
            <div className="text-xs text-slate-600">
              Kandivali West, Mumbai 400067
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function InfoRow({ icon: Icon, title, text, href, accent }) {
  const inner = (
    <div className="flex items-start gap-4">
      <div
        className={`h-12 w-12 rounded-2xl grid place-items-center shrink-0 ${
          accent
            ? "bg-[#E6FFF6] text-[#00b07a]"
            : "bg-[#F4FBFF] text-[#0066FF]"
        }`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-bold text-slate-900">{title}</div>
        <div className="text-sm text-slate-600 mt-0.5">{text}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-90">
      {inner}
    </a>
  ) : (
    inner
  );
}
