"use client";
import { motion } from "framer-motion";
import { Building2, Bed, Stethoscope, Scan, Ambulance, Activity } from "lucide-react";

const tiles = [
  { 
    icon: Building2, 
    label: "Reception Lobby", 
    span: "lg:col-span-2 lg:row-span-2", 
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    icon: Bed, 
    label: "Private Rooms", 
    span: "", 
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    icon: Scan, 
    label: "Diagnostic Lab", 
    span: "", 
    // नया वर्किंग लैब इमेज लिंक
    image: "https://cdn.labmanager.com/assets/image/53988/automated-diagnostic-labs-l.webp" 
  },
  { 
    icon: Stethoscope, 
    label: "Consultation", 
    span: "lg:col-span-2", 
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    icon: Ambulance, 
    label: "Ambulance Bay", 
    span: "", 
    // नया वर्किंग एम्बुलेंस इमेज लिंक
    image: "https://sangorgoniomemorialhospital.wordpress.com/wp-content/uploads/2013/05/ambulance-bay-2.jpg?w=1440" 
  },
  { 
    icon: Activity, 
    label: "ICU Wing", 
    span: "", 
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" 
  },
];
export default function Gallery() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F4FBFF] border border-[#cfe7ff] px-4 py-1.5 text-xs font-semibold text-[#0066FF]">
            Hospital Gallery
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            A glimpse inside{" "}
            <span className="text-oscar-gradient">Oscar Hospital.</span>
          </h2>
        </motion.div>

        {/* ग्रिड लेआउट */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-4">
          {tiles.map(({ icon: Icon, label, span, image }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-3xl overflow-hidden bg-slate-100 ${span} group shadow-md`}
            >
              {/* 2. बैकग्राउंड इमेज */}
              <img 
                src={image} 
                alt={label} 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* 3. डार्क ओवरले (Gradient Overlay) - ताकि टेक्स्ट एकदम साफ और रीडेबल दिखे */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

              {/* कंटेंट (आइकन और टेक्स्ट) */}
              <div className="absolute inset-0 flex flex-col justify-between p-5 text-white z-10">
                <Icon className="h-7 w-7 opacity-90 text-[#00D4FF]" />
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-70">
                    Oscar Hospital
                  </div>
                  <div className="text-lg font-bold mt-0.5">{label}</div>
                </div>
              </div>

              {/* बॉटम होवर लाइन */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-[#00FFB2] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}