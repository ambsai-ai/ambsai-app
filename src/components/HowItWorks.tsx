export default function HowItWorks() {
  const steps = [
    {
      icon: "🔗",
      title: "Wklejasz ogłoszenie",
      text: "Dodajesz link do auta z popularnego serwisu ogłoszeniowego."
    },
    {
      icon: "🧠",
      title: "AI analizuje pojazd",
      text: "AMBSAI sprawdza silnik, awarie, koszty i ryzyko zakupu."
    },
    {
      icon: "✅",
      title: "Dostajesz decyzję",
      text: "Otrzymujesz raport: kupić, negocjować czy odpuścić."
    }
  ];

  return (
    <section className="py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Jak działa <span className="text-orange-500">AMBSAI?</span>
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

        {steps.map((step) => (
          <div
            key={step.title}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center"
          >
            <div className="text-4xl mb-5">
              {step.icon}
            </div>

            <h3 className="text-xl font-bold mb-3">
              {step.title}
            </h3>

            <p className="text-gray-400">
              {step.text}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}