export default function PremiumPage() {


  const features = [

    {
      title: "🤖 Nieograniczone analizy AI",
      description:
        "Analizuj samochody szybciej i dokładniej bez ręcznego sprawdzania setek informacji.",
    },

    {
      title: "📋 Profesjonalne raporty",
      description:
        "Pełna ocena auta, ryzyka, kosztów utrzymania i opłacalności zakupu.",
    },

    {
      title: "🚗 Historia analiz",
      description:
        "Przechowuj wszystkie sprawdzone samochody w jednym miejscu.",
    },

    {
      title: "🔎 Analiza VIN",
      description:
        "Sprawdzanie historii pojazdu, szkód i przebiegu.",
    },

    {
      title: "⚡ Alerty samochodowe",
      description:
        "Powiadomienia o nowych ofertach pasujących do Twoich wymagań.",
    },

    {
      title: "🧠 Ekspert AI 24/7",
      description:
        "Twój prywatny doradca przy zakupie samochodu.",
    },

  ];



  return (

    <main className="px-6 py-20">


      <div className="max-w-6xl mx-auto">



        <div className="text-center">


          <h1 className="text-5xl font-bold">

            ⭐ AMBSAI Premium

          </h1>


          <p className="text-gray-400 mt-5 text-lg">

            Kupuj samochody mądrzej z pomocą sztucznej inteligencji.

          </p>


        </div>





        <div className="mt-14 grid md:grid-cols-3 gap-6">



          {features.map((item,index)=>(


            <div

              key={index}

              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"

            >


              <h2 className="text-xl font-bold">

                {item.title}

              </h2>



              <p className="text-gray-400 mt-4">

                {item.description}

              </p>



            </div>


          ))}



        </div>





        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-10 text-black text-center">


          <h2 className="text-3xl font-bold">

            Zacznij korzystać z AMBSAI Premium

          </h2>



          <p className="mt-4">

            Pełna analiza samochodu zanim wydasz swoje pieniądze.

          </p>



          <button

            className="mt-8 bg-black text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition"

          >

            🚀 Wkrótce dostępne

          </button>



        </div>




      </div>


    </main>

  );

}