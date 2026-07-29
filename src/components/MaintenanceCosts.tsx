"use client";

import { useEffect, useState } from "react";


type Cost = {

  title?: string;

  price?: string;

  period?: string;

  description?: string;

  priority?: string;

};



type CostAnalysis = {

  serviceCost?: string;

  repairRisk?: string;

  firstYearBudget?: string;

  summary?: string;

};



type Analysis = {


  costs?: Cost[];


  recommendation?: string;


  riskLevel?: {

    level?: string;

    reason?: string;

  };


  costAnalysis?: CostAnalysis;


};






export default function MaintenanceCosts(){


  const [costs,setCosts] =
    useState<Cost[]>([]);



  const [recommendation,setRecommendation] =
    useState("");



  const [risk,setRisk] =
    useState("");



  const [riskReason,setRiskReason] =
    useState("");



  const [costAnalysis,setCostAnalysis] =
    useState<CostAnalysis>({});







  useEffect(()=>{


    const saved =
      localStorage.getItem("analysis");



    if(saved){


      try {


        const data:Analysis =
          JSON.parse(saved);



        const sorted =
          (data.costs || []).sort((a,b)=>{


            const priority:any = {


              "wysoki":1,

              "średni":2,

              "sredni":2,

              "niski":3


            };



            return (

              priority[
                a.priority?.toLowerCase() || ""
              ] || 4

            )
            -
            (

              priority[
                b.priority?.toLowerCase() || ""
              ] || 4

            );


          });




        setCosts(sorted);



        setRecommendation(
          data.recommendation || ""
        );



        setRisk(
          data.riskLevel?.level || ""
        );



        setRiskReason(
          data.riskLevel?.reason || ""
        );



        setCostAnalysis(
          data.costAnalysis || {}
        );



      } catch(error){


        console.error(
          "MAINTENANCE LOAD ERROR:",
          error
        );


      }


    }


  },[]);







  const defaultCosts:Cost[]=[


    {

      title:"Serwis startowy",

      price:"800 - 1500 zł",

      period:"po zakupie",

      priority:"średni",

      description:
      "Olej, filtry, płyny oraz podstawowe sprawdzenie auta."

    },



    {

      title:"Naprawy eksploatacyjne",

      price:"1500 - 3000 zł",

      period:"pierwszy rok",

      priority:"średni",

      description:
      "Hamulce, zawieszenie, opony i elementy zużywające się."

    },



    {

      title:"Rezerwa bezpieczeństwa",

      price:"3000 - 5000 zł",

      period:"zalecana",

      priority:"wysoki",

      description:
      "Budżet na nieprzewidziane awarie po zakupie."

    }


  ];







  const displayCosts =
    costs.length > 0
    ? costs
    : defaultCosts;







  function riskStyle(){


    const value =
      risk.toLowerCase();



    if(value.includes("wysok")){


      return {

        text:"text-red-400",

        icon:"🔴"

      };


    }



    if(
      value.includes("śred") ||
      value.includes("sred")
    ){


      return {

        text:"text-yellow-400",

        icon:"🟡"

      };


    }



    if(value.includes("niski")){


      return {

        text:"text-green-400",

        icon:"🟢"

      };


    }



    return {

      text:"text-gray-400",

      icon:"⚪"

    };


  }






  const riskData =
    riskStyle();








  return (


    <section className="px-6 py-16">


      <div className="max-w-5xl mx-auto">





        <div className="flex justify-between items-center mb-8">


          <h2 className="text-3xl font-bold">

            💰 Koszty po zakupie AMBSAI

          </h2>



          <span className="text-gray-400">

            {displayCosts.length} pozycji

          </span>


        </div>







        <div className="grid md:grid-cols-3 gap-6">


          {displayCosts.map((item,index)=>(


            <div

              key={index}

              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"

            >



              <h3 className="text-xl font-bold">

                {item.title || "Koszt"}

              </h3>




              <p className="text-orange-400 text-2xl font-bold mt-4">

                {item.price || "Brak danych"}

              </p>




              <p className="text-gray-400 mt-1">

                {item.period}

              </p>





              {item.priority && (

                <p className="text-yellow-400 mt-4 font-bold">

                  ⚠️ Priorytet: {item.priority}

                </p>

              )}






              <p className="text-gray-400 mt-5 leading-relaxed">

                {item.description || "Brak opisu"}

              </p>




            </div>


          ))}


        </div>








        <div className="mt-10 bg-zinc-900 border border-orange-500/30 rounded-2xl p-6">





          <h3 className="text-xl font-bold">

            🤖 Finansowa analiza AMBSAI

          </h3>





          {risk && (

            <div className="mt-5 bg-black rounded-xl p-5">


              <p className={`font-bold text-xl ${riskData.text}`}>

                {riskData.icon} Ryzyko kosztów: {risk}

              </p>



              <p className="text-gray-400 mt-3">

                {riskReason}

              </p>


            </div>

          )}







          <div className="grid md:grid-cols-3 gap-5 mt-6">


            <div className="bg-black rounded-xl p-5">

              <p className="text-gray-400">

                Pierwszy serwis

              </p>

              <p className="text-orange-400 font-bold mt-3">

                {costAnalysis.serviceCost || "Brak danych"}

              </p>

            </div>





            <div className="bg-black rounded-xl p-5">

              <p className="text-gray-400">

                Budżet pierwszego roku

              </p>

              <p className="text-orange-400 font-bold mt-3">

                {costAnalysis.firstYearBudget || "Brak danych"}

              </p>

            </div>






            <div className="bg-black rounded-xl p-5">

              <p className="text-gray-400">

                Ryzyko napraw

              </p>

              <p className="text-orange-400 font-bold mt-3">

                {costAnalysis.repairRisk || "Brak danych"}

              </p>

            </div>


          </div>







          {costAnalysis.summary && (

            <p className="text-gray-400 mt-6 leading-relaxed">

              💡 {costAnalysis.summary}

            </p>

          )}







          <div className="mt-6 text-orange-400 font-bold text-xl">


            {recommendation ||

            "Brak dodatkowej oceny kosztów."}


          </div>





        </div>





      </div>


    </section>


  );


}