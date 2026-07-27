export default function AIScore() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Inteligentna ocena pojazdu przez{" "}
          <span className="text-orange-500">AI</span>
        </h2>


        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            <div>
              <p className="text-gray-400">
                AI Vehicle Score
              </p>

              <h3 className="text-6xl font-bold text-green-400 mt-2">
                92<span className="text-3xl">/100</span>
              </h3>

              <p className="mt-4 text-gray-400">
                Samochód oceniony jako niski poziom ryzyka zakupu.
              </p>
            </div>


            <div className="grid gap-4 w-full md:w-auto">

              <div className="bg-black rounded-xl px-6 py-4">
                <span className="text-green-400">
                  ✓
                </span>{" "}
                Silnik: dobra opinia
              </div>


              <div className="bg-black rounded-xl px-6 py-4">
                <span className="text-yellow-400">
                  ⚠
                </span>{" "}
                Dwumasa: sprawdzić przed zakupem
              </div>


              <div className="bg-black rounded-xl px-6 py-4">
                <span className="text-red-400">
                  ⚠
                </span>{" "}
                EGR: możliwe koszty
              </div>

            </div>

          </div>


          <div className="mt-10">

            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Ocena AI</span>
              <span>92%</span>
            </div>

            <div className="h-3 bg-black rounded-full overflow-hidden">

              <div
                className="h-full bg-orange-500 rounded-full"
                style={{ width: "92%" }}
              />

            </div>

          </div>


        </div>

      </div>

    </section>
  );
}