export default function Hero() {
  return (
    <section className="text-center py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm">
          🤖 AI Vehicle Intelligence
        </div>

        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
          Twój prywatny
          <span className="text-orange-500"> ekspert samochodowy AI</span>
        </h2>

        <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto">
          Wklej ogłoszenie auta, a AMBSAI przeanalizuje historię,
          typowe awarie, koszty utrzymania i opłacalność zakupu.
        </p>

      </div>
    </section>
  );
}