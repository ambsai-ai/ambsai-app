export default function SearchBox() {
  return (
    <section className="px-6">
      <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-xl">

        <div className="flex flex-col md:flex-row gap-3">

          <input
            className="flex-1 bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
            placeholder="Wklej link do ogłoszenia auta..."
          />

          <button
            className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-bold"
          >
            Analizuj AI
          </button>

        </div>

      </div>
    </section>
  );
}