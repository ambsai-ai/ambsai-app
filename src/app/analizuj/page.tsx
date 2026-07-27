"use client";

import { useState } from "react";
import AnalysisButton from "@/components/AnalysisButton";

export default function Analizuj() {

  const [carUrl, setCarUrl] = useState("");

  return (
    <main className="min-h-screen bg-black text-white px-6">

      <div className="max-w-3xl mx-auto pt-24">

        <h1 className="text-5xl font-bold text-center">
          Analiza auta przez{" "}
          <span className="text-orange-500">
            AI
          </span>
        </h1>


        <p className="text-gray-400 text-center mt-6 text-lg">
          Wklej link do ogłoszenia, a AMBSAI przygotuje raport samochodu.
        </p>


        <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <label className="text-gray-300">
            Link do ogłoszenia
          </label>


          <input
            value={carUrl}
            onChange={(e) => setCarUrl(e.target.value)}
            className="mt-3 w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
            placeholder="np. otomoto.pl/oferta/..."
          />


          <AnalysisButton carUrl={carUrl} />

        </div>


      </div>

    </main>
  );
}