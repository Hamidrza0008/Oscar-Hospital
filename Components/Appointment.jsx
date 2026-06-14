"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Send } from "lucide-react";
const departments = [
  "General Medicine",
  "Cardiology",
  "Orthopedics",
  "Pediatrics",
  "Gynecology",
  "Emergency Care",
];
export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    message: "",
  });
  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", email: "", department: "", message: "" });
  };
  return (
    <section
      id="appointment"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-oscar-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-[#00FFB2]/25 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-white"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-4 py-1.5 text-xs font-semibold backdrop-blur">
            <Calendar className="h-3.5 w-3.5" />
            Book an Appointment
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Schedule a visit with our specialists today.
          </h2>
          <p className="mt-4 text-white/85 text-lg max-w-md">
            Reserve your slot in under a minute. Our team will confirm your
            appointment shortly.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Confirmed within 30 minutes",
              "Choose from 6+ departments",
              "Free pre-consultation reminder",
              "24/7 emergency line — 022 2869 6998",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-[#00FFB2]" />
                <span className="text-white/90">{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-7 lg:p-9 shadow-blue"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
            <Field
              label="Phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+91 98XXX XXXXX"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@email.com"
              className="sm:col-span-2"
            />
            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-slate-700">
                Department
              </label>
              <select
                name="department"
                value={form.department}
                onChange={handleChange}
                required
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#F4FBFF] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF]"
              >
                <option value="">Select a department</option>
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us briefly about your concern..."
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#F4FBFF] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF] resize-none"
              />
            </div>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-oscar-gradient text-white px-6 py-4 text-base font-semibold shadow-blue relative overflow-hidden"
          >
            <span className="relative z-10">
              {submitted ? "Request Sent ✓" : "Confirm Appointment"}
            </span>
            {!submitted && <Send className="relative z-10 h-4 w-4" />}
            <span className="absolute inset-0 shine opacity-60" />
          </motion.button>
          <p className="mt-3 text-xs text-center text-slate-500">
            By submitting you agree to be contacted by Oscar Hospital.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
function Field({ label, className = "", ...props }) {
  return (
    <div className={className}>
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      <input
        {...props}
        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#F4FBFF] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF]"
      />
    </div>
  );
}
