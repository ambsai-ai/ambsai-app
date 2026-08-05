"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function AnalizujPage() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const service = useMemo(() => {
    const u = url.toLowerCase();
    if (u.includes("otomoto")) return "Otomoto";
    if (u.includes("olx")) return "OLX";
    if (u.includes("sprzedajemy")) return "Sprzedajemy";
    return null;
  }, [url]);

  const valid = /^https?:\/\//i.test(url);

  async function analyze() {
    if (!valid) return;
    setLoading(true);
    setTimeout(() => {
      router.push("/raport?url=" + encodeURIComponent(url));
    }, 1200);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center">
          🤖 Analiza ogłoszenia AI
        </h1>

        <p className="text-center text-gray-400 mt-6">
          Wklej link z Otomoto, OLX lub Sprzedajemy.
        </p>

        <div className="mt-12 rounded-3xl border border-orange-500/30 bg-zinc-900 p-8">
          <label className="block mb-3 text-lg font-semibold">
            Link do ogłoszenia
          </label>

          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.otomoto.pl/..."
            className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-orange-500"
          />

          <div className="mt-4 text-sm text-gray-400">
            Wykryty serwis:{" "}
            <span className="text-orange-400 font-semibold">
              {service ?? "Nie rozpoznano"}
            </span>
          </div>

          <button
            disabled={!valid || loading}
            onClick={analyze}
            className="mt-8 w-full rounded-xl bg-orange-500 py-4 font-bold text-black disabled:opacity-50"
          >
            {loading ? "Analizowanie..." : "Analizuj AI"}
          </button>
        </div>

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-bold mb-4">Raport będzie zawierał:</h2>
          <ul className="space-y-2 text-gray-300">
            <li>✅ Dane techniczne</li>
            <li>✅ Typowe usterki</li>
            <li>✅ Koszty napraw</li>
            <li>✅ Spalanie</li>
            <li>✅ Na co zwrócić uwagę</li>
            <li>✅ Pytania do sprzedającego</li>
            <li>✅ Werdykt AI</li>
          </ul>
        </div>
      </div>
    </main>
  );
}