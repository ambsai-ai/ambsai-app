export default function CarSummary() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Raport pojazdu <span className="text-orange-500">AI</span>
        </h2>


        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <div className="flex flex-col md:flex-row justify-between gap-6">

            <div>
              <h3 className="text-3xl font-bold">
                Audi A4 B9 2.0 TDI
              </h3>

              <p className="text-gray-400 mt-2">
                2019 • Diesel • 190 KM • Automatyczna skrzynia
              </p>
            </div>


            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl px-6 py-4 text-center">

              <p className="text-gray-400 text-sm">
                Szacowana wartość
              </p>

              <p className="text-2xl font-bold text-orange-400">
                78 000 zł
              </p>

            </div>

          </div>


          <div className="grid md:grid-cols-4 gap-4 mt-10">

            <div className="bg-black rounded-xl p-5">
              <p className="text-gray-400 text-sm">
                Przebieg
              </p>
              <p className="font-bold text-xl">
                142 000 km
              </p>
            </div>


            <div className="bg-black rounded-xl p-5">
              <p className="text-gray-400 text-sm">
                Paliwo
              </p>
              <p className="font-bold text-xl">
                Diesel
              </p>
            </div>


            <div className="bg-black rounded-xl p-5">
              <p className="text-gray-400 text-sm">
                Napęd
              </p>
              <p className="font-bold text-xl">
                Quattro
              </p>
            </div>


            <div className="bg-black rounded-xl p-5">
              <p className="text-gray-400 text-sm">
                Ryzyko
              </p>
              <p className="font-bold text-xl text-green-400">
                Niskie
              </p>
            </div>


          </div>


        </div>

      </div>

    </section>
  );
}