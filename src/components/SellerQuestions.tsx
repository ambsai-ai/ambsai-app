"use client";

import { useEffect, useState } from "react";


type Question = {

  question:string;

  importance?:string;

  category?:string;

  why?:string;

};



type Analysis = {

  sellerQuestions?:Question[];

};




export default function SellerQuestions(){


  const [questions,setQuestions] =
    useState<Question[]>([]);



  useEffect(()=>{


    const saved =
      localStorage.getItem("analysis");



    if(saved){


      try{


        const data:Analysis =
          JSON.parse(saved);



        const sorted =
          (data.sellerQuestions || [])
          .sort((a,b)=>{


            const weight:any={

              "wysoka":1,

              "średnia":2,

              "srednia":2,

              "niska":3

            };



            return (

              weight[
                a.importance?.toLowerCase() || ""
              ] || 4

            )
            -
            (

              weight[
                b.importance?.toLowerCase() || ""
              ] || 4

            );


          });



        setQuestions(sorted);



      }catch{


        setQuestions([]);


      }


    }


  },[]);








  function importanceStyle(value?:string){


    const text =
      value?.toLowerCase() || "";



    if(text.includes("wysok")){


      return {

        color:"text-red-400",

        border:"border-red-500/30",

        icon:"🔴"

      };


    }



    if(
      text.includes("śred") ||
      text.includes("sred")
    ){


      return {

        color:"text-yellow-400",

        border:"border-yellow-500/30",

        icon:"🟡"

      };


    }



    return {

      color:"text-green-400",

      border:"border-green-500/30",

      icon:"🟢"

    };


  }









  async function copyQuestion(text:string){


    await navigator.clipboard.writeText(text);


  }







  async function copyAll(){


    const text =
      questions
      .map(
        (q,index)=>
        `${index+1}. ${q.question}`
      )
      .join("\n\n");



    await navigator.clipboard.writeText(text);


  }









  return (


    <section className="px-6 py-12">


      <div className="max-w-5xl mx-auto">






        <div className="flex justify-between items-center mb-8">


          <h2 className="text-3xl font-bold">

            📞 Pytania do sprzedającego

          </h2>



          {questions.length > 0 && (


            <button

              onClick={copyAll}

              className="text-orange-400 hover:text-orange-300"

            >

              📋 Kopiuj wszystkie

            </button>


          )}



        </div>







        {questions.length === 0 ? (


          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-gray-400">


            AI nie przygotowało pytań do sprzedającego.


          </div>



        ) : (



          <div className="space-y-5">





            {questions.map((item,index)=>{


              const importance =
                importanceStyle(item.importance);



              return (



              <div


                key={index}


                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"


              >





                <div className="flex justify-between items-start gap-4">





                  <h3 className="text-xl font-bold">

                    {index+1}. {item.question}

                  </h3>







                  {item.importance && (



                    <span

                      className={`text-xs border rounded-full px-3 py-1 whitespace-nowrap ${importance.color} ${importance.border}`}

                    >

                      {importance.icon}

                      {" "}

                      {item.importance}

                    </span>



                  )}




                </div>









                {item.category && (


                  <p className="text-orange-400 text-sm mt-4">


                    📂 {item.category}


                  </p>


                )}









                {item.why && (



                  <p className="text-gray-400 mt-4 leading-relaxed">


                    💡 Dlaczego pytam:

                    {" "}

                    {item.why}


                  </p>



                )}








                <button


                  onClick={()=>copyQuestion(item.question)}


                  className="mt-5 text-sm text-orange-400 hover:text-orange-300"


                >

                  📋 Kopiuj pytanie


                </button>







              </div>



              );


            })}






          </div>


        )}







        <div className="mt-8 bg-black border border-orange-500/30 rounded-2xl p-6">



          <h3 className="text-xl font-bold">

            🤖 Strategia rozmowy AMBSAI

          </h3>




          <p className="text-gray-400 mt-3 leading-relaxed">


            Najpierw pytaj o rzeczy wpływające na bezpieczeństwo zakupu:
            VIN, historię serwisową, wypadki i ukryte naprawy.
            Dopiero później przechodź do negocjacji ceny.


          </p>



        </div>







      </div>


    </section>


  );


}