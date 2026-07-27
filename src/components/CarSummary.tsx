"use client";

import { useEffect, useState } from "react";

type Analysis = {
  car?: {
    brand?: string;
    model?: string;
    year?: number;
    engine?: string;
    mileage?: string;
  };
  score?: number;
};

export default function CarSummary() {

  const [analysis, setAnalysis] = useState<Analysis | null>(null);


  useEffect(() => {
    const savedAnalysis = localStorage.getItem("analysis");

    if (savedAnalysis) {
      setAnalysis(JSON.parse(savedAnalysis));
    }

  }, []);



  const car = analysis?.car;


  return (
    <section className="px-6 py-16">

      <div className="max-w-5xl mx-auto">


        <h2 className="text-3xl font-bold mb-8">
          🚗 Podsumowanie pojazdu
        </h2>



        <div className="grid md:grid-cols-2 gap-5">



          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <p className="text-gray-400">
              Marka i model
            </p>

            <p className="text-2xl font-bold mt-2">
              {car?.brand} {car?.model}
            </p>

          </div>



          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <p className="text-gray-400">
              Rok produkcji
            </p>

            <p className="text-2xl font-bold mt-2">
              {car?.year}
            </p>

          </div>



          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <p className="text-gray-400">
              Silnik
            </p>

            <p className="text-2xl font-bold mt-2">
              {car?.engine}
            </p>

          </div>



          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <p className="text-gray-400">
              Przebieg
            </p>

            <p className="text-2xl font-bold mt-2">
              {car?.mileage}
            </p>

          </div>



          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <p className="text-gray-400">
              Szacowana cena
            </p>

            <p className="text-2xl font-bold mt-2 text-orange-400">
              79 900 zł
            </p>

          </div>



          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <p className="text-gray-400">
              Ocena AI
            </p>

            <p className="text-2xl font-bold mt-2 text-green-400">
              {analysis?.score} / 100
            </p>

          </div>


        </div>


      </div>

    </section>
  );
}