"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();
  const [link, setLink] = useState("");


  return (
    <main className="min-h-screen bg-black text-white">


      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-6">

        <div className="text-3xl font-black">
          AMB<span className="text-orange-500">SAI</span>
        </div>


        <button className="rounded-xl border border-orange-500 px-5 py-2 text-orange-400">
          Panel AI
        </button>

      </header>




      {/* HERO */}
      <section className="px-6 pt-16 text-center">


        <div className="mx-auto w-fit rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-orange-400">
          🤖 AI Vehicle Intelligence
        </div>



        <h1 className="mx-auto mt-8 max-w-5xl text-6xl font-black md:text-8xl">

          Twój prywatny
          <br />

          <span className="text-orange-500">
            ekspert samochodowy AI
          </span>

        </h1>



        <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-400">

          AMBSAI analizuje samochody przed zakupem.
          Sprawdza awarie, koszty serwisu i ryzyko zakupu.

        </p>




        {/* ANALIZA */}

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-zinc-800 bg-zinc-950 p-8">


          <div className="flex h-64 items-center justify-center rounded-2xl bg-black">

            <div className="text-8xl">
              🚘
            </div>

          </div>




          <div className="mt-8 flex flex-col gap-3 md:flex-row">


            <input

              value={link}

              onChange={(e)=>setLink(e.target.value)}

              placeholder="Wklej link do OLX / Otomoto..."

              className="flex-1 rounded-xl bg-white px-5 py-4 text-black"

            />



            <button

              onClick={() => router.push("/analizuj")}

              className="rounded-xl bg-orange-500 px-8 py-4 font-bold text-black hover:bg-orange-400"

            >

              ANALIZUJ AUTO 🚗

            </button>


          </div>



          <div className="mt-8 text-left">


            <div className="flex justify-between">

              <span>
                Skanowanie pojazdu
              </span>


              <span className="text-orange-500">
                87%
              </span>

            </div>


            <div className="mt-3 h-3 rounded-full bg-zinc-800">

              <div className="h-3 w-[87%] rounded-full bg-orange-500">

              </div>

            </div>


          </div>


        </div>


      </section>





      {/* FEATURES */}

      <section className="px-6 py-24">


        <h2 className="text-center text-4xl font-bold">

          Co analizuje AMBSAI?

        </h2>



        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">



          <div className="rounded-2xl border border-zinc-800 p-6">

            <h3 className="text-xl font-bold">
              🔧 Typowe awarie
            </h3>

            <p className="mt-3 text-gray-400">
              Problemy silnika, skrzyni i koszt napraw.
            </p>

          </div>



          <div className="rounded-2xl border border-zinc-800 p-6">

            <h3 className="text-xl font-bold">
              💰 Koszt utrzymania
            </h3>

            <p className="mt-3 text-gray-400">
              Hamulce, oleje, rozrząd i serwis.
            </p>

          </div>




          <div className="rounded-2xl border border-zinc-800 p-6">

            <h3 className="text-xl font-bold">
              🤖 AI Score
            </h3>

            <p className="mt-3 text-gray-400">
              Czy zakup tego auta ma sens.
            </p>

          </div>



        </div>


      </section>




      <footer className="border-t border-zinc-900 py-10 text-center text-gray-500">

        AMBSAI © 2026

      </footer>



    </main>
  );
}