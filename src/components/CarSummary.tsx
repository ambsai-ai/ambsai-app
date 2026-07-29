"use client";

import { useEffect, useState } from "react";


type Analysis = {

  car?: {
    brand?: string;
    model?: string;
    year?: string | number;
    engine?: string;
    mileage?: string;
    price?: string | number;
  };


  score?: number;


  technicalCondition?: number;


  decision?: {
    status?: string;
    reason?: string;
  };


};



export default function CarSummary() {


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





  const car =
    analysis?.car;



  function value(
    text?: string | number
  ){

    if(
      text === undefined ||
      text === null ||
      text === ""
    ){

      return "Brak danych";

    }


    return text;

  }





  const fullName = [

    car?.brand,

    car?.model

  ]
  .filter(Boolean)
  .join(" ");






  const status =
    analysis?.decision?.status
    ?.toLowerCase() || "";




  let decision =
    "Brak decyzji";


  let decisionColor =
    "text-yellow-400";




  if(status.includes("kup")){


    decision =
      "🟢 KUP";


    decisionColor =
      "text-green-400";


  }


  else if(status.includes("negocju")){


    decision =
      "🟡 NEGOCJUJ";


    decisionColor =
      "text-yellow-400";


  }


  else if(status.includes("odpu")){


    decision =
      "🔴 ODPUŚĆ";


    decisionColor =
      "text-red-400";


  }






  return (


    <section className="px-6 py-16">


      <div className="max-w-5xl mx-auto">





        <h2 className="text-3xl font-bold mb-8">

          🚗 Podsumowanie pojazdu

        </h2>





        <div className="grid md:grid-cols-2 gap-5">







          <InfoCard
            title="Marka i model"
            value={fullName}
          />



          <InfoCard
            title="Rok produkcji"
            value={value(car?.year)}
          />



          <InfoCard
            title="Silnik"
            value={value(car?.engine)}
          />



          <InfoCard
            title="Przebieg"
            value={value(car?.mileage)}
          />



          <InfoCard
            title="Cena z ogłoszenia"
            value={value(car?.price)}
            orange
          />



          <InfoCard
            title="Ocena AI"
            value={`${value(analysis?.score)} / 100`}
            orange
          />



          <InfoCard
            title="Stan techniczny AI"
            value={`${value(analysis?.technicalCondition)} / 100`}
          />





          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">


            <p className="text-gray-400">

              Decyzja zakupowa AMBSAI

            </p>



            <p className={`text-3xl font-bold mt-3 ${decisionColor}`}>

              {decision}

            </p>


          </div>





        </div>






        {analysis?.decision?.reason && (


          <div className="mt-6 bg-zinc-900 border border-orange-500/30 rounded-2xl p-6">


            <h3 className="font-bold text-xl">

              🤖 Dlaczego taka decyzja?

            </h3>


            <p className="text-gray-400 mt-3 leading-relaxed">

              {analysis.decision.reason}

            </p>


          </div>


        )}







      </div>


    </section>


  );

}






function InfoCard({

  title,

  value,

  orange=false


}:{

  title:string;

  value:string | number;

  orange?:boolean;

}){


  return (

    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">


      <p className="text-gray-400">

        {title}

      </p>



      <p className={`text-2xl font-bold mt-3 ${orange ? "text-orange-400" : ""}`}>

        {value}

      </p>



    </div>

  );

}