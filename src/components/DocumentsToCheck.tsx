"use client";

import { useEffect, useState } from "react";


type Analysis = {

  documentsToCheck?: string[];

};



export default function DocumentsToCheck() {


  const [documents,setDocuments] =
    useState<string[]>([]);



  useEffect(()=>{


    const saved =
      localStorage.getItem("analysis");


    if(saved){


      try {


        const data:Analysis =
          JSON.parse(saved);


        setDocuments(
          data.documentsToCheck || []
        );


      } catch {


        setDocuments([]);


      }


    }


  },[]);






  const defaultDocuments = [

    "VIN pojazdu",

    "Dowód rejestracyjny",

    "Przegląd techniczny",

    "Historia serwisowa",

    "Faktury za naprawy",

    "Potwierdzenie przebiegu",

    "Książka serwisowa",

    "Dokumenty potwierdzające własność",

    "Polisa OC"

  ];







  const list =

    documents.length > 0

      ? documents

      : defaultDocuments;









  return (


    <section className="px-6 py-12">


      <div className="max-w-5xl mx-auto">






        <h2 className="text-3xl font-bold mb-8">

          📄 Dokumenty do sprawdzenia

        </h2>







        <div className="grid md:grid-cols-2 gap-5">



          {list.map((item,index)=>(



            <div

              key={index}

              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"

            >



              <div className="flex gap-4 items-center">



                <div className="text-3xl">

                  📌

                </div>




                <p className="text-lg font-bold">

                  {item}

                </p>



              </div>



            </div>



          ))}



        </div>










        <div className="mt-8 bg-black border border-orange-500/30 rounded-2xl p-6">



          <h3 className="text-xl font-bold">

            🤖 AMBSAI radzi

          </h3>




          <p className="text-gray-400 mt-3">

            Nie kupuj samochodu bez sprawdzenia dokumentów.
            Zweryfikuj VIN, historię serwisową,
            faktury oraz aktualny przegląd techniczny.
            Dokumenty pomagają potwierdzić realny stan auta
            i wykryć potencjalne problemy przed zakupem.

          </p>




        </div>






      </div>


    </section>


  );


}