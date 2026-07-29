import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {

  title: "AMBSAI | AI Vehicle Intelligence",

  description:
    "AMBSAI - inteligentny asystent AI do analizy samochodów przed zakupem.",

  keywords: [
    "samochody",
    "analiza auta",
    "AI samochody",
    "zakup auta",
    "raport samochodu",
  ],

};




export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {



  return (

    <html lang="pl">


      <body className="bg-black text-white min-h-screen">



        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">


          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">





            <Link

              href="/"

              className="flex items-center gap-2 text-2xl font-bold text-orange-500 hover:text-orange-400 transition"

            >

              🚗 AMBSAI

            </Link>







            <nav className="hidden md:flex items-center gap-7 text-sm text-gray-300">





              <Link

                href="/"

                className="hover:text-orange-400 transition"

              >

                🏠 Start

              </Link>






              <Link

                href="/analizuj"

                className="hover:text-orange-400 transition"

              >

                🤖 Analizuj

              </Link>







              <Link

                href="/historia"

                className="hover:text-orange-400 transition"

              >

                📋 Historia

              </Link>







              <Link

                href="/baza"

                className="hover:text-orange-400 transition"

              >

                📚 Baza aut

              </Link>







              <Link

                href="/premium"

                className="px-4 py-2 rounded-xl bg-orange-500 text-black font-bold hover:bg-orange-400 transition"

              >

                ⭐ Premium

              </Link>






            </nav>





          </div>


        </header>






        <main>

          {children}

        </main>






        <footer className="border-t border-zinc-800 mt-20">


          <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-500 text-sm">


            🚗 AMBSAI © {new Date().getFullYear()}

            <br />

            AI Vehicle Intelligence


          </div>


        </footer>





      </body>


    </html>

  );

}