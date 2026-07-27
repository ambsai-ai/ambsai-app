"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  carUrl: string;
};

export default function AnalysisButton({ carUrl }: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const startAnalysis = () => {
    if (!carUrl.trim()) {
      alert("Wklej najpierw link do ogłoszenia auta");
      return;
    }

    setLoading(true);

    let value = 0;

    const interval = setInterval(() => {
      value += 20;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        localStorage.setItem("carUrl", carUrl);

        setTimeout(() => {
          router.push("/raport");
        }, 500);
      }
    }, 500);
  };


  if (loading) {
    return (
      <div className="mt-5 bg-black border border-zinc-700 rounded-xl p-6">

        <p className="text-center text-orange-400 font-bold text-lg">
          🤖 AI analizuje pojazd...
        </p>

        <div className="mt-5 h-3 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>


        <div className="mt-6 text-gray-400 text-sm space-y-2">
          <p>✓ Sprawdzanie ogłoszenia</p>
          <p>✓ Analiza danych technicznych</p>
          <p>✓ Wyszukiwanie typowych awarii</p>
          <p>✓ Przygotowanie raportu AI</p>
        </div>

      </div>
    );
  }


  return (
    <button
      onClick={startAnalysis}
      className="mt-5 w-full bg-orange-500 hover:bg-orange-600 transition rounded-xl py-4 font-bold"
    >
      🚗 Rozpocznij analizę AI
    </button>
  );
}