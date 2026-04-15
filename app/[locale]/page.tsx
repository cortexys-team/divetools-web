import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import AppShowcase from "@/components/AppShowcase";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-ocean-deep min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <Features />
      <Screenshots />
      <AppShowcase />
      <Footer />
    </main>
  );
}
