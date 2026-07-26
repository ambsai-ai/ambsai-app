export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <h1 className="text-6xl font-bold tracking-tight">
          AMBSAI
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-300">
          Inteligentny asystent zakupu samochodu.
          AI analizuje ogłoszenia, wykrywa ryzyko i pomaga kupić lepsze auto.
        </p>

        <div className="mt-10 flex w-full max-w-xl gap-3">
          <input
            className="flex-1 rounded-xl bg-white px-5 py-4 text-black"
            placeholder="Wklej link do ogłoszenia auta..."
          />

          <button
            className="rounded-xl bg-white px-6 py-4 font-semibold text-black hover:bg-gray-200"
          >
            Analizuj AI
          </button>
        </div>

        <div className="mt-16 grid max-w-4xl gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-gray-800 p-6">
            <h2 className="text-xl font-bold">
              🚗 Analiza auta
            </h2>
            <p className="mt-3 text-gray-400">
              Sprawdzenie ogłoszenia, silnika, ceny i typowych usterek.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <h2 className="text-xl font-bold">
              🤖 AI Expert
            </h2>
            <p className="mt-3 text-gray-400">
              Sztuczna inteligencja pomaga podjąć decyzję przed zakupem.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <h2 className="text-xl font-bold">
              📊 Ocena ryzyka
            </h2>
            <p className="mt-3 text-gray-400">
              Dowiedz się, czy cena i stan auta mają sens.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}