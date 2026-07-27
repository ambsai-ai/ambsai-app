export default function MaintenanceCosts() {
  const costs = [
    {
      title: "Serwis podstawowy",
      price: "800-1500 zł / rok",
      text: "Olej, filtry, podstawowe czynności serwisowe."
    },
    {
      title: "Naprawy eksploatacyjne",
      price: "1500-3000 zł / rok",
      text: "Hamulce, zawieszenie, drobne usterki."
    },
    {
      title: "Rezerwa awaryjna",
      price: "3000-5000 zł",
      text: "Bezpieczny budżet na niespodziewane naprawy."
    }
  ];

  return (
    <section className="py-24 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Szacowane koszty{" "}
          <span className="text-orange-500">utrzymania</span>
        </h2>


        <div className="grid md:grid-cols-3 gap-6">

          {costs.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >

              <h3 className="text-xl font-bold mb-3">
                💰 {item.title}
              </h3>

              <p className="text-orange-400 font-bold text-lg">
                {item.price}
              </p>

              <p className="text-gray-400 mt-4">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}