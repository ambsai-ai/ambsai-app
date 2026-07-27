export default function MaintenanceCosts() {
  const costs = [
    {
      title: "Serwis okresowy",
      price: "800 - 1500 zł",
      period: "rocznie",
      description:
        "Olej, filtry, podstawowy przegląd i bieżąca obsługa."
    },
    {
      title: "Naprawy eksploatacyjne",
      price: "1500 - 3000 zł",
      period: "rocznie",
      description:
        "Hamulce, zawieszenie, elementy zużywające się."
    },
    {
      title: "Rezerwa awaryjna",
      price: "3000 - 5000 zł",
      period: "zalecana",
      description:
        "Bezpieczny budżet na niespodziewane usterki."
    }
  ];


  return (
    <section className="px-6 py-16">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-8">
          💰 Koszty utrzymania
        </h2>


        <div className="grid md:grid-cols-3 gap-6">


          {costs.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>


              <p className="text-orange-400 text-2xl font-bold mt-4">
                {item.price}
              </p>


              <p className="text-gray-400 mt-1">
                {item.period}
              </p>


              <p className="text-gray-400 mt-5">
                {item.description}
              </p>


            </div>
          ))}


        </div>


        <div className="mt-8 bg-zinc-900 border border-orange-500/30 rounded-2xl p-6">

          <h3 className="text-xl font-bold">
            🤖 Ocena AI kosztów
          </h3>

          <p className="text-gray-400 mt-3">
            Według analizy AMBSAI przewidywane koszty utrzymania
            tego pojazdu są na rozsądnym poziomie dla tej klasy auta.
          </p>


          <div className="mt-5 text-green-400 font-bold text-2xl">
            🟢 Koszty: umiarkowane
          </div>

        </div>


      </div>

    </section>
  );
}