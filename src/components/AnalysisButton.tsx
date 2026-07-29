"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


type Props = {
  carUrl: string;
};


export default function AnalysisButton({ carUrl }: Props) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");



  async function startAnalysis() {


    if (!carUrl.trim()) {

      alert("Wklej najpierw link do ogłoszenia auta");

      return;

    }



    setLoading(true);



    try {


      setStatus("🔎 Analiza ogłoszenia...");



      const response = await fetch("/api/analyze", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          url: carUrl,
        }),

      });




      setStatus("🤖 AI sprawdza auto i ryzyko zakupu...");



      const data = await response.json();



      if (!data.success || !data.analysis) {

        throw new Error(
          data.error || "AI nie zwróciło analizy"
        );

      }



      const analysis = data.analysis;



      setStatus("📊 Tworzenie raportu AMBSAI...");




      // aktualny raport

      localStorage.setItem(
        "analysis",
        JSON.stringify(analysis)
      );




      // link ogłoszenia

      localStorage.setItem(
        "carUrl",
        carUrl
      );





      // historia analiz

      let history = [];


      try {

        history = JSON.parse(
          localStorage.getItem("analysisHistory") || "[]"
        );


      } catch {

        history = [];

      }






      const historyItem = {

        id: crypto.randomUUID(),

        analyzedAt: new Date().toISOString(),

        url: carUrl,


        car: analysis.car || {},


        score:
          analysis.score || 0,



        decision:
          analysis.decision || {

            status: "brak danych",

            reason: ""

          },



        recommendation:
          analysis.recommendation || "",



        sellerQuestions:
          analysis.sellerQuestions || [],



        inspectionChecklist:
          analysis.inspectionChecklist || [],



        negotiationPoints:
          analysis.negotiationPoints || [],



        documentsToCheck:
          analysis.documentsToCheck || [],



        failures:
          analysis.failures || [],



        costs:
          analysis.costs || [],


      };






      const updatedHistory = [

        historyItem,

        ...history,

      ].slice(0,10);






      localStorage.setItem(

        "analysisHistory",

        JSON.stringify(updatedHistory)

      );






      setStatus("✅ Raport gotowy");






      setTimeout(() => {

        router.push("/raport");

      },800);






    } catch(error) {



      console.error(
        "ANALYSIS ERROR:",
        error
      );



      alert(

        error instanceof Error

          ? error.message

          : "Nie udało się wykonać analizy AI"

      );



      setLoading(false);


    }


  }





  if(loading) {


    return (

      <div className="mt-5 bg-black border border-zinc-700 rounded-xl p-6">


        <p className="text-center text-orange-400 font-bold text-lg">

          {status}

        </p>




        <div className="mt-6 text-gray-400 text-sm space-y-2">


          <p>✓ Analiza ogłoszenia</p>

          <p>✓ Ocena historii auta</p>

          <p>✓ Typowe awarie modelu</p>

          <p>✓ Koszty utrzymania</p>

          <p>✓ Pytania do sprzedającego</p>

          <p>✓ Kontrola auta na miejscu</p>

          <p>✓ Negocjacja ceny</p>

          <p>✓ Decyzja KUP / NEGOCJUJ / ODPUŚĆ</p>


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