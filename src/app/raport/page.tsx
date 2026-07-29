"use client";

import { useEffect, useState } from "react";

import AIScore from "@/components/AIScore";
import CarSummary from "@/components/CarSummary";
import CommonFailures from "@/components/CommonFailures";
import MaintenanceCosts from "@/components/MaintenanceCosts";
import SellerQuestions from "@/components/SellerQuestions";
import InspectionChecklist from "@/components/InspectionChecklist";
import DocumentsToCheck from "@/components/DocumentsToCheck";
import NegotiationPoints from "@/components/NegotiationPoints";
import FinalDecision from "@/components/FinalDecision";



export default function Raport() {


  const [carUrl,setCarUrl] =
    useState("");



  useEffect(()=>{


    const savedUrl =
      localStorage.getItem("carUrl");


    if(savedUrl){

      setCarUrl(savedUrl);

    }


  },[]);





  return (


    <main className="min-h-screen bg-black text-white">





      {/* HEADER */}


      <section className="max-w-5xl mx-auto px-6 pt-16">



        <h1 className="text-5xl font-bold text-center">


          Raport{" "}


          <span className="text-orange-500">

            AMBSAI

          </span>


        </h1>




        <p className="text-center text-gray-400 mt-4 text-lg">

          Inteligentna analiza zakupu samochodu AI

        </p>






        {carUrl ? (



          <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-5">


            <p className="text-gray-400 text-sm">

              Analizowane ogłoszenie:

            </p>



            <p className="text-orange-400 break-all mt-2">

              {carUrl}

            </p>



          </div>



        ) : (



          <div className="mt-8 bg-zinc-900 border border-yellow-500/30 rounded-2xl p-5 text-yellow-400">


            Brak zapisanego ogłoszenia.


          </div>



        )}




      </section>







      {/* 1. Szybki werdykt AI */}

      <AIScore />






      {/* 2. Dane samochodu */}

      <CarSummary />







      {/* 3. Ryzyka i typowe awarie */}

      <CommonFailures />







      {/* 4. Realne koszty utrzymania */}

      <MaintenanceCosts />







      {/* 5. Dokumenty przed zakupem */}

      <DocumentsToCheck />







      {/* 6. Co zapytać sprzedającego */}

      <SellerQuestions />







      {/* 7. Kontrola auta na miejscu */}

      <InspectionChecklist />







      {/* 8. Negocjacja ceny */}

      <NegotiationPoints />







      {/* 9. Ostateczna decyzja */}

      <FinalDecision />








      <footer className="max-w-5xl mx-auto px-6 pb-16 text-center text-gray-500 text-sm">


        AMBSAI analizuje dane dostępne w ogłoszeniu.

        <br />

        Przed zakupem zawsze wykonaj jazdę próbną,
        sprawdzenie VIN oraz kontrolę auta.


      </footer>





    </main>


  );

}