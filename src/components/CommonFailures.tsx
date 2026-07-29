"use client";

import { useEffect, useState } from "react";



type Failure = {

  title: string;

  risk?: string;

  cost?: string;

  description?: string;

  priority?: string;

  checkBeforeBuy?: string;

};




type Analysis = {

  failures?: Failure[];

};






export default function CommonFailures() {



  const [failures,setFailures] =
    useState<Failure[]>([]);






  useEffect(()=>{


    const saved =
      localStorage.getItem("analysis");



    if(saved){


      try {


        const data:Analysis =
          JSON.parse(saved);



        const sorted =
          (data.failures || []).sort((a,b)=>{


            const order:any = {

              "wysok":1,

              "śred":2,

              "sred":2,

              "nisk":3

            };


            return (

              order[
                a.risk?.toLowerCase() || ""
              ] || 4

            )
            -
            (

              order[
                b.risk?.toLowerCase() || ""
              ] || 4

            );


          });



        setFailures(sorted);



      } catch(error){


        console.error(
          "FAILURES ERROR:",
          error
        );


      }


    }


  },[]);









  function riskStyle(risk?:string){


    const value =
      risk?.toLowerCase() || "";



    if(value.includes("wysok")){


      return {

        color:"text-red-400",

        bg:"border-red-500/30",

        icon:"🔴"

      };


    }




    if(
      value.includes("śred") ||
      value.includes("sred")
    ){


      return {


        color:"text-yellow-400",

        bg:"border-yellow-500/30",

        icon:"🟡"


      };


    }






    if(value.includes("nisk")){


      return {


        color:"text-green-400",

        bg:"border-green-500/30",

        icon:"🟢"


      };


    }





    return {


      color:"text-orange-400",

      bg:"border-orange-500/30",

      icon:"⚠️"


    };


  }









  return (


    <section className="px-6 py-12">


      <div className="max-w-5xl mx-auto">






        <div className="flex justify-between items-center mb-8">


          <h2 className="text-3xl font-bold">

            ⚠️ Ryzyka i typowe awarie

          </h2>



          {failures.length > 0 && (


            <span className="text-gray-400">

              {failures.length} punktów ryzyka

            </span>


          )}



        </div>








        {
        failures.length === 0 ? (


          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-gray-400">


            AI nie wykryło typowych problemów.


          </div>


        ) : (



          <div className="space-y-6">



            {failures.map((item,index)=>{


              const risk =
                riskStyle(item.risk);




              return (



                <div


                  key={index}


                  className={`bg-zinc-900 border ${risk.bg} rounded-2xl p-6`}


                >






                  <div className="flex justify-between gap-5 items-start">



                    <div>


                      <h3 className="text-xl font-bold">


                        {index + 1}. {item.title}


                      </h3>



                    </div>





                    {item.risk && (


                      <span className={`font-bold whitespace-nowrap ${risk.color}`}>

                        {risk.icon} {item.risk}

                      </span>


                    )}




                  </div>









                  <div className="grid md:grid-cols-2 gap-5 mt-6">





                    {item.cost && (


                      <div className="bg-black rounded-xl p-4">


                        <p className="text-orange-400 font-bold">

                          💰 Możliwy koszt

                        </p>



                        <p className="text-gray-300 mt-2">

                          {item.cost}

                        </p>


                      </div>


                    )}







                    {item.priority && (


                      <div className="bg-black rounded-xl p-4">


                        <p className="text-yellow-400 font-bold">

                          🚨 Priorytet

                        </p>



                        <p className="text-gray-300 mt-2">

                          {item.priority}

                        </p>


                      </div>


                    )}



                  </div>










                  <p className="text-gray-400 mt-6 leading-relaxed">


                    {item.description ||

                    "Brak opisu problemu."}


                  </p>








                  {item.checkBeforeBuy && (


                    <div className="mt-5 border-t border-zinc-800 pt-5">


                      <p className="text-green-400 font-bold">


                        🔍 Sprawdź przed zakupem:


                      </p>


                      <p className="text-gray-400 mt-2">


                        {item.checkBeforeBuy}


                      </p>


                    </div>


                  )}






                </div>


              );


            })}



          </div>



        )}









        <div className="mt-8 bg-black border border-orange-500/30 rounded-2xl p-6">



          <h3 className="text-xl font-bold">

            🤖 Jak czytać ryzyka AMBSAI

          </h3>




          <p className="text-gray-400 mt-3 leading-relaxed">


            AMBSAI pokazuje typowe problemy danego modelu
            oraz potencjalne koszty. Nie oznacza to,
            że każda usterka występuje w tym egzemplarzu.
            Każde ryzyko należy potwierdzić podczas oględzin,
            jazdy próbnej i diagnostyki.


          </p>



        </div>







      </div>


    </section>


  );


}