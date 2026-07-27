export default function FinalDecision() {
  return (
    <section className="px-6 py-16">

      <div className="max-w-5xl mx-auto">

        <div className="bg-zinc-900 border border-green-500/30 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            🤖 Decyzja końcowa AI
          </h2>


          <div className="text-center">

            <div className="text-6xl mb-5">
              🟢
            </div>


            <h3 className="text-4xl font-bold text-green-400">
              WARTO SPRAWDZIĆ
            </h3>


            <p className="text-gray-400 text-lg mt-5 max-w-3xl mx-auto">
              Na podstawie dostępnych danych pojazd wygląda
              interesująco. Przed zakupem zalecana jest jednak
              kontrola historii serwisowej oraz dokładne oględziny.
            </p>

          </div>



          <div className="grid md:grid-cols-3 gap-5 mt-10">


            <div className="bg-black rounded-2xl p-6">

              <p className="text-green-400 font-bold text-lg">
                ✅ Zalety
              </p>

              <ul className="text-gray-400 mt-4 space-y-2">
                <li>• Popularny model</li>
                <li>• Dostępność części</li>
                <li>• Dobre właściwości jezdne</li>
              </ul>

            </div>



            <div className="bg-black rounded-2xl p-6">

              <p className="text-yellow-400 font-bold text-lg">
                ⚠ Ryzyko
              </p>

              <ul className="text-gray-400 mt-4 space-y-2">
                <li>• Historia napraw</li>
                <li>• Realny przebieg</li>
                <li>• Stan skrzyni</li>
              </ul>

            </div>



            <div className="bg-black rounded-2xl p-6">

              <p className="text-orange-400 font-bold text-lg">
                🔧 Przed zakupem
              </p>

              <ul className="text-gray-400 mt-4 space-y-2">
                <li>• Diagnostyka komputerowa</li>
                <li>• Jazda próbna</li>
                <li>• Sprawdzenie VIN</li>
              </ul>

            </div>


          </div>



          <div className="mt-10 bg-black rounded-2xl p-6 text-center">

            <p className="text-gray-400">
              Finalna rekomendacja AMBSAI
            </p>

            <p className="text-3xl font-bold text-orange-400 mt-3">
              86/100 punktów
            </p>

          </div>


        </div>

      </div>

    </section>
  );
}