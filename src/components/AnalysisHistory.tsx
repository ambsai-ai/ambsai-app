"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


type HistoryItem = {

  id?: string;

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


  const router = useRouter();

  const [history, setHistory] = useState<HistoryItem[]>([]);



  useEffect(() => {


    try {

      const saved = localStorage.getItem(
        "analysisHistory"
      );


      if(saved){

        setHistory(
          JSON.parse(saved)
        );

      }


    } catch(error){

      console.error(
        "HISTORY ERROR:",
        error
      );

      setHistory([]);

    }


  }, []);





  function openReport(item: HistoryItem) {


    localStorage.setItem(
      "analysis",
      JSON.stringify(item)
    );


    router.push("/raport");


  }




  function deleteAnalysis(id?: string) {


    const updated = history.filter(
      (item)=>
        item.id !== id
    );


    setHistory(updated);


    localStorage.setItem(
      "analysisHistory",
      JSON.stringify(updated)
    );


  }







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



          {history.map((item)=>(


            <div

              key={
                item.id || crypto.randomUUID()
              }

              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"

            >




              <h2 className="text-xl font-bold">

                {item.car?.brand || "Nieznana marka"}{" "}

                {item.car?.model || ""}

              </h2>




              <p className="text-gray-400 mt-2">

                {item.car?.year || "brak roku"}

                {" • "}

                {item.car?.engine || "brak silnika"}

              </p>






              <div className="mt-5 text-orange-400 text-3xl font-bold">

                ⭐ {item.score ?? 0}/100

              </div>






              <p className="text-gray-500 text-sm mt-4">

                {item.analyzedAt

                  ? new Date(
                      item.analyzedAt
                    ).toLocaleString(
                      "pl-PL"
                    )

                  : "Brak daty"

                }

              </p>







              <button

                onClick={()=>
                  openReport(item)
                }

                className="mt-6 w-full bg-orange-500 hover:bg-orange-600 rounded-xl py-3 font-bold transition"

              >

                📊 Otwórz raport

              </button>






              <button

                onClick={()=>
                  deleteAnalysis(item.id)
                }

                className="mt-3 w-full border border-zinc-700 hover:border-red-500 text-gray-400 hover:text-red-400 rounded-xl py-3 transition"

              >

                🗑 Usuń

              </button>





            </div>


          ))}


        </div>


      </div>


    </section>

  );


}