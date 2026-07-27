"use client";

import { useEffect, useState } from "react";

type Analysis = {
  score?: number;
};


export default function AIScore() {

  const [analysis, setAnalysis] = useState<Analysis | null>(null);


  useEffect(() => {

    const savedAnalysis = localStorage.getItem("analysis");

    if (savedAnalysis) {
      setAnalysis(JSON.parse(savedAnalysis));
    }

  }, []);



  const score = analysis?.score ?? 0;


  const technical = Math.min(score + 4, 100);
  const risk = Math.max(score - 10, 0);
  const value = Math.min(score - 1, 100);



  let decision = "🔴 Ryzykowny zakup";
  let color = "text-red-400";


  if (score >= 80) {
    decision = "🟢 Dobry zakup";
    color = "text-green-400";
  } 
  else if (score >= 60) {
    decision = "🟡 Warto sprawdzić";
    color = "text-yellow-400";
  }



  return (
    <section className="px-6 py-16">

      <div className="max-w-5xl mx-auto">


        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">


          <h2 className="text-3xl font-bold mb-8">
            🤖 AI Vehicle Score
          </h2>



          <div className="grid md:grid-cols-2 gap-8 items-center">


            <div className="text-center">


              <div className="w-48 h-48 mx-auto rounded-full border-8 border-orange-500 flex items-center justify-center">

                <div>

                  <p className="text-6xl font-bold">
                    {score}
                  </p>

                  <p className="text-gray-400">
                    /100
                  </p>

                </div>

              </div>



              <p className={`mt-6 text-2xl font-bold ${color}`}>
                {decision}
              </p>


            </div>





            <div className="space-y-5">


              <div>

                <div className="flex justify-between mb-2">

                  <span>
                    Stan techniczny
                  </span>

                  <span className="text-green-400">
                    {technical}%
                  </span>

                </div>


                <div className="h-3 bg-black rounded-full overflow-hidden">

                  <div
                    className="h-full bg-green-500"
                    style={{ width: `${technical}%` }}
                  />

                </div>

              </div>





              <div>

                <div className="flex justify-between mb-2">

                  <span>
                    Ryzyko awarii
                  </span>

                  <span className="text-yellow-400">
                    {risk}%
                  </span>

                </div>


                <div className="h-3 bg-black rounded-full overflow-hidden">

                  <div
                    className="h-full bg-yellow-500"
                    style={{ width: `${risk}%` }}
                  />

                </div>

              </div>





              <div>

                <div className="flex justify-between mb-2">

                  <span>
                    Opłacalność zakupu
                  </span>

                  <span className="text-orange-400">
                    {value}%
                  </span>

                </div>


                <div className="h-3 bg-black rounded-full overflow-hidden">

                  <div
                    className="h-full bg-orange-500"
                    style={{ width: `${value}%` }}
                  />

                </div>

              </div>



            </div>


          </div>


        </div>


      </div>


    </section>
  );
}