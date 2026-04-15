import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Divetools — Apple Watch Ultra Dive Computer",
  description:
    "Professional dive computer for Apple Watch Ultra. Bühlmann ZHL-16C decompression, real-time depth sensor, gas management, and safety alerts.",
  openGraph: {
    title: "Divetools — Apple Watch Ultra Dive Computer",
    description: "Professional dive computer for Apple Watch Ultra.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={geist.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
