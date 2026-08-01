"use client";

import { useState } from "react";
import AnalysisButton from "@/components/AnalysisButton";


export default function SearchBox() {


  const [url, setUrl] = useState("");



  return (

    <section className="px-6">

      <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-xl">


        <div className="flex flex-col md:flex-row gap-3">


          <input

            value={url}

            onChange={(e)=>setUrl(e.target.value)}

            className="flex-1 bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500 text-white"

            placeholder="Wklej link do ogłoszenia auta..."

          />


          <AnalysisButton carUrl={url}/>


        </div>


      </div>


    </section>

  );

}