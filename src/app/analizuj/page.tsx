"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Analizuj() {

  const router = useRouter();


  useEffect(() => {

    router.replace("/");

  }, [router]);



  return (

    <main className="min-h-screen bg-black text-white flex items-center justify-center">

      <p className="text-gray-400">
        Przenoszenie do analizy AI...
      </p>

    </main>

  );

}