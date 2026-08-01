"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


type Props = {
  carUrl: string;
};


const steps = [
  {
    text: "🔎 Analiza ogłoszenia samochodu...",
    progress: 15,
  },
  {
    text: "🤖 AI sprawdza dane pojazdu i silnik...",
    progress: 30,
  },
  {
    text: "⚠️ Wykrywanie typowych awarii modelu...",
    progress: 45,
  },
  {
    text: "💰 Szacowanie kosztów napraw i utrzymania...",
    progress: 60,
  },
  {
    text: "💬 Przygotowanie argumentów negocjacyjnych...",
    progress: 75,
  },
  {
    text: "📊 Tworzenie raportu AMBSAI...",
    progress: 90,
  },
  {
    text: "✅ Raport gotowy",
    progress: 100,
  },
];


export default function AnalysisButton({ carUrl }: Props) {


  const router = useRouter();


  const [loading,setLoading] =
    useState(false);


  const [status,setStatus] =
    useState("");


  const [progress,setProgress] =
    useState(0);





  async function startAnalysis(){


    if(!carUrl.trim()){

      alert(
        "Wklej najpierw link do ogłoszenia auta"
      );

      return;

    }




    setLoading(true);




    let stepIndex = 0;



    const loader = setInterval(()=>{


      if(stepIndex < steps.length){


        setStatus(
          steps[stepIndex].text
        );


        setProgress(
          steps[stepIndex].progress
        );


        stepIndex++;


      }


    },3000);







    try{


      const response =
        await fetch("/api/analyze",{


          method:"POST",


          headers:{


            "Content-Type":
            "application/json",


          },


          body:JSON.stringify({

            url:carUrl

          })


        });







      const data =
        await response.json();






      if(
        !data.success ||
        !data.analysis
      ){

        throw new Error(

          data.error ||
          "AI nie zwróciło analizy"

        );

      }







      const analysis =
        data.analysis;







      localStorage.setItem(

        "analysis",

        JSON.stringify(analysis)

      );





      localStorage.setItem(

        "carUrl",

        carUrl

      );









      let history:any[] = [];



      try{


        history =
          JSON.parse(

            localStorage.getItem(
              "analysisHistory"
            ) || "[]"

          );



      }catch{


        history=[];


      }









      const historyItem = {


        id:
        crypto.randomUUID(),



        analyzedAt:
        new Date().toISOString(),



        url:
        carUrl,



        car:
        analysis.car || {},



        score:
        analysis.score || 0,



        decision:
        analysis.decision || {},



        recommendation:
        analysis.recommendation || "",



        sellerQuestions:
        analysis.sellerQuestions || [],



        inspectionChecklist:
        analysis.inspectionChecklist || [],



        negotiationPoints:
        analysis.negotiationPoints || [],



        documentsToCheck:
        analysis.documentsToCheck || [],



        failures:
        analysis.failures || [],



        costs:
        analysis.costs || [],


      };









      const updatedHistory = [

        historyItem,

        ...history,

      ].slice(0,10);







      localStorage.setItem(

        "analysisHistory",

        JSON.stringify(updatedHistory)

      );








      clearInterval(loader);



      setProgress(100);



      setStatus(
        "✅ Raport gotowy"
      );






      setTimeout(()=>{


        router.push("/raport");


      },1000);






    }catch(error){



      clearInterval(loader);



      console.error(
        "ANALYSIS ERROR:",
        error
      );



      alert(

        error instanceof Error

        ? error.message

        : "Błąd analizy AI"

      );



      setLoading(false);


    }



  }









  if(loading){



    return (


      <div className="mt-5 bg-black border border-zinc-700 rounded-2xl p-6">


        <p className="text-center text-orange-400 font-bold text-lg">

          {status}

        </p>





        <div className="mt-6 w-full bg-zinc-800 rounded-full h-3 overflow-hidden">


          <div

            className="bg-orange-500 h-full transition-all duration-700"

            style={{

              width:`${progress}%`

            }}

          />


        </div>





        <p className="text-center text-gray-400 mt-3">

          {progress}%


        </p>








        <div className="mt-6 space-y-3 text-sm">


          {steps.map((step,index)=>(


            <div

              key={index}

              className={

                progress >= step.progress

                ? "text-orange-400"

                : "text-gray-600"

              }

            >

              {progress >= step.progress
                ? "✓"
                : "○"
              }

              {" "}

              {step.text}


            </div>


          ))}


        </div>



      </div>


    );


  }








  return (


    <button

      onClick={startAnalysis}

      className="mt-5 w-full bg-orange-500 hover:bg-orange-600 transition rounded-xl py-4 font-bold"

    >

      🚗 Rozpocznij analizę AI


    </button>


  );


}