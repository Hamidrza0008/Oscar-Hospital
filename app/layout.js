import "./globals.css";
export const metadata = {
  title: "Oscar Hospital — Premium 24/7 Healthcare in Kandivali West, Mumbai",
  description:
    "Oscar Hospital offers trusted 24-hour multi-speciality care in Kandivali West, Mumbai. Expert doctors, advanced diagnostics, emergency services. Book your appointment today.",
  keywords: [
    "Oscar Hospital",
    "Hospital in Kandivali West",
    "Mumbai Hospital",
    "24 hour hospital Mumbai",
    "Emergency care Kandivali",
  ],
  openGraph: {
    title: "Oscar Hospital — Premium 24/7 Healthcare",
    description: "Advanced medical care for every family. Kandivali West, Mumbai.",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}