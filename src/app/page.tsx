export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="text-3xl font-black tracking-tight">
          AMB<span className="text-orange-500">SAI</span>
        </div>

        <div className="hidden gap-8 text-gray-300 md:flex">
          <span>Jak działa</span>
          <span>Funkcje</span>
          <span>Raport AI</span>
        </div>

        <button className="rounded-xl border border-orange-500 px-5 py-2 text-orange-400">
          Zaloguj
        </button>
      </nav>


      {/* HERO */}
      <section className="flex flex-col items-center px-6 pt-20 text-center">

        <div className="rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm text-orange-400">
          🤖 AI który sprawdza samochody przed zakupem
        </div>


        <h1 className="mt-8 max-w-5xl text-6xl font-black leading-tight md:text-8xl">
          Kupuj samochody
          <br />
          <span className="text-orange-500">
            bez ryzyka
          </span>
        </h1>


        <p className="mt-8 max-w-3xl text-xl text-gray-400">
          AMBSAI analizuje ogłoszenia samochodów,
          wykrywa ukryte problemy, sprawdza opłacalność
          i pomaga podjąć dobrą decyzję zakupową.
        </p>


        <div className="mt-10 flex w-full max-w-3xl flex-col gap-3 md:flex-row">

          <input
            className="flex-1 rounded-2xl border border-zinc-700 bg-zinc-950 px-6 py-5 text-white outline-none focus:border-orange-500"
            placeholder="Wklej link do OLX / Otomoto..."
          />

          <button className="rounded-2xl bg-orange-500 px-10 py-5 font-bold text-black hover:bg-orange-400">
            ANALIZUJ AUTO 🚗
          </button>

        </div>


        {/* CAR SCAN BOX */}
        <div className="mt-20 w-full max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

          <div className="flex flex-col items-center gap-8 md:flex-row">

            <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-900 to-black text-7xl">
              🚘
            </div>


            <div className="w-full text-left">

              <p className="text-orange-500">
                AI ANALYSIS PREVIEW
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                BMW 320d G20
              </h2>


              <div className="mt-6 space-y-4">

                <div>
                  Cena
                  <span className="float-right text-green-400">
                    DOBRA ✅
                  </span>
                </div>

                <div>
                  Silnik
                  <span className="float-right text-green-400">
                    NISKIE RYZYKO ✅
                  </span>
                </div>

                <div>
                  Historia
                  <span className="float-right text-yellow-400">
                    SPRAWDŹ ⚠️
                  </span>
                </div>

              </div>


              <div className="mt-8 rounded-xl bg-orange-500/10 p-5 text-orange-300">
                Ocena AI:
                <strong className="ml-2 text-3xl">
                  86/100
                </strong>
              </div>

            </div>

          </div>

        </div>

      </section>



      {/* FEATURES */}
      <section className="px-6 py-24">

        <h2 className="text-center text-4xl font-bold">
          Co sprawdzi AMBSAI?
        </h2>


        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">

          {[
            ["🔧", "Silnik", "Typowe awarie, koszty napraw i ryzyko."],
            ["💰", "Cena", "Czy sprzedający chce za dużo."],
            ["⚠️", "Ukryte problemy", "Czerwone flagi przed zakupem."],
          ].map((item) => (

            <div
              key={item[1]}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
            >

              <div className="text-4xl">
                {item[0]}
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                {item[1]}
              </h3>

              <p className="mt-3 text-gray-400">
                {item[2]}
              </p>

            </div>

          ))}

        </div>

      </section>



      {/* HOW IT WORKS */}
      <section className="border-t border-zinc-900 px-6 py-24">

        <h2 className="text-center text-4xl font-bold">
          Jak działa AMBSAI?
        </h2>


        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-zinc-950 p-8">
            <span className="text-orange-500 text-3xl">
              01
            </span>
            <h3 className="mt-4 text-xl font-bold">
              Wklejasz ogłoszenie
            </h3>
          </div>


          <div className="rounded-2xl bg-zinc-950 p-8">
            <span className="text-orange-500 text-3xl">
              02
            </span>
            <h3 className="mt-4 text-xl font-bold">
              AI analizuje auto
            </h3>
          </div>


          <div className="rounded-2xl bg-zinc-950 p-8">
            <span className="text-orange-500 text-3xl">
              03
            </span>
            <h3 className="mt-4 text-xl font-bold">
              Dostajesz raport
            </h3>
          </div>

        </div>

      </section>


      {/* FOOTER CTA */}
      <section className="px-6 py-24 text-center">

        <h2 className="text-5xl font-black">
          Nie kupuj auta w ciemno.
        </h2>

        <button className="mt-10 rounded-2xl bg-orange-500 px-10 py-5 font-bold text-black">
          Sprawdź samochód z AI
        </button>

      </section>


    </main>
  );
}