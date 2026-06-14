"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Menu, X, Phone } from "lucide-react";
const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#departments" },
  { label: "Doctors", href: "#doctors" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled
              ? "glass shadow-blue"
              : "bg-white/40 backdrop-blur-md border border-white/60"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <div className="relative h-10 w-10 rounded-xl bg-oscar-gradient grid place-items-center shadow-blue">
              <Plus className="h-5 w-5 text-white" strokeWidth={3} />
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-[#00FFB2] shadow-mint" />
            </div>
            <div className="leading-tight">
              <div className="text-base font-bold tracking-tight text-slate-900">
                Oscar Hospital
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#0066FF] font-semibold">
                24/7 Care · Mumbai
              </div>
            </div>
          </a>
          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#0066FF] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:02228696998"
              className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-[#0066FF]"
            >
              <Phone className="h-4 w-4" /> 022 2869 6998
            </a>
            <motion.a
              href="#appointment"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center justify-center rounded-full bg-oscar-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-blue overflow-hidden"
            >
              <span className="relative z-10">Book Appointment</span>
              <span className="absolute inset-0 shine opacity-50" />
            </motion.a>
          </div>
          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/60"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass rounded-2xl p-4"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-[#F4FBFF]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="mt-2 block text-center rounded-full bg-oscar-gradient px-5 py-3 text-sm font-semibold text-white"
              >
                Book Appointment
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}