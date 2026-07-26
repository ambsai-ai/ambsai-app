export default function Raport() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">

      <div className="mx-auto max-w-5xl">

        <h1 className="text-5xl font-black">
          AMB<span className="text-orange-500">SAI</span> RAPORT AI
        </h1>


        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

          <p className="text-gray-400">
            Analizowany samochód
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            BMW 330i G20
          </h2>


          <div className="mt-8 flex flex-col justify-between gap-6 rounded-2xl bg-black p-6 md:flex-row">

            <div>
              <p className="text-gray-400">
                Ocena AI
              </p>

              <p className="text-6xl font-black text-orange-500">
                91/100
              </p>
            </div>


            <div className="text-left md:text-right">
              <p className="text-gray-400">
                Rekomendacja
              </p>

              <p className="text-2xl font-bold text-green-400">
                WARTO SPRAWDZIĆ
              </p>
            </div>

          </div>


          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl bg-black p-6">
              <h3 className="text-xl font-bold">
                🔧 Silnik
              </h3>

              <p className="mt-3 text-green-400">
                Niskie ryzyko
              </p>

              <p className="mt-2 text-gray-400">
                Jednostka oceniana pozytywnie.
              </p>
            </div>


            <div className="rounded-2xl bg-black p-6">
              <h3 className="text-xl font-bold">
                💰 Cena
              </h3>

              <p className="mt-3 text-green-400">
                Dobra oferta
              </p>

              <p className="mt-2 text-gray-400">
                Cena wygląda atrakcyjnie.
              </p>
            </div>


            <div className="rounded-2xl bg-black p-6">
              <h3 className="text-xl font-bold">
                ⚠ Ryzyko
              </h3>

              <p className="mt-3 text-yellow-400">
                Sprawdź historię
              </p>

              <p className="mt-2 text-gray-400">
                Zalecana kontrola przed zakupem.
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}