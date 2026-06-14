import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import WhyChooseUs from "@/Components/WhyChooseUs";
import Departments from "@/Components/Departments";
import Facilities from "@/Components/Facilities";
import Doctors from "@/Components/Doctors";
import Testimonials from "@/Components/Testimonials";
import Gallery from "@/Components/Gallery";
import Appointment from "@/Components/Appointment";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import SectionDivider from "@/Components/SectionDivider";
export default function Page() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <Hero />
      <SectionDivider />

      <About />
      <SectionDivider />

      <WhyChooseUs />
      <SectionDivider />

      <Departments />
      <SectionDivider />

      <Facilities />
      <SectionDivider />

      <Doctors />
      <SectionDivider />

      <Testimonials />
      <SectionDivider />

      <Gallery />
      <SectionDivider />

      <Appointment />
      <SectionDivider />

      <Contact />

      <Footer />
    </main>
  );
}