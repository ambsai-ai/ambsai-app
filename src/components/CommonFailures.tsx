export default function CommonFailures() {
  const failures = [
    {
      title: "Dwumasowe koło zamachowe",
      risk: "Średnie ryzyko",
      cost: "2500-4500 zł",
      text: "Możliwe zużycie przy większym przebiegu. Warto sprawdzić pracę sprzęgła i dźwięki podczas gaszenia silnika."
    },
    {
      title: "Układ EGR",
      risk: "Średnie ryzyko",
      cost: "800-2000 zł",
      text: "Typowa przypadłość silników diesla. Objawy: spadek mocy, nierówna praca, błędy silnika."
    },
    {
      title: "Zawieszenie przednie",
      risk: "Niskie ryzyko",
      cost: "1000-2500 zł",
      text: "Przy większym przebiegu warto sprawdzić tuleje, wahacze oraz amortyzatory."
    },
    {
      title: "Automatyczna skrzynia biegów",
      risk: "Do sprawdzenia",
      cost: "3000-8000 zł",
      text: "Kluczowa jest historia wymiany oleju i płynność zmiany przełożeń."
    }
  ];


  return (
    <section className="px-6 py-16">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-8">
          ⚠️ Najczęstsze awarie
        </h2>


        <div className="grid md:grid-cols-2 gap-6">


          {failures.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >

              <div className="flex justify-between gap-4">

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <span className="text-orange-400 text-sm whitespace-nowrap">
                  {item.risk}
                </span>

              </div>


              <p className="text-orange-400 font-bold mt-4">
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