"use client";

import { useEffect, useState } from "react";


type HistoryItem = {

  car?: {

    brand?: string;
    model?: string;
    year?: string | number;
    engine?: string;

  };

  score?: number;

  analyzedAt?: string;

  url?: string;

};



export default function AnalysisHistory() {


  const [history,setHistory] = useState<HistoryItem[]>([]);



  useEffect(()=>{


    const saved = localStorage.getItem(
      "analysisHistory"
    );


    if(saved){

      setHistory(JSON.parse(saved));

    }


  },[]);





  return (

    <section className="px-6 py-16">


      <div className="max-w-6xl mx-auto">


        <h1 className="text-4xl font-bold mb-10">

          🚗 Historia analiz AMBSAI

        </h1>



        {history.length === 0 && (

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-gray-400">

            Nie masz jeszcze żadnych analiz.

          </div>

        )}




        <div className="grid md:grid-cols-3 gap-6">


          {history.map((item,index)=>(


            <div

              key={index}

              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"

            >



              <h2 className="text-xl font-bold">

                {item.car?.brand} {item.car?.model}

              </h2>



              <p className="text-gray-400 mt-2">

                {item.car?.year} • {item.car?.engine}

              </p>



              <div className="mt-5 text-orange-400 text-3xl font-bold">

                {item.score}/100

              </div>



              <p className="text-gray-500 text-sm mt-4">

                {item.analyzedAt
                  ? new Date(item.analyzedAt).toLocaleDateString("pl-PL")
                  : ""
                }

              </p>



            </div>


          ))}


        </div>


      </div>


    </section>

  );


}