"use client";

import { useEffect, useState } from "react";


type Failure = {
  title: string;
  risk?: string;
  cost?: string;
  text?: string;
};


type Analysis = {
  failures?: string[];
};



export default function CommonFailures() {

  const [failures, setFailures] = useState<Failure[]>([]);


  useEffect(() => {

    const savedAnalysis = localStorage.getItem("analysis");

    if (savedAnalysis) {

      const data: Analysis = JSON.parse(savedAnalysis);


      if (data.failures) {

        setFailures(
          data.failures.map((item) => ({
            title: item,
            risk: "Średnie ryzyko",
            cost: "Do wyceny",
            text:
              "AMBSAI wykryło tę potencjalną przypadłość. Zalecana kontrola przed zakupem."
          }))
        );

      }

    }

  }, []);



  return (
    <section className="px-6 py-16">

      <div className="max-w-5xl mx-auto">


        <h2 className="text-3xl font-bold mb-8">
          ⚠️ Najczęstsze awarie
        </h2>



        <div className="grid md:grid-cols-2 gap-6">


          {failures.map((item) => (

            <div
              key={item.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >


              <div className="flex justify-between gap-4">


                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>


                <span className="text-orange-400 text-sm whitespace-nowrap">
                  {item.risk}
                </span>


              </div>



              <p className="text-orange-400 font-bold mt-4">
                Koszt: {item.cost}
              </p>



              <p className="text-gray-400 mt-4">
                {item.text}
              </p>



            </div>

          ))}



        </div>


        {failures.length === 0 && (

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-gray-400">
            AI nie wykryło jeszcze danych o typowych awariach.
          </div>

        )}


      </div>


    </section>
  );
}