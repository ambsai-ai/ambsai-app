export default function CommonFailures() {
  const failures = [
    {
      title: "Dwumasa + sprzęgło",
      risk: "Średnie ryzyko",
      cost: "2500-4500 zł",
      text: "Przy większym przebiegu warto sprawdzić drgania, hałas przy gaszeniu oraz pracę sprzęgła."
    },
    {
      title: "EGR / układ emisji",
      risk: "Możliwe problemy",
      cost: "800-2000 zł",
      text: "Nagromadzenie sadzy może powodować błędy i spadek osiągów."
    },
    {
      title: "Automatyczna skrzynia",
      risk: "Sprawdź historię",
      cost: "1000-5000 zł",
      text: "Regularny serwis oleju ma duży wpływ na trwałość przekładni."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Typowe awarie według{" "}
          <span className="text-orange-500">AI</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {failures.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >

              <h3 className="text-xl font-bold mb-3">
                ⚠️ {item.title}
              </h3>

              <p className="text-yellow-400 font-semibold">
                {item.risk}
              </p>

              <p className="text-orange-400 mt-2">
                Koszt: {item.cost}
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