import { Hero } from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Features from "@/components/sections/Features";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Bonuses } from "@/components/sections/Bonuses";
import Testimonials from "@/components/sections/Testimonials";
import Offer from "@/components/sections/Offer";
import { Guarantee } from "@/components/sections/Guarantee";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import { StickyCTA } from "@/components/ui/StickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 selection:bg-primary/30 relative">
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Features />
      <ProductShowcase />
      <Bonuses />
      <Testimonials />
      <Offer />
      <Guarantee />
      <FAQ />
      <Footer />
      <StickyCTA />
    </main>
  );
}
