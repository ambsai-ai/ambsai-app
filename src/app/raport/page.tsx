export default function Raport() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">

      <div className="mx-auto max-w-6xl">

        <header>
          <h1 className="text-5xl font-black">
            AMB<span className="text-orange-500">SAI</span> PREMIUM
          </h1>

          <p className="mt-3 text-gray-400">
            Kompleksowa analiza pojazdu przed zakupem
          </p>
        </header>



        {/* AUTO */}
        <section className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row">

            <div>
              <p className="text-gray-400">
                Analizowany pojazd
              </p>

              <h2 className="text-4xl font-black">
                BMW 330i G20
              </h2>

              <p className="mt-3 text-gray-400">
                2020 | 2.0 Turbo B48 | 258 KM | ZF 8HP
              </p>

            </div>


            <div className="rounded-3xl bg-orange-500/10 px-10 py-6 text-center">

              <p className="text-gray-400">
                AI SCORE
              </p>

              <p className="text-7xl font-black text-orange-500">
                91
              </p>

              <p className="font-bold text-green-400">
                DOBRY WYBÓR
              </p>

            </div>

          </div>

        </section>



        {/* SUMMARY */}
        <section className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

          <h2 className="text-3xl font-bold">
            🤖 Ocena eksperta AI
          </h2>

          <p className="mt-5 text-lg text-gray-300">
            BMW 330i G20 posiada bardzo dobrą jednostkę B48.
            Konstrukcja jest trwała, jednak przed zakupem
            należy sprawdzić historię serwisową oraz układ chłodzenia.
          </p>

        </section>



        {/* ENGINE */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">


          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

            <h2 className="text-2xl font-bold">
              🔧 Silnik B48
            </h2>

            <ul className="mt-5 space-y-3 text-gray-300">

              <li>
                ✅ Ogólnie bardzo trwały silnik
              </li>

              <li>
                ⚠ Pompa wody
                <span className="block text-orange-400">
                  1200-2500 zł
                </span>
              </li>

              <li>
                ⚠ Układ chłodzenia
                <span className="block text-orange-400">
                  500-2000 zł
                </span>
              </li>

            </ul>

          </div>



          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

            <h2 className="text-2xl font-bold">
              ⚙️ Skrzynia ZF 8HP
            </h2>

            <p className="mt-5 text-gray-300">
              Jedna z najlepszych automatycznych skrzyń.
            </p>


            <div className="mt-5 rounded-xl bg-black p-5">

              Serwis oleju:
              <br />

              <span className="text-orange-400">
                800-1800 zł
              </span>

            </div>

          </div>


        </section>




        {/* SERVICE COST */}
        <section className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

          <h2 className="text-3xl font-bold">
            💰 Kalkulator kosztów serwisu
          </h2>



          <div className="mt-8 grid gap-5 md:grid-cols-3">


            <div className="rounded-2xl bg-black p-6">

              <h3 className="font-bold">
                🛢 Olej silnikowy
              </h3>

              <p className="mt-3 text-gray-400">
                części + robocizna
              </p>

              <p className="text-orange-400">
                500-900 zł
              </p>

            </div>



            <div className="rounded-2xl bg-black p-6">

              <h3 className="font-bold">
                🛑 Hamulce przód
              </h3>

              <p className="mt-3 text-gray-400">
                tarcze + klocki
              </p>

              <p className="text-orange-400">
                900-2500 zł
              </p>

            </div>



            <div className="rounded-2xl bg-black p-6">

              <h3 className="font-bold">
                ⛓ Rozrząd
              </h3>

              <p className="mt-3 text-gray-400">
                kontrola / wymiana
              </p>

              <p className="text-orange-400">
                3500-6000 zł
              </p>

            </div>


          </div>

        </section>





        {/* 3 YEARS */}
        <section className="mt-8 rounded-3xl border border-orange-500/30 bg-orange-500/5 p-8">

          <h2 className="text-3xl font-bold">
            📊 Koszt posiadania przez 3 lata
          </h2>


          <div className="mt-6 text-5xl font-black text-orange-500">
            ~18 000 zł
          </div>


          <p className="mt-3 text-gray-400">
            Szacunkowy koszt eksploatacji przy 15 tys. km rocznie.
          </p>

        </section>





        {/* WARNINGS */}
        <section className="mt-8 rounded-3xl border border-red-900 bg-red-950/20 p-8">

          <h2 className="text-3xl font-bold">
            🚨 Czerwone flagi
          </h2>


          <ul className="mt-5 space-y-3 text-gray-300">

            <li>
              ⚠ Brak historii wymian oleju
            </li>

            <li>
              ⚠ Nieznany przebieg skrzyni
            </li>

            <li>
              ⚠ Brak faktur serwisowych
            </li>

          </ul>

        </section>




        <footer className="py-12 text-center text-gray-500">
          AMBSAI PREMIUM REPORT © 2026
        </footer>


      </div>

    </main>
  );
}