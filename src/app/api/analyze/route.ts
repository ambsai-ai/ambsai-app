import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { url } = body;


    if (!url) {
      return NextResponse.json(
        {
          error: "Brak linku do ogłoszenia",
        },
        {
          status: 400,
        }
      );
    }


    const completion = await openai.chat.completions.create({

      model: "gpt-5-mini",

      response_format: {
        type: "json_object",
      },


      messages: [

        {
          role: "system",

          content: `
Jesteś AMBSAI - ekspertem od zakupu samochodów.

Twoim zadaniem jest przygotować analizę auta.

Nie wymyślaj danych z ogłoszenia.
Jeżeli czegoś nie ma, wpisz "brak danych".

Zwróć wyłącznie JSON:

{
 "score": 0,
 "car": {
   "brand": "",
   "model": "",
   "year": "",
   "engine": "",
   "mileage": "",
   "price": ""
 },
 "technicalCondition": 0,
 "failures": [
   {
    "title":"",
    "risk":"",
    "cost":"",
    "description":""
   }
 ],
 "costs":[
   {
    "title":"",
    "price":"",
    "period":"",
    "description":""
   }
 ],
 "pros":[],
 "cons":[],
 "recommendation":""
}
`
        },


        {
          role: "user",

          content: `
Przeanalizuj ogłoszenie samochodu:

${url}

Oceń:
- typowe awarie silnika
- koszty utrzymania
- ryzyko zakupu
- opłacalność
`
        }

      ]

    });


    const content =
      completion.choices[0]?.message?.content;


    if (!content) {
      throw new Error("AI nie zwróciło odpowiedzi");
    }


    const analysis = JSON.parse(content);



    return NextResponse.json({

      success: true,

      analysis

    });



  } catch (error: any) {


    console.error("ANALYZE ERROR:", error);



    return NextResponse.json(

      {
        error:
          error?.message ||
          "Błąd analizy AI"
      },

      {
        status: 500
      }

    );

  }
}