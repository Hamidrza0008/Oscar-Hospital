"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
const reviews = [
  {
    name: "Anjali Verma",
    role: "Patient · Cardiology",
    text: "Excellent treatment and compassionate doctors. The 24/7 emergency response saved my father's life. Truly grateful to the entire Oscar Hospital team.",
    rating: 5,
  },
  {
    name: "Rohit Desai",
    role: "Patient · Orthopedics",
    text: "From diagnosis to post-surgery care, every step felt personalised. Clean facilities, modern equipment, and very supportive nursing staff.",
    rating: 5,
  },
  {
    name: "Meera Pillai",
    role: "Mother · Pediatrics",
    text: "Dr. Iyer and the pediatric team are wonderful with kids. They made my daughter completely comfortable. Highly recommend Oscar Hospital.",
    rating: 4,
  },
];
export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-oscar-soft-gradient relative overflow-hidden">
      <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-[#00D4FF]/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#0066FF]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#0066FF]">
              Patient Reviews
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Loved by{" "}
              <span className="text-oscar-gradient">500+ patients.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 glass rounded-2xl px-5 py-4">
            <div className="text-4xl font-bold text-oscar-gradient">3.7</div>
            <div>
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">506 Google reviews</div>
            </div>
          </div>
        </motion.div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-7 relative"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-[#0066FF]/15" />
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed">
                "{r.text}"
              </p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-slate-200/60">
                <div className="h-11 w-11 rounded-full bg-oscar-gradient grid place-items-center text-white font-bold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{r.name}</div>
                  <div className="text-xs text-slate-500">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}