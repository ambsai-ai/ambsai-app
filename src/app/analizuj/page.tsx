"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Analizuj() {

  const router = useRouter();

  const [car, setCar] = useState({
    marka: "",
    model: "",
    silnik: "",
    rok: "",
    przebieg: "",
  });


  function generateReport() {

    localStorage.setItem(
      "ambsai-car",
      JSON.stringify(car)
    );

    router.push("/raport");

  }


  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">

      <div className="mx-auto max-w-3xl">

        <h1 className="text-5xl font-black">
          AMB<span className="text-orange-500">SAI</span>
        </h1>


        <h2 className="mt-10 text-4xl font-bold">
          🚗 Analiza pojazdu AI
        </h2>


        <p className="mt-4 text-gray-400">
          Podaj dane samochodu i otrzymaj pełny raport kosztów,
          awarii oraz opłacalności zakupu.
        </p>



        <div className="mt-10 space-y-5">


          <input
            className="w-full rounded-xl bg-zinc-900 p-5"
            placeholder="Marka np. BMW"
            onChange={(e)=>setCar({...car, marka:e.target.value})}
          />


          <input
            className="w-full rounded-xl bg-zinc-900 p-5"
            placeholder="Model np. 330i G20"
            onChange={(e)=>setCar({...car, model:e.target.value})}
          />


          <input
            className="w-full rounded-xl bg-zinc-900 p-5"
            placeholder="Silnik np. B48 2.0 Turbo"
            onChange={(e)=>setCar({...car, silnik:e.target.value})}
          />


          <input
            className="w-full rounded-xl bg-zinc-900 p-5"
            placeholder="Rok produkcji"
            onChange={(e)=>setCar({...car, rok:e.target.value})}
          />


          <input
            className="w-full rounded-xl bg-zinc-900 p-5"
            placeholder="Przebieg np. 150000 km"
            onChange={(e)=>setCar({...car, przebieg:e.target.value})}
          />


          <button
            onClick={generateReport}
            className="w-full rounded-xl bg-orange-500 py-5 text-xl font-bold text-black hover:bg-orange-400"
          >
            GENERUJ RAPORT AI 🤖
          </button>


        </div>

      </div>

    </main>
  );
}