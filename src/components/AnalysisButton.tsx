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

  const startAnalysis = async () => {
    if (!carUrl.trim()) {
      alert("Wklej najpierw link do ogłoszenia auta");
      return;
    }

    setLoading(true);

    let value = 0;

    const interval = setInterval(async () => {
      value += 20;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);


        try {

          const response = await fetch("/api/analyze", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              url: carUrl,
            }),
          });


          const data = await response.json();


          if (data.success) {

            localStorage.setItem(
              "analysis",
              JSON.stringify(data.analysis)
            );

            localStorage.setItem(
              "carUrl",
              carUrl
            );


            router.push("/raport");

          } else {

            alert("Nie udało się przeanalizować auta");
            setLoading(false);

          }


        } catch (error) {

          console.error(error);

          alert("Błąd połączenia z AI");
          setLoading(false);

        }

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
          <p>✓ Generowanie raportu AI</p>

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