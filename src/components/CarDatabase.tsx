"use client";

import { useState } from "react";


const database = {

  Audi: {

    "A4 B9": {

      "2.0 TDI": {

        reliability: 8,

        problems: [
          "EGR",
          "Dwumasowe koło zamachowe",
          "AdBlue",
          "Elementy zawieszenia"
        ],

        costs:
          "3000 - 5000 zł rocznie",

        opinion:
          "Dobry wybór na długie trasy. Sprawdź historię serwisową i stan układu SCR."

      }

    }

  },


  BMW: {

    "F30": {

      "320d": {

        reliability: 7,

        problems: [
          "Łańcuch rozrządu",
          "EGR",
          "Turbosprężarka"
        ],

        costs:
          "4000 - 7000 zł rocznie",

        opinion:
          "Bardzo dobre auto, ale wymaga regularnego serwisu."

      }

    }

  }


};



export default function CarDatabase() {


  const [brand,setBrand] = useState("Audi");
  const [model,setModel] = useState("A4 B9");
  const [engine,setEngine] = useState("2.0 TDI");



  const car =
    database[
      brand as keyof typeof database
    ][
      model as never
    ][
      engine as never
    ];



  return (

    <section className="px-6 py-16">


      <div className="max-w-5xl mx-auto">


        <h1 className="text-4xl font-bold mb-10">

          📚 Baza aut AMBSAI

        </h1>



        <div className="grid md:grid-cols-3 gap-4">


          <select

            className="bg-zinc-900 border border-zinc-700 rounded-xl p-4"

            value={brand}

            onChange={(e)=>setBrand(e.target.value)}

          >

            <option>Audi</option>
            <option>BMW</option>

          </select>



          <select

            className="bg-zinc-900 border border-zinc-700 rounded-xl p-4"

            value={model}

            onChange={(e)=>setModel(e.target.value)}

          >

            <option>A4 B9</option>
            <option>F30</option>

          </select>



          <select

            className="bg-zinc-900 border border-zinc-700 rounded-xl p-4"

            value={engine}

            onChange={(e)=>setEngine(e.target.value)}

          >

            <option>2.0 TDI</option>
            <option>320d</option>

          </select>


        </div>




        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">


          <h2 className="text-2xl font-bold">

            Ocena modelu

          </h2>



          <p className="text-orange-400 text-4xl font-bold mt-4">

            ⭐ {car.reliability}/10

          </p>



          <h3 className="text-xl font-bold mt-8">

            ⚠️ Typowe problemy

          </h3>


          <ul className="mt-4 space-y-2 text-gray-300">

            {car.problems.map((problem,index)=>(

              <li key={index}>
                • {problem}
              </li>

            ))}

          </ul>




          <h3 className="text-xl font-bold mt-8">

            💰 Koszt utrzymania

          </h3>


          <p className="text-gray-400 mt-2">

            {car.costs}

          </p>




          <h3 className="text-xl font-bold mt-8">

            🤖 Opinia AMBSAI

          </h3>


          <p className="text-gray-400 mt-2">

            {car.opinion}

          </p>



        </div>



      </div>


    </section>

  );

}