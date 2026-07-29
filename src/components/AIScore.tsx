"use client";

import { useEffect, useState } from "react";


type Analysis = {

  score?: number;

  technicalCondition?: number;


  decision?: {
    status?: string;
  };


  riskLevel?: {
    level?: string;
    reason?: string;
  };


  listingQuality?: {
    score?: number;
    missingInformation?: string[];
  };

};





export default function AIScore() {


  const [analysis, setAnalysis] =
    useState<Analysis | null>(null);




  useEffect(() => {


    const saved =
      localStorage.getItem("analysis");


    if(saved){

      try {

        setAnalysis(
          JSON.parse(saved)
        );

      } catch {

        setAnalysis(null);

      }

    }


  },[]);







  const score =
    analysis?.score ?? 0;



  const technical =
    analysis?.technicalCondition ?? 0;



  const listing =
    analysis?.listingQuality?.score ?? 0;






  const status =
    analysis?.decision?.status?.toLowerCase() || "";





  let decision =
    "BRAK DECYZJI";


  let color =
    "text-yellow-400";





  if(status.includes("kup")){


    decision =
      "🟢 KUP";


    color =
      "text-green-400";


  }
  else if(status.includes("negocju")){


    decision =
      "🟡 NEGOCJUJ";


    color =
      "text-yellow-400";


  }
  else if(status.includes("odpu")){


    decision =
      "🔴 ODPUŚĆ";


    color =
      "text-red-400";


  }







  let riskText =
    "brak danych";


  if(analysis?.riskLevel?.level){

    riskText =
      analysis.riskLevel.level;

  }







  return (

    <section className="px-6 py-16">


      <div className="max-w-5xl mx-auto">


        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">



          <h2 className="text-3xl font-bold mb-8">

            🤖 AMBSAI Vehicle Score

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





              <p className={`mt-6 text-3xl font-bold ${color}`}>

                {decision}

              </p>



            </div>









            <div className="space-y-6">







              <div>


                <div className="flex justify-between mb-2">

                  <span>
                    Stan techniczny
                  </span>


                  <span className="text-green-400">

                    {technical || "brak"}%

                  </span>


                </div>


                <div className="h-3 bg-black rounded-full overflow-hidden">

                  <div

                    className="h-full bg-green-500"

                    style={{
                      width:`${technical}%`
                    }}

                  />

                </div>


              </div>










              <div>


                <div className="flex justify-between mb-2">


                  <span>
                    Ryzyko zakupu
                  </span>


                  <span className="text-red-400">

                    {riskText}

                  </span>


                </div>



                <div className="bg-black rounded-xl p-4 text-gray-400">


                  {analysis?.riskLevel?.reason ||

                  "Brak szczegółowej oceny ryzyka."}


                </div>


              </div>









              <div>


                <div className="flex justify-between mb-2">


                  <span>
                    Jakość ogłoszenia
                  </span>


                  <span className="text-orange-400">

                    {listing || "brak"}%

                  </span>


                </div>




                <div className="h-3 bg-black rounded-full overflow-hidden">


                  <div

                    className="h-full bg-orange-500"

                    style={{
                      width:`${listing}%`
                    }}

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