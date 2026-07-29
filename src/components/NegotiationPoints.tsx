"use client";

import { useEffect, useState } from "react";


type NegotiationPoint = {

  problem: string;

  argument?: string;

  estimatedDiscount?: string;

  importance?: string;

};



type Analysis = {

  negotiationPoints?: NegotiationPoint[];

};





export default function NegotiationPoints() {


  const [points,setPoints] =
    useState<NegotiationPoint[]>([]);



  const [copied,setCopied] =
    useState<number | null>(null);






  useEffect(()=>{


    const saved =
      localStorage.getItem("analysis");



    if(saved){


      try {


        const data:Analysis =
          JSON.parse(saved);




        const sorted =
          (data.negotiationPoints || []).sort((a,b)=>{


            const priority:any = {

              "wysoka":1,

              "wysoki":1,

              "średnia":2,

              "srednia":2,

              "niska":3,

              "niski":3

            };



            return (
              priority[
                a.importance?.toLowerCase() || ""
              ] || 4
            )
            -
            (
              priority[
                b.importance?.toLowerCase() || ""
              ] || 4
            );


          });




        setPoints(sorted);



      } catch {


        setPoints([]);


      }


    }



  },[]);








  function importanceStyle(value?:string){


    const text =
      value?.toLowerCase() || "";



    if(
      text.includes("wysok")
    ){

      return "text-red-400 border-red-500/30";

    }



    if(
      text.includes("śred") ||
      text.includes("sred")
    ){

      return "text-yellow-400 border-yellow-500/30";

    }



    return "text-green-400 border-green-500/30";


  }








  function copyArgument(
    text:string,
    index:number
  ){


    navigator.clipboard.writeText(text);



    setCopied(index);



    setTimeout(()=>{


      setCopied(null);


    },2000);


  }








  return (


    <section className="px-6 py-12">


      <div className="max-w-5xl mx-auto">





        <div className="flex justify-between items-center mb-8">



          <h2 className="text-3xl font-bold">

            💰 Argumenty do negocjacji ceny

          </h2>





          {points.length > 0 && (

            <span className="text-orange-400 font-bold">

              {points.length} punktów

            </span>

          )}



        </div>







        {points.length === 0 ? (



          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-gray-400">


            AI nie znalazło argumentów do negocjacji.


          </div>



        ) : (



          <div className="space-y-6">





            {points.map((item,index)=>(



              <div

                key={index}

                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"

              >





                <div className="flex gap-5">





                  <div className="text-4xl">

                    💸

                  </div>






                  <div className="flex-1">






                    <div className="flex justify-between gap-4 items-start">



                      <h3 className="text-xl font-bold">

                        {index + 1}. {item.problem}

                      </h3>





                      {item.importance && (


                        <span

                          className={`text-xs border rounded-full px-3 py-1 whitespace-nowrap ${importanceStyle(item.importance)}`}

                        >

                          {item.importance}

                        </span>


                      )}



                    </div>









                    {item.argument && (



                      <div className="mt-5 bg-black rounded-xl p-5 border border-zinc-800">



                        <p className="text-gray-400 text-sm">

                          🗣️ Gotowy argument dla sprzedającego:

                        </p>





                        <p className="text-white mt-3 italic leading-relaxed">

                          "{item.argument}"

                        </p>






                        <button


                          onClick={()=>
                            copyArgument(
                              item.argument!,
                              index
                            )
                          }


                          className="mt-4 text-sm text-orange-400 hover:text-orange-300"


                        >

                          {copied === index

                            ? "✅ Skopiowano"

                            : "📋 Kopiuj argument"

                          }


                        </button>



                      </div>



                    )}









                    {item.estimatedDiscount && (



                      <div className="mt-5 bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">



                        <p className="text-orange-400 font-bold">

                          📉 Realna możliwość negocjacji:

                        </p>




                        <p className="text-white text-xl font-bold mt-1">

                          {item.estimatedDiscount}

                        </p>



                      </div>



                    )}






                  </div>





                </div>





              </div>



            ))}





          </div>



        )}









        <div className="mt-8 bg-black border border-orange-500/30 rounded-2xl p-6">





          <h3 className="text-xl font-bold">

            🤖 Strategia negocjacji AMBSAI

          </h3>






          <p className="text-gray-400 mt-3 leading-relaxed">

            Największą siłę negocjacyjną mają konkretne koszty,
            a nie ogólne argumenty. Wykorzystuj brak historii,
            zużyte elementy, ryzyko awarii oraz rzeczy wymagające
            inwestycji po zakupie.

          </p>





        </div>






      </div>


    </section>


  );


}