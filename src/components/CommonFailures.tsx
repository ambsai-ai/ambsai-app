"use client";

import { useEffect, useState } from "react";


type Failure = {
  title: string;
  risk?: string;
  cost?: string;
  description?: string;
};


type Analysis = {
  failures?: Failure[];
};


export default function CommonFailures() {

  const [failures, setFailures] = useState<Failure[]>([]);


  useEffect(() => {

    const saved = localStorage.getItem("analysis");


    if(saved){

      const data: Analysis = JSON.parse(saved);

      setFailures(data.failures || []);

    }

  }, []);



  return (

    <section className="px-6 py-12">

      <div className="max-w-5xl mx-auto">


        <h2 className="text-3xl font-bold mb-8">
          ⚠️ Typowe problemy tego modelu
        </h2>



        {failures.length === 0 ? (

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-gray-400">

            Brak danych o typowych usterkach.

          </div>

        ) : (


          <div className="grid md:grid-cols-2 gap-6">


            {failures.map((item,index)=>(


              <div

                key={index}

                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"

              >


                <div className="flex justify-between items-start gap-4">


                  <h3 className="text-xl font-bold">

                    {item.title}

                  </h3>



                  {item.risk && (

                    <span className="text-orange-400 text-sm">

                      {item.risk}

                    </span>

                  )}


                </div>



                <div className="mt-5 space-y-3">


                  {item.cost && (

                    <p className="text-orange-400 font-bold">

                      💰 Możliwy koszt: {item.cost}

                    </p>

                  )}



                  <p className="text-gray-400 leading-relaxed">

                    {item.description}

                  </p>


                </div>


              </div>


            ))}


          </div>


        )}


      </div>

    </section>

  );

}