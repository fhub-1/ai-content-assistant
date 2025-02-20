import CTA from "./components/home/CTA";
import Features from "./components/home/Features";
import Hero from "./components/home/Hero";
import SocialProof from "./components/home/SocialProof";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import SubscriptionStatsCard from "./components/stream/subscription-stats-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
    <Navbar />
    <Hero />
    <Features />
    <SocialProof />
    <CTA />
    <Footer />
    {/* <SubscriptionStatsCard /> */}
  </div>
  );
}
