import OpenAI from "openai";
import { NextResponse } from "next/server";
import { AnalysisReportSchema } from "@/types/analysisSchema";
import { supabase } from "@/lib/supabase";
import { scrapeListing } from "@/services/listingScraper";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json(
        { error: "Brak linku do ogłoszenia" },
        { status: 400 }
      );
    }

    // 1. Pobranie danych ogłoszenia
    let listing;

    try {
      listing = await scrapeListing(url);
    } catch (error) {
      console.error("AMBSAI SCRAPER ERROR:", error);

      return NextResponse.json(
        {
          error:
            error instanceof Error
              ? error.message
              : "Nie udało się pobrać ogłoszenia",
        },
        { status: 500 }
      );
    }

    console.log("AMBSAI LISTING DATA:", {
      source: listing.source,
      title: listing.title,
      brand: listing.brand,
      model: listing.model,
      year: listing.year,
      mileage: listing.mileage,
      price: listing.price,
      engine: listing.engine,
      engineCapacity: listing.engineCapacity,
      power: listing.power,
      fuelType: listing.fuelType,
      transmission: listing.transmission,
      drivetrain: listing.drivetrain,
      images: listing.images.length,
    });

    // 2. Analiza AI
    const completion = await openai.chat.completions.create({
      model: "gpt-5-mini",

      response_format: {
        type: "json_object",
      },

      messages: [
        {
          role: "system",

          content: `
Jesteś AMBSAI - profesjonalnym ekspertem od zakupu samochodów używanych.

Analizujesz samochód jak niezależny rzeczoznawca przed zakupem.

ZASADY:

- Nie wymyślaj danych.
- Nie zgaduj danych technicznych konkretnego egzemplarza.
- Jeżeli informacji nie ma w przekazanych danych, wpisz "brak danych".
- Jeżeli informacja znajduje się w danych ogłoszenia, MUSISZ ją wykorzystać.
- Nie powtarzaj pytań, jeżeli odpowiedź znajduje się już w ogłoszeniu.
- Szukaj realnych ryzyk zakupu.
- Szukaj typowych problemów danego modelu.
- Podawaj realistyczne widełki kosztów.
- Podawaj konkretne argumenty do negocjacji.
- Oddzielaj informacje potwierdzone w ogłoszeniu od potencjalnych problemów typowych dla modelu.
- Nie traktuj typowej awarii modelu jako potwierdzonej awarii tego konkretnego samochodu.

Zwróć TYLKO poprawny JSON w strukturze:

{
  "score": 0,
  "decision": {
    "status": "KUP",
    "reason": ""
  },
  "listingQuality": {
    "score": 0,
    "missingInformation": []
  },
  "car": {
    "brand": "",
    "model": "",
    "year": "",
    "engine": "",
    "mileage": "",
    "price": ""
  },
  "technicalCondition": 0,
  "riskLevel": {
    "level": "niski",
    "reason": ""
  },
  "failures": [
    {
      "title": "",
      "risk": "niski",
      "cost": "",
      "priority": "niski",
      "description": ""
    }
  ],
  "costs": [
    {
      "title": "",
      "price": "",
      "period": "",
      "description": "",
      "priority": "niski"
    }
  ],
  "sellerQuestions": [
    {
      "question": "",
      "importance": "niska",
      "why": ""
    }
  ],
  "inspectionChecklist": [
    {
      "item": "",
      "why": "",
      "important": true
    }
  ],
  "documentsToCheck": [],
  "negotiationPoints": [
    {
      "problem": "",
      "argument": "",
      "estimatedDiscount": "",
      "importance": "niska"
    }
  ],
  "pros": [],
  "cons": [],
  "recommendation": ""
}
`,
        },

        {
          role: "user",

          content: `
Przeanalizuj poniższe rzeczywiste dane ogłoszenia samochodu.

ŹRÓDŁO:
${listing.source}

URL:
${listing.url}

TYTUŁ OGŁOSZENIA:
${listing.title || "brak danych"}

DANE POJAZDU:

Marka:
${listing.brand || "brak danych"}

Model:
${listing.model || "brak danych"}

Rok:
${listing.year || "brak danych"}

Przebieg:
${listing.mileage || "brak danych"}

Cena:
${listing.price || "brak danych"} ${listing.currency || ""}

Silnik:
${listing.engine || "brak danych"}

Pojemność:
${listing.engineCapacity || "brak danych"}

Moc:
${listing.power || "brak danych"}

Paliwo:
${listing.fuelType || "brak danych"}

Skrzynia:
${listing.transmission || "brak danych"}

Napęd:
${listing.drivetrain || "brak danych"}

Kraj pochodzenia:
${listing.countryOfOrigin || "brak danych"}

Status rejestracji:
${listing.registrationStatus || "brak danych"}

OPIS OGŁOSZENIA:

${listing.description || "brak danych"}

ZDJĘCIA:

Liczba znalezionych zdjęć:
${listing.images.length}

${listing.images
  .map((image, index) => `${index + 1}. ${image}`)
  .join("\n")}

DODATKOWY TEKST STRONY:

${listing.rawText.slice(0, 30000)}

INSTRUKCJE ANALIZY:

Wykorzystaj wszystkie dostępne informacje.

Jeżeli rok, przebieg, cena, silnik, moc, paliwo,
skrzynia lub napęd są podane powyżej,
NIE wpisuj "brak danych".

Jeżeli jakaś informacja nie jest dostępna,
dopiero wtedy wpisz "brak danych".

Sprawdź:

1. Dane pojazdu.
2. Jakość ogłoszenia.
3. Stan techniczny.
4. Typowe awarie tego modelu.
5. Ryzyko zakupu.
6. Koszty po zakupie.
7. Pytania do sprzedającego.
8. Dokumenty do sprawdzenia.
9. Checklistę oględzin.
10. Argumenty negocjacyjne.
11. Mocne i słabe strony.
12. Końcową decyzję KUP / NEGOCJUJ / ODPUŚĆ.

WAŻNE:

Typowe problemy modelu nie oznaczają,
że występują w tym konkretnym egzemplarzu.

Nie przedstawiaj przypuszczenia jako faktu.

Jeżeli dane ogłoszenia są sprzeczne,
zaznacz sprzeczność w raporcie.

Przygotuj pełny raport AMBSAI.
`,
        },
      ],
    });

    // 3. Odczyt odpowiedzi AI
    const content =
      completion.choices[0]?.message?.content;

    if (!content) {
      throw new Error("AI nie zwróciło odpowiedzi");
    }

    const parsedJSON = JSON.parse(content);

    // 4. Walidacja Zod
    const validation =
      AnalysisReportSchema.safeParse(parsedJSON);

    if (!validation.success) {
      console.error(
        "AI RESPONSE VALIDATION ERROR:",
        validation.error
      );

      return NextResponse.json(
        {
          error:
            "AI zwróciło niepoprawny format raportu",
        },
        { status: 500 }
      );
    }

    const analysis = validation.data;

    // 5. Supabase INSERT
    const { error: databaseError } =
      await supabase
        .from("car_analyses")
        .insert({
          car_url: url,
          brand: analysis.car.brand,
          model: analysis.car.model,
          year: analysis.car.year,
          engine: analysis.car.engine,
          mileage: analysis.car.mileage,
          price: analysis.car.price,
          score: analysis.score,
          decision: analysis.decision.status,
          risk_level: analysis.riskLevel.level,
          analysis_json: analysis,
        });

    if (databaseError) {
      console.error(
        "SUPABASE INSERT ERROR:",
        databaseError
      );

      return NextResponse.json(
        {
          error: "Nie udało się zapisać analizy",
        },
        { status: 500 }
      );
    }

    // 6. Odpowiedź
    return NextResponse.json({
      success: true,
      analysis,
    });
  } catch (error: any) {
    console.error("ANALYZE ERROR:", error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Błąd analizy AI",
      },
      { status: 500 }
    );
  }
}