import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchBox from "@/components/SearchBox";
import HowItWorks from "@/components/HowItWorks";
import AIDemo from "@/components/AIDemo";
import AIScore from "@/components/AIScore";
import CarSummary from "@/components/CarSummary";
import CommonFailures from "@/components/CommonFailures";
import MaintenanceCosts from "@/components/MaintenanceCosts";
import FinalDecision from "@/components/FinalDecision";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <SearchBox />
      <HowItWorks />
      <AIDemo />
      <AIScore />
      <CarSummary />
      <CommonFailures />
      <MaintenanceCosts />
      <FinalDecision />
    </main>
  );
}