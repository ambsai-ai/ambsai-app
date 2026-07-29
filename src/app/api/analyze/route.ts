import OpenAI from "openai";
import { NextResponse } from "next/server";


const openai = new OpenAI({

  apiKey: process.env.OPENAI_API_KEY,

});





export async function POST(request: Request) {


  try {


    const body = await request.json();


    const { url } = body;



    if(!url){

      return NextResponse.json(

        {
          error:"Brak linku do ogłoszenia"
        },

        {
          status:400
        }

      );

    }







    const completion =
      await openai.chat.completions.create({



        model:"gpt-5-mini",




        response_format:{

          type:"json_object"

        },





        messages:[



          {


            role:"system",


            content:`

Jesteś AMBSAI - profesjonalnym ekspertem od zakupu samochodów używanych.

Analizujesz auto jak niezależny rzeczoznawca przed zakupem.



ZASADY:

- Nie wymyślaj danych których nie ma.
- Jeżeli czegoś nie wiadomo wpisz "brak danych".
- Nie zakładaj wyposażenia.
- Nie powtarzaj pytań jeżeli odpowiedź jest już w ogłoszeniu.
- Szukaj ryzyka zakupu.
- Szukaj realnych kosztów.
- Szukaj argumentów do negocjacji ceny.
- Podawaj realistyczne widełki kosztów.



Zwróć TYLKO JSON:



{

"score":0,


"decision":{

"status":"KUP / NEGOCJUJ / ODPUŚĆ",

"reason":""

},



"listingQuality":{

"score":0,

"missingInformation":[

""

]

},




"car":{

"brand":"",

"model":"",

"year":"",

"engine":"",

"mileage":"",

"price":""

},




"technicalCondition":0,





"riskLevel":{

"level":"niski / średni / wysoki",

"reason":""

},






"failures":[

{

"title":"",

"risk":"niski / średni / wysoki",

"cost":"",

"priority":"niski / średni / wysoki",

"description":""

}

],







"costs":[

{

"title":"",

"price":"",

"period":"",

"description":"",

"priority":"niski / średni / wysoki"

}

],







"sellerQuestions":[

{

"question":"",

"importance":"niska / średnia / wysoka",

"why":""

}

],







"inspectionChecklist":[

{

"item":"",

"why":"",

"important":true

}

],







"documentsToCheck":[

""

],







"negotiationPoints":[

{

"problem":"",

"argument":"",

"estimatedDiscount":"",

"importance":"niska / średnia / wysoka"

}

],







"pros":[

""

],



"cons":[

""

],




"recommendation":""

}



`

          },








          {


            role:"user",


            content:`

Przeanalizuj ogłoszenie samochodu:



${url}





Przeanalizuj:



DANE POJAZDU:

- marka
- model
- silnik
- rok
- przebieg
- cena





JAKOŚĆ OGŁOSZENIA:

Sprawdź:

- czy jest VIN
- czy są zdjęcia auta
- czy są dokumenty
- czy jest historia serwisowa
- czy opis jest kompletny
- czego brakuje





STAN TECHNICZNY:

Oceń:

- silnik
- skrzynia biegów
- napęd
- zawieszenie
- elektronikę
- typowe awarie tego modelu
- możliwe koszty napraw





KOSZTY PO ZAKUPIE:

Uwzględnij:

- pierwszy serwis
- części eksploatacyjne
- typowe awarie
- możliwy budżet bezpieczeństwa
- ryzyko dużych wydatków





PYTANIA DO SPRZEDAJĄCEGO:

Uwzględnij tylko pytania których nie ma już w ogłoszeniu.



NEGOCJACJA:

Podaj:

- problem auta
- gotowy argument dla kupującego
- możliwy rabat
- ważność argumentu





DOKUMENTY:

Uwzględnij:

- VIN pojazdu
- dowód rejestracyjny
- historię serwisową
- faktury
- potwierdzenie przebiegu
- książkę serwisową
- dokumenty własności
- aktualny przegląd techniczny pojazdu





CHECKLISTA OGLĘDZIN:

Uwzględnij:

- zimny start
- wycieki
- lakier
- korozję
- jazdę próbną
- diagnostykę komputerową
- hamulce
- zawieszenie
- dokumenty





Na końcu wybierz:

KUP

NEGOCJUJUJ

ODPUŚĆ



`

          }


        ]


      });








    const content =
      completion.choices[0]?.message?.content;





    if(!content){

      throw new Error(
        "AI nie zwróciło odpowiedzi"
      );

    }





    const analysis =
      JSON.parse(content);






    return NextResponse.json({

      success:true,

      analysis

    });






  } catch(error:any){



    console.error(

      "ANALYZE ERROR:",

      error

    );





    return NextResponse.json(

      {

        error:
        error?.message ||
        "Błąd analizy AI"

      },

      {

        status:500

      }

    );


  }


}