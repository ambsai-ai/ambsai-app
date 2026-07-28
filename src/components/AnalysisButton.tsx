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


      setStatus("🔎 Pobieranie danych ogłoszenia...");



      const response = await fetch("/api/analyze", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          url: carUrl,
        }),

      });



      setStatus("🤖 AI analizuje silnik i ryzyka...");



      const data = await response.json();



      if (!data.success) {

        throw new Error(data.error);

      }



      setStatus("📊 Tworzenie raportu...");



      // zapis aktualnego raportu

      localStorage.setItem(
        "analysis",
        JSON.stringify(data.analysis)
      );



      // zapis historii analiz

      const oldHistory = JSON.parse(
        localStorage.getItem("analysisHistory") || "[]"
      );



      const newHistory = [

        {
          ...data.analysis,
          analyzedAt: new Date().toISOString(),
          url: carUrl,
        },

        ...oldHistory,

      ];



      localStorage.setItem(

        "analysisHistory",

        JSON.stringify(newHistory.slice(0,10))

      );



      setTimeout(() => {

        router.push("/raport");

      },800);



    } catch(error) {


      console.error("ANALYSIS ERROR:", error);


      alert("Nie udało się wykonać analizy AI");


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

          <p>✓ Ocena silnika</p>

          <p>✓ Typowe awarie modelu</p>

          <p>✓ Koszty utrzymania</p>

          <p>✓ Raport końcowy</p>

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