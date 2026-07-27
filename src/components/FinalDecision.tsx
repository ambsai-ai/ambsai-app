"use client";

import { useEffect, useState } from "react";


type Analysis = {
  score?: number;
  recommendation?: string;
  risks?: string[];
  pros?: string[];
  cons?: string[];
};



export default function FinalDecision() {

  const [analysis, setAnalysis] = useState<Analysis | null>(null);



  useEffect(() => {

    const savedAnalysis = localStorage.getItem("analysis");

    if (savedAnalysis) {
      setAnalysis(JSON.parse(savedAnalysis));
    }

  }, []);



  const score = analysis?.score ?? 0;


  let decision = "ODRADZAM ZAKUP";
  let emoji = "🔴";
  let color = "text-red-400";
  let border = "border-red-500/30";


  if (score >= 80) {

    decision = "WARTO SPRAWDZIĆ";
    emoji = "🟢";
    color = "text-green-400";
    border = "border-green-500/30";

  } else if (score >= 60) {

    decision = "SPRAWDZIĆ DOKŁADNIE";
    emoji = "🟡";
    color = "text-yellow-400";
    border = "border-yellow-500/30";

  }



  const pros = analysis?.pros ?? [
    "Popularny model",
    "Dostępność części",
    "Możliwość kontroli przed zakupem"
  ];


  const cons = analysis?.cons ?? [
    "Historia napraw",
    "Realny przebieg",
    "Stan techniczny"
  ];


  const risks = analysis?.risks ?? [
    "Historia serwisowa",
    "Ukryte usterki",
    "Koszty napraw"
  ];



  return (
    <section className="px-6 py-16">

      <div className="max-w-5xl mx-auto">


        <div className={`bg-zinc-900 border ${border} rounded-3xl p-8`}>



          <h2 className="text-3xl font-bold mb-8">
            🤖 Decyzja końcowa AI
          </h2>




          <div className="text-center">


            <div className="text-6xl mb-5">
              {emoji}
            </div>



            <h3 className={`text-4xl font-bold ${color}`}>
              {decision}
            </h3>



            <p className="text-gray-400 text-lg mt-5 max-w-3xl mx-auto">
              {analysis?.recommendation ??
                "AMBSAI przeanalizował dostępne dane pojazdu i przygotował rekomendację zakupu."
              }
            </p>



          </div>





          <div className="grid md:grid-cols-3 gap-5 mt-10">



            <div className="bg-black rounded-2xl p-6">

              <p className="text-green-400 font-bold text-lg">
                ✅ Zalety
              </p>


              <ul className="text-gray-400 mt-4 space-y-2">

                {pros.slice(0, 3).map((item) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}

              </ul>


            </div>





            <div className="bg-black rounded-2xl p-6">


              <p className="text-yellow-400 font-bold text-lg">
                ⚠ Ryzyko
              </p>


              <ul className="text-gray-400 mt-4 space-y-2">

                {risks.slice(0, 3).map((item) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}

              </ul>


            </div>





            <div className="bg-black rounded-2xl p-6">


              <p className="text-orange-400 font-bold text-lg">
                🔧 Wady / uwagi
              </p>


              <ul className="text-gray-400 mt-4 space-y-2">

                {cons.slice(0, 3).map((item) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}

              </ul>


            </div>



          </div>





          <div className="mt-10 bg-black rounded-2xl p-6 text-center">


            <p className="text-gray-400">
              Finalna rekomendacja AMBSAI
            </p>



            <p className={`text-3xl font-bold mt-3 ${color}`}>
              {score}/100 punktów
            </p>


          </div>




        </div>


      </div>


    </section>
  );
}