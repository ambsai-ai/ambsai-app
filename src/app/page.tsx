export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-4">
        AMBSAI
      </h1>

      <p className="text-xl mb-8">
        Inteligentny asystent zakupu samochodu
      </p>

      <div className="flex gap-2">
        <input
          className="border rounded-lg p-3 w-80"
          placeholder="Wklej link do ogłoszenia auta..."
        />

        <button className="bg-black text-white rounded-lg px-6">
          Analizuj AI
        </button>
      </div>
    </main>
  );
}