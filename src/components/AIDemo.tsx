export default function AIDemo() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Przykładowa analiza <span className="text-orange-500">AI</span>
        </h2>


        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold">
                Volkswagen Golf VII 2.0 TDI
              </h3>

              <p className="text-gray-400">
                2018 • 150 KM • Diesel • 180 000 km
              </p>
            </div>


            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">
                92%
              </div>

              <p className="text-sm text-gray-400">
                AI Score
              </p>
            </div>

          </div>


          <div className="grid md:grid-cols-3 gap-4">


            <div className="bg-black rounded-xl p-5">
              <h4 className="font-bold mb-2">
                🔧 Awaryjność
              </h4>

              <p className="text-gray-400">
                Niskie ryzyko. Sprawdź EGR oraz dwumasę.
              </p>
            </div>


            <div className="bg-black rounded-xl p-5">
              <h4 className="font-bold mb-2">
                💰 Koszty
              </h4>

              <p className="text-gray-400">
                Szacowane utrzymanie: 2500-3500 zł/rok.
              </p>
            </div>


            <div className="bg-black rounded-xl p-5">
              <h4 className="font-bold mb-2">
                ✅ Decyzja
              </h4>

              <p className="text-green-400 font-bold">
                WARTO SPRAWDZIĆ
              </p>
            </div>


          </div>

        </div>

      </div>

    </section>
  );
}