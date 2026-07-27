import { NextResponse } from "next/server";

export async function POST(request: Request) {

  try {

    const body = await request.json();

    const { url } = body;


    if (!url) {

      return NextResponse.json(
        {
          error: "Brak linku do ogłoszenia"
        },
        {
          status: 400
        }
      );

    }



    // TEMP - dane testowe
    // Później tutaj podpinamy OpenAI API

    const analysis = {

      url,


      car: {

        brand: "Audi",

        model: "A4 B9",

        year: 2018,

        engine: "2.0 TDI",

        mileage: "164 000 km",

        price: "79 900 zł"

      },



      score: 86,



      technicalCondition: 90,



      risks: [

        "Dwumasowe koło zamachowe",

        "Układ EGR",

        "Elementy zawieszenia"

      ],



      failures: [

        "Dwumasowe koło zamachowe",

        "Układ EGR",

        "Elementy zawieszenia"

      ],



      costs: [

        {

          title: "Serwis okresowy",

          price: "800 - 1500 zł",

          period: "rocznie",

          description:
            "Olej, filtry oraz podstawowa obsługa."

        },


        {

          title: "Naprawy eksploatacyjne",

          price: "1500 - 3000 zł",

          period: "rocznie",

          description:
            "Hamulce, zawieszenie oraz części zużywalne."

        },


        {

          title: "Rezerwa awaryjna",

          price: "3000 - 5000 zł",

          period: "zalecana",

          description:
            "Budżet na nieprzewidziane naprawy."

        }

      ],



      pros: [

        "Popularny model",

        "Dostępność części",

        "Dobry silnik"

      ],



      cons: [

        "Możliwe koszty diesla",

        "Historia serwisowa do sprawdzenia",

        "Stan skrzyni wymaga kontroli"

      ],



      recommendation:

        "Auto wygląda interesująco, ale przed zakupem zalecana jest kontrola historii serwisowej oraz dokładne oględziny."

    };



    return NextResponse.json({

      success: true,

      analysis

    });



  } catch (error) {


    return NextResponse.json(

      {

        error: "Błąd analizy"

      },

      {

        status: 500

      }

    );

  }

}