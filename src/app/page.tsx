export default function Home() {
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
          Wykrywa ryzyko, sprawdza cenę i pokazuje,
          czy warto kupić dane auto.
        </p>


        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

          <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl bg-black">

            <div className="absolute h-1 w-full animate-pulse bg-orange-500">
            </div>

            <div className="text-8xl">
              🚘
            </div>

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



      {/* AI REPORT */}
      <section className="px-6 py-24">

        <h2 className="text-center text-4xl font-bold">
          Przykładowy raport AI
        </h2>


        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

          <div className="flex justify-between">

            <div>
              <p className="text-gray-400">
                Analizowany samochód
              </p>

              <h3 className="text-3xl font-bold">
                BMW 330i G20
              </h3>
            </div>


            <div className="text-right">

              <p className="text-gray-400">
                AI Score
              </p>

              <p className="text-5xl font-black text-orange-500">
                91
              </p>

            </div>

          </div>


          <div className="mt-10 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-black p-5">
              🔧 Silnik
              <br />
              <span className="text-green-400">
                Bardzo dobrze
              </span>
            </div>


            <div className="rounded-xl bg-black p-5">
              💰 Cena
              <br />
              <span className="text-green-400">
                Opłacalna
              </span>
            </div>


            <div className="rounded-xl bg-black p-5">
              ⚠ Ryzyko
              <br />
              <span className="text-yellow-400">
                Sprawdź historię
              </span>
            </div>

          </div>

        </div>

      </section>



      <footer className="border-t border-zinc-900 py-10 text-center text-gray-500">
        AMBSAI © 2026
      </footer>


    </main>
  );
}