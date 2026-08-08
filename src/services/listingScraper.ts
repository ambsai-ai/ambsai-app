import { scrapeOlxListing } from "./scrapers/olxScraper";

export interface ListingData {
  source: string;
  url: string;

  title: string;

  brand: string;
  model: string;
  year: string;
  mileage: string;
  price: string;
  currency: string;

  engine: string;
  engineCapacity: string;
  power: string;
  fuelType: string;
  transmission: string;
  drivetrain: string;

  countryOfOrigin: string;
  registrationStatus: string;

  description: string;
  equipment: string[];

  images: string[];

  rawText: string;
}

function cleanText(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(/\s+/g, " ")
    .trim();
}

function firstNonEmpty(...values: unknown[]): string {
  for (const value of values) {
    const cleaned = cleanText(value);

    if (cleaned) {
      return cleaned;
    }
  }

  return "";
}

function extractJsonLd(html: string): unknown[] {
  const results: unknown[] = [];

  const regex =
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;

  let match: RegExpExecArray | null;

  while ((match = regex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1]);

      if (Array.isArray(parsed)) {
        results.push(...parsed);
      } else {
        results.push(parsed);
      }
    } catch {
      // Niektóre strony mają uszkodzony JSON-LD.
    }
  }

  return results;
}

function extractNextData(html: string): unknown | null {
  const match = html.match(
    /<script[^>]*id=["']__NEXT_DATA__["'][^>]*>([\s\S]*?)<\/script>/i
  );

  if (!match) {
    return null;
  }

  try {
    return JSON.parse(match[1]);
  } catch {
    return null;
  }
}

function extractMeta(
  html: string,
  property: string
): string {
  const escaped = property.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );

  const regex = new RegExp(
    `<meta[^>]+(?:property|name)=["']${escaped}["'][^>]+content=["']([^"']*)["'][^>]*>`,
    "i"
  );

  const match = html.match(regex);

  return cleanText(match?.[1]);
}

function extractBodyText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function findJsonLdVehicle(data: unknown[]): any {
  for (const item of data) {
    if (!item || typeof item !== "object") {
      continue;
    }

    const object = item as Record<string, unknown>;

    const type = object["@type"];

    if (
      type === "Vehicle" ||
      type === "Car" ||
      type === "Product"
    ) {
      return object;
    }

    if (Array.isArray(type)) {
      if (
        type.includes("Vehicle") ||
        type.includes("Car") ||
        type.includes("Product")
      ) {
        return object;
      }
    }

    // Niektóre strony chowają dane w @graph.
    if (Array.isArray(object["@graph"])) {
      const graphResult = findJsonLdVehicle(
        object["@graph"]
      );

      if (graphResult) {
        return graphResult;
      }
    }
  }

  return null;
}

function extractImages(
  jsonLdVehicle: any,
  html: string
): string[] {
  const images: string[] = [];

  if (jsonLdVehicle?.image) {
    if (Array.isArray(jsonLdVehicle.image)) {
      images.push(
        ...jsonLdVehicle.image.filter(
          (image: unknown): image is string =>
            typeof image === "string"
        )
      );
    } else if (
      typeof jsonLdVehicle.image === "string"
    ) {
      images.push(jsonLdVehicle.image);
    }
  }

  const ogImage = extractMeta(
    html,
    "og:image"
  );

  if (ogImage) {
    images.push(ogImage);
  }

  return [
    ...new Set(images),
  ].filter(Boolean);
}

function detectSource(url: string): string {
  try {
    const hostname =
      new URL(url).hostname.toLowerCase();

    if (hostname.includes("otomoto.pl")) {
      return "otomoto";
    }

    if (hostname.includes("olx.pl")) {
      return "olx";
    }

    if (hostname.includes("facebook.com")) {
      return "facebook";
    }

    return hostname;
  } catch {
    return "unknown";
  }
}

function findYear(text: string): string {
  const match = text.match(
    /\b(19[8-9]\d|20[0-2]\d)\b/
  );

  return match?.[1] ?? "";
}

function findMileage(text: string): string {
  const patterns = [
    /(\d[\d\s.]*)\s*(?:km|tys\.?\s*km|tyś\.?\s*km)\b/i,
    /przebieg[:\s]+(\d[\d\s.]*)/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);

    if (match?.[1]) {
      const value = match[1]
        .replace(/\s+/g, " ")
        .trim();

      return `${value} km`;
    }
  }

  return "";
}

function findPrice(text: string): string {
  const patterns = [
    /(\d[\d\s.]*)\s*(zł|PLN)\b/i,
    /cena[:\s]+(\d[\d\s.]*)/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);

    if (match?.[0]) {
      return match[0].trim();
    }
  }

  return "";
}

function findPower(text: string): string {
  const patterns = [
    /\b(\d{2,4})\s*(?:KM|koni|kW)\b/i,
    /\bmoc[:\s]+(\d{2,4})\s*(?:KM|kW)?\b/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);

    if (match?.[0]) {
      return match[0].trim();
    }
  }

  return "";
}

function findEngineCapacity(text: string): string {
  const patterns = [
    /\b(\d[.,]\d)\s*(?:l|L)\b/i,
    /\b(\d{3,5})\s*cm[³3]\b/i,
    /\bpojemność[:\s]+(\d[.,]?\d?)\s*(?:l|L|cm[³3])?\b/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);

    if (match?.[0]) {
      return match[0].trim();
    }
  }

  return "";
}

