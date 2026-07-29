"use client";

import { useEffect, useState } from "react";


type Analysis = {

  score?: number;

  recommendation?: string;


  decision?: {

    status?: string;

    reason?: string;

  };


  riskLevel?: {

    level?: string;

    reason?: string;

  };


  pros?: string[];

  cons?: string[];

};






export default function FinalDecision() {


  const [analysis,setAnalysis] =
    useState<Analysis | null>(null);






  useEffect(()=>{


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







  const status =
    analysis?.decision?.status?.toLowerCase() || "";





  let decision =
    "BRAK DECYZJI";

  let emoji =
    "⚪";

  let color =
    "text-gray-400";

  let border =
    "border-zinc-700";

  let bg =
    "bg-zinc-900";






  if(
    status.includes("kup") &&
    !status.includes("odpu")
  ){


    decision =
      "KUP";


    emoji =
      "🟢";


    color =
      "text-green-400";


    border =
      "border-green-500/40";


    bg =
      "bg-green-500/5";


  }





  else if(
    status.includes("negocju")
  ){


    decision =
      "NEGOCJUJ";


    emoji =
      "🟡";


    color =
      "text-yellow-400";


    border =
      "border-yellow-500/40";


    bg =
      "bg-yellow-500/5";


  }







  else if(
    status.includes("odpu")
  ){


    decision =
      "ODPUŚĆ";


    emoji =
      "🔴";


    color =
      "text-red-400";


    border =
      "border-red-500/40";


    bg =
      "bg-red-500/5";


  }








  const reason =

    analysis?.decision?.reason ||

    analysis?.recommendation ||

    "Brak uzasadnienia decyzji AI.";








  function riskColor(level?:string){


    const value =
      level?.toLowerCase() || "";



    if(value.includes("wysok")){

      return "text-red-400";

    }



    if(
      value.includes("śred") ||
      value.includes("sred")
    ){

      return "text-yellow-400";

    }



    if(value.includes("niski")){

      return "text-green-400";

    }



    return "text-gray-400";


  }









  return (


    <section className="px-6 py-16">


      <div className="max-w-5xl mx-auto">





        <div
          className={`${bg} border ${border} rounded-3xl p-8`}
        >






          <h2 className="text-3xl font-bold mb-10">

            🤖 Końcowa decyzja AMBSAI

          </h2>








          <div className="text-center">



            <div className="text-7xl">

              {emoji}

            </div>





            <h3
              className={`text-6xl font-bold mt-5 ${color}`}
            >

              {decision}

            </h3>






            <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">

              {reason}

            </p>



          </div>












          <div className="grid md:grid-cols-3 gap-6 mt-12">







            <div className="bg-black rounded-2xl p-6">


              <h3 className="text-green-400 font-bold text-xl">

                ✅ Mocne strony

              </h3>



              <ul className="text-gray-400 mt-4 space-y-3">


                {analysis?.pros?.length ?


                  analysis.pros.slice(0,5).map((item,index)=>(

                    <li key={index}>
                      • {item}
                    </li>

                  ))

                :

                  <li>
                    Brak danych
                  </li>

                }


              </ul>


            </div>









            <div className="bg-black rounded-2xl p-6">


              <h3 className="text-red-400 font-bold text-xl">

                ❌ Ryzyka

              </h3>




              <ul className="text-gray-400 mt-4 space-y-3">


                {analysis?.cons?.length ?


                  analysis.cons.slice(0,5).map((item,index)=>(

                    <li key={index}>
                      • {item}
                    </li>

                  ))

                :

                  <li>
                    Brak danych
                  </li>

                }


              </ul>



            </div>









            <div className="bg-black rounded-2xl p-6">


              <h3 className="text-orange-400 font-bold text-xl">

                📊 Wynik AI

              </h3>





              <p className="text-5xl font-bold mt-5 text-orange-400">

                {analysis?.score ?? 0}

                <span className="text-2xl text-gray-500">

                  /100

                </span>

              </p>





              <p className="text-gray-400 mt-4">

                Ocena całego zakupu:
                stan auta, ryzyko,
                koszty oraz opłacalność.

              </p>



            </div>






          </div>









          {analysis?.riskLevel && (


            <div className="mt-10 bg-black rounded-2xl p-6">



              <h3 className="text-xl font-bold">

                ⚠️ Ryzyko zakupu

              </h3>





              <p
                className={`text-2xl font-bold mt-3 ${riskColor(
                  analysis.riskLevel.level
                )}`}
              >

                {analysis.riskLevel.level}

              </p>






              <p className="text-gray-400 mt-3">

                {analysis.riskLevel.reason}

              </p>




            </div>


          )}









          <div className="mt-10 bg-black border border-orange-500/30 rounded-2xl p-6">


            <h3 className="text-xl font-bold text-orange-400">

              🚗 Ostatnia rada AMBSAI

            </h3>



            <p className="text-gray-400 mt-3 leading-relaxed">

              Nawet najlepszy wynik AI nie zastąpi oględzin.
              Przed zakupem sprawdź VIN, wykonaj jazdę próbną,
              diagnostykę komputerową oraz pomiar lakieru.

            </p>



          </div>






        </div>



      </div>


    </section>


  );


}