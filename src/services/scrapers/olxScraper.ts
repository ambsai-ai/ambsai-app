import type { ListingData } from "../listingScraper";

function cleanText(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\s+/g, " ").trim();
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
    `<meta[^>]+(?:property|name)=["']${escaped}["'][^>]+content=["']([^"']*)["']`,
    "i"
  );

  return cleanText(html.match(regex)?.[1]);
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

function findYear(text: string): string {
  return (
    text.match(/\b(19[8-9]\d|20[0-2]\d)\b/)?.[1] ?? ""
  );
}

function findMileage(text: string): string {
  const match = text.match(
    /(\d[\d\s.]*)\s*(?:km|tys\.?\s*km|tyś\.?\s*km)\b/i
  );

  if (!match) {
    return "";
  }

  return `${match[1].trim()} km`;
}

function findPrice(text: string): string {
  const match = text.match(
    /(\d[\d\s.]*)\s*(?:zł|PLN)\b/i
  );

  return match?.[0]?.trim() ?? "";
}

export async function scrapeOlxListing(
  url: string
): Promise<ListingData> {
const response = await fetch(url, {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",

    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",

    "Accept-Language":
      "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7",

    Referer:
      "https://www.olx.pl/",

    "Cache-Control":
      "no-cache",

    Pragma:
      "no-cache",
  },

  cache: "no-store",
});

  if (!response.ok) {
  const errorText = await response.text();

  console.error(
    "AMBSAI OLX ERROR:",
    {
      status: response.status,
      statusText: response.statusText,
      body: errorText.slice(0, 3000),
    }
  );

  throw new Error(
    `Nie udało się pobrać OLX. HTTP ${response.status}`
  );
}

  const html = await response.text();

  const bodyText =
    extractBodyText(html);

    console.log(
  "AMBSAI OLX BODY TEXT:",
  bodyText.slice(0, 20000)
);

  const title =
    extractMeta(html, "og:title") ||
    extractMeta(html, "twitter:title");

  const description =
    extractMeta(html, "description") ||
    extractMeta(html, "og:description");

  const image =
    extractMeta(html, "og:image");

  const year =
    findYear(bodyText);

  const mileage =
    findMileage(bodyText);

  const price =
    findPrice(bodyText);

  const result: ListingData = {
    source: "olx",
    url,

    title,

    brand: "",
    model: "",

    year,
    mileage,
    price,
    currency: "PLN",

    engine: "",
    engineCapacity: "",
    power: "",
    fuelType: "",
    transmission: "",
    drivetrain: "",

    countryOfOrigin: "",
    registrationStatus: "",

    description,

    equipment: [],

    images: image ? [image] : [],

    rawText: bodyText,
  };

  console.log(
    "AMBSAI OLX SCRAPER RESULT:",
    result
  );

  return result;
}