function findBrand(
  vehicle: any,
  title: string,
  text: string
): string {
  const fromJson = firstNonEmpty(
    vehicle?.brand?.name,
    vehicle?.brand
  );

  if (fromJson) {
    return fromJson;
  }

  const knownBrands = [
    "Mercedes-Benz",
    "Mercedes",
    "BMW",
    "Audi",
    "Volkswagen",
    "Volvo",
    "Toyota",
    "Lexus",
    "Porsche",
    "Ford",
    "Opel",
    "Renault",
    "Peugeot",
    "Citroën",
    "Skoda",
    "Škoda",
    "Seat",
    "Hyundai",
    "Kia",
    "Nissan",
    "Mazda",
    "Honda",
    "Tesla",
    "Jeep",
    "Land Rover",
    "Jaguar",
    "Maserati",
    "Alfa Romeo",
    "Fiat",
    "Dacia",
    "Subaru",
    "Suzuki",
  ];

  const searchText =
    `${title} ${text}`;

  const found = knownBrands.find(
    (brand) =>
      new RegExp(
        `\\b${brand.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
        "i"
      ).test(searchText)
  );

  return found ?? "";
}

function findModel(
  vehicle: any,
  brand: string,
  title: string
): string {
  const fromJson = firstNonEmpty(
    vehicle?.model,
    vehicle?.vehicleModel?.name
  );

  if (fromJson) {
    return fromJson;
  }

  if (brand) {
    const cleanedTitle = title
      .replace(
        new RegExp(
          brand.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
          "i"
        ),
        ""
      )
      .trim();

    const match = cleanedTitle.match(
      /\b(GLC|GLE|GLA|GLB|CLA|A-Class|C-Class|E-Class|S-Class|3 Series|5 Series|7 Series|A4|A5|A6|A8|Q3|Q5|Q7|Q8)\b/i
    );

    if (match?.[1]) {
      return match[1];
    }
  }

  return "";
}

export async function scrapeListing(
   url: string
): Promise<ListingData> {

    const hostname =
    new URL(url).hostname.toLowerCase();

  if (hostname.includes("olx.pl")) {
    return scrapeOlxListing(url);
  }

  const parsedUrl = new URL(url);

  const response = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0 Safari/537.36",

      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",

      "Accept-Language":
        "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7",

      "Cache-Control":
        "no-cache",
    },

    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Nie udało się pobrać ogłoszenia. HTTP ${response.status}`
    );
  }

  const html = await response.text();

  const jsonLd =
    extractJsonLd(html);

  const jsonLdVehicle =
    findJsonLdVehicle(jsonLd);

  const nextData =
    extractNextData(html);

    console.log(
  "AMBSAI NEXT DATA:",
  JSON.stringify(nextData, null, 2).slice(0, 30000)
);

  const bodyText =
    extractBodyText(html);

  const title =
    firstNonEmpty(
      jsonLdVehicle?.name,
      extractMeta(html, "og:title"),
      parsedUrl.pathname
    );

  const brand =
    findBrand(
      jsonLdVehicle,
      title,
      bodyText
    );

  const model =
    findModel(
      jsonLdVehicle,
      brand,
      title
    );

  const year =
    firstNonEmpty(
      jsonLdVehicle?.vehicleModelDate,
      jsonLdVehicle?.productionDate,
      findYear(bodyText)
    );

  const mileage =
    firstNonEmpty(
      jsonLdVehicle
        ?.mileageFromOdometer
        ?.value
        ? `${jsonLdVehicle.mileageFromOdometer.value} km`
        : "",
      findMileage(bodyText)
    );

  const price =
    firstNonEmpty(
      jsonLdVehicle?.offers?.price
        ? `${jsonLdVehicle.offers.price}`
        : "",
      findPrice(bodyText)
    );

  const currency =
    firstNonEmpty(
      jsonLdVehicle?.offers?.priceCurrency,
      "PLN"
    );

  const engine =
    firstNonEmpty(
      jsonLdVehicle?.vehicleEngine?.name,
      typeof jsonLdVehicle?.vehicleEngine ===
        "string"
        ? jsonLdVehicle.vehicleEngine
        : ""
    );

  const engineCapacity =
    findEngineCapacity(bodyText);

  const power =
    findPower(bodyText);

  const fuelType =
    firstNonEmpty(
      jsonLdVehicle?.fuelType
    );

  const transmission =
    firstNonEmpty(
      jsonLdVehicle?.vehicleTransmission
    );

  const drivetrain =
    firstNonEmpty(
      jsonLdVehicle?.driveWheelConfiguration
    );

  const countryOfOrigin =
    firstNonEmpty(
      jsonLdVehicle?.countryOfOrigin?.name,
      jsonLdVehicle?.countryOfOrigin
    );

  const description =
    firstNonEmpty(
      jsonLdVehicle?.description,
      extractMeta(html, "description")
    );

  const images =
    extractImages(
      jsonLdVehicle,
      html
    );

  const rawText =
    nextData
      ? `${bodyText}\n\nNEXT_DATA:\n${JSON.stringify(
          nextData
        ).slice(0, 20000)}`
      : bodyText;

  console.log(
    "AMBSAI SCRAPER RESULT:",
    {
      source: detectSource(url),
      title,
      brand,
      model,
      year,
      mileage,
      price,
      currency,
      engine,
      engineCapacity,
      power,
      fuelType,
      transmission,
      drivetrain,
      countryOfOrigin,
      images: images.length,
    }
  );

  return {
    source: detectSource(url),
    url,

    title,

    brand,
    model,
    year,
    mileage,
    price,
    currency,

    engine,
    engineCapacity,
    power,
    fuelType,
    transmission,
    drivetrain,

    countryOfOrigin,
    registrationStatus: "",

    description,

    equipment: [],

    images,

    rawText,
  };
}