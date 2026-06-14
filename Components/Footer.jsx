"use client";

import { motion } from "framer-motion";
import { Plus, Phone, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const cols = [
  {
    title: "Hospital",
    links: ["About Us", "Doctors", "Facilities", "Careers"],
  },
  {
    title: "Departments",
    links: [
      "General Medicine",
      "Cardiology",
      "Orthopedics",
      "Pediatrics",
      "Gynecology",
    ],
  },
  {
    title: "Patients",
    links: [
      "Book Appointment",
      "Emergency Care",
      "Insurance",
      "Privacy Policy",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-100 pt-16 pb-8 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[140%] md:w-[120%] rounded-full bg-[#F4FBFF] blur-3xl opacity-70" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 md:col-span-3 lg:col-span-2 flex flex-col items-start"
          >
            <a href="#home" className="flex items-center gap-2.5">
              <div className="relative h-11 w-11 rounded-xl bg-oscar-gradient grid place-items-center shadow-blue">
                <Plus className="h-5 w-5 text-white" strokeWidth={3} />
                <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-[#00FFB2] shadow-mint" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">
                  Oscar Hospital
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#0066FF] font-semibold">
                  Premium Healthcare · Mumbai
                </div>
              </div>
            </a>
            
            <p className="mt-5 text-sm text-slate-600 max-w-md leading-relaxed">
              A multi-speciality hospital combining experienced doctors,
              advanced diagnostics and compassionate care. Open 24/7 in
              Kandivali West.
            </p>
            
            <div className="mt-6 space-y-3 text-sm text-slate-600 w-full">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#0066FF] mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  D & E Wing, Pooja Enclave, 15-22 Ambedkar Road, Kandivali West, Mumbai 400067
                </span>
              </div>
              <a
                href="tel:02228696998"
                className="flex items-center gap-2.5 hover:text-[#0066FF] py-1 transition-colors inline-flex"
              >
                <Phone className="h-4 w-4 text-[#0066FF] shrink-0" /> 
                <span className="font-medium">022 2869 6998</span>
              </a>
              <div className="flex items-center gap-2.5 py-1">
                <Clock className="h-4 w-4 text-[#00b07a] shrink-0" /> 
                <span className="text-[#00b07a] font-medium">Open 24 Hours</span>
              </div>
            </div>
            
            <div className="mt-6 flex items-center gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 grid place-items-center rounded-full border border-slate-200 text-slate-600 hover:bg-oscar-gradient hover:text-white hover:border-transparent transition active:scale-95"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {cols.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="mt-2 sm:mt-0"
            >
              <div className="text-sm font-bold text-slate-900 tracking-wide border-b border-slate-100 pb-2 sm:border-0 sm:pb-0">
                {col.title}
              </div>
              <ul className="mt-4 sm:mt-5 space-y-3.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#0066FF] py-1 block transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div className="order-2 sm:order-1">
            © {new Date().getFullYear()} Oscar Hospital. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 order-1 sm:order-2">
            <a href="#" className="hover:text-[#0066FF] transition-colors py-1">Privacy</a>
            <a href="#" className="hover:text-[#0066FF] transition-colors py-1">Terms</a>
            <a href="#" className="hover:text-[#0066FF] transition-colors py-1">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}