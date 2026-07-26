export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <div className="mb-6 rounded-full border border-orange-500/40 px-5 py-2 text-sm text-orange-400">
          🚗 AI dla kupujących samochody
        </div>

        <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
          AMB<span className="text-orange-500">SAI</span>
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-gray-300 md:text-2xl">
          Nie kupuj auta w ciemno.
          <br />
          Sztuczna inteligencja analizuje ogłoszenia,
          wykrywa ryzyko i pomaga wybrać lepszy samochód.
        </p>

        <div className="mt-10 flex w-full max-w-2xl flex-col gap-3 md:flex-row">

          <input
            className="flex-1 rounded-xl border border-gray-700 bg-zinc-900 px-6 py-4 text-white outline-none focus:border-orange-500"
            placeholder="Wklej link do OLX lub Otomoto..."
          />

          <button
            className="rounded-xl bg-orange-500 px-8 py-4 font-bold text-black transition hover:bg-orange-400"
          >
            Analizuj AUTO 🚗
          </button>

        </div>


        <div className="mt-20 grid max-w-5xl gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-left">
            <h2 className="text-xl font-bold">
              🔧 Silnik i usterki
            </h2>
            <p className="mt-3 text-gray-400">
              Sprawdzenie typowych problemów danego modelu i silnika.
            </p>
          </div>


          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-left">
            <h2 className="text-xl font-bold">
              💰 Ocena ceny
            </h2>
            <p className="mt-3 text-gray-400">
              Czy auto jest warte swojej ceny i czy nie przepłacasz.
            </p>
          </div>


          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-left">
            <h2 className="text-xl font-bold">
              ⚠️ Ryzyko zakupu
            </h2>
            <p className="mt-3 text-gray-400">
              Wykrywanie czerwonych flag przed zakupem samochodu.
            </p>
          </div>

        </div>


      </section>
    </main>
  );
}