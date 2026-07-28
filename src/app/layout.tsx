import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "AMBSAI - AI Vehicle Intelligence",
  description: "Inteligentny asystent zakupu samochodów AI",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="pl">

      <body className="bg-black text-white">


        <header className="border-b border-zinc-800 bg-black/90 backdrop-blur">


          <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">


            <Link
              href="/"
              className="text-2xl font-bold text-orange-500"
            >
              🚗 AMBSAI
            </Link>



            <nav className="flex gap-6 text-sm text-gray-300">


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
                🚗 Historia
              </Link>



              <Link
                href="/baza"
                className="hover:text-orange-400 transition"
              >
                📚 Baza aut
              </Link>


            </nav>


          </div>


        </header>



        {children}


      </body>

    </html>

  );

}