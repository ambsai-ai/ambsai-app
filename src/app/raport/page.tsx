import AIScore from "@/components/AIScore";
import CarSummary from "@/components/CarSummary";
import CommonFailures from "@/components/CommonFailures";
import MaintenanceCosts from "@/components/MaintenanceCosts";
import FinalDecision from "@/components/FinalDecision";

export default function Raport() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <AIScore />
      <CarSummary />
      <CommonFailures />
      <MaintenanceCosts />
      <FinalDecision />
    </main>
  );
}