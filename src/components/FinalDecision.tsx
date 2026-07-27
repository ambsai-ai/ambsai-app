export default function FinalDecision() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-3xl mx-auto">

        <div className="bg-zinc-900 border border-green-500/30 rounded-3xl p-10 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Decyzja końcowa{" "}
            <span className="text-orange-500">AI</span>
          </h2>


          <div className="text-5xl mb-6">
            🟢
          </div>


          <h3 className="text-4xl font-bold text-green-400">
            WARTO SPRAWDZIĆ
          </h3>


          <p className="text-gray-400 mt-6 text-lg">
            Samochód wygląda korzystnie, ale przed zakupem
            sprawdź historię serwisową oraz najczęstsze punkty
            ryzyka dla tego modelu.
          </p>


          <div className="mt-8 grid md:grid-cols-2 gap-4 text-left">

            <div className="bg-black rounded-xl p-5">
              <p className="text-green-400 font-bold">
                ✓ Plusy
              </p>

              <p className="text-gray-400 mt-2">
                • Dobry silnik<br />
                • Rozsądne koszty<br />
                • Popularny model
              </p>
            </div>


            <div className="bg-black rounded-xl p-5">
              <p className="text-yellow-400 font-bold">
                ⚠ Sprawdź
              </p>

              <p className="text-gray-400 mt-2">
                • Historia napraw<br />
                • Stan skrzyni<br />
                • Przebieg
              </p>
            </div>

          </div>


        </div>

      </div>

    </section>
  );
}