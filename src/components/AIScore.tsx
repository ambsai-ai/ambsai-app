export default function AIScore() {
  return (
    <section className="px-6 py-16">

      <div className="max-w-5xl mx-auto">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            🤖 AI Vehicle Score
          </h2>


          <div className="grid md:grid-cols-2 gap-8 items-center">


            <div className="text-center">

              <div className="w-48 h-48 mx-auto rounded-full border-8 border-orange-500 flex items-center justify-center">

                <div>
                  <p className="text-6xl font-bold">
                    86
                  </p>

                  <p className="text-gray-400">
                    /100
                  </p>
                </div>

              </div>


              <p className="mt-6 text-2xl font-bold text-green-400">
                🟢 Dobry zakup
              </p>

            </div>



            <div className="space-y-5">


              <div>
                <div className="flex justify-between mb-2">
                  <span>
                    Stan techniczny
                  </span>

                  <span className="text-green-400">
                    90%
                  </span>
                </div>

                <div className="h-3 bg-black rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[90%]" />
                </div>
              </div>



              <div>
                <div className="flex justify-between mb-2">
                  <span>
                    Ryzyko awarii
                  </span>

                  <span className="text-yellow-400">
                    70%
                  </span>
                </div>

                <div className="h-3 bg-black rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 w-[70%]" />
                </div>
              </div>



              <div>
                <div className="flex justify-between mb-2">
                  <span>
                    Opłacalność zakupu
                  </span>

                  <span className="text-orange-400">
                    85%
                  </span>
                </div>

                <div className="h-3 bg-black rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 w-[85%]" />
                </div>
              </div>


            </div>


          </div>

        </div>

      </div>

    </section>
  );
}