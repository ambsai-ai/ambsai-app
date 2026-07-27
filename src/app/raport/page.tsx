"use client";

import { useEffect, useState } from "react";

import AIScore from "@/components/AIScore";
import CarSummary from "@/components/CarSummary";
import CommonFailures from "@/components/CommonFailures";
import MaintenanceCosts from "@/components/MaintenanceCosts";
import FinalDecision from "@/components/FinalDecision";

export default function Raport() {

  const [carUrl, setCarUrl] = useState("");

  useEffect(() => {
    const savedUrl = localStorage.getItem("carUrl");

    if (savedUrl) {
      setCarUrl(savedUrl);
    }
  }, []);


  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-5xl mx-auto px-6 pt-16">

        <h1 className="text-5xl font-bold text-center">
          Raport{" "}
          <span className="text-orange-500">
            AI
          </span>
        </h1>


        {carUrl && (
          <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

            <p className="text-gray-400 text-sm">
              Analizowane ogłoszenie:
            </p>

            <p className="text-orange-400 break-all mt-2">
              {carUrl}
            </p>

          </div>
        )}

      </section>


      <AIScore />

      <CarSummary />

      <CommonFailures />

      <MaintenanceCosts />

      <FinalDecision />

    </main>
  );
}