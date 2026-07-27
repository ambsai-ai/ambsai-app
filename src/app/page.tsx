import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchBox from "@/components/SearchBox";
import HowItWorks from "@/components/HowItWorks";
import AIDemo from "@/components/AIDemo";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <SearchBox />
      <HowItWorks />
      <AIDemo />
    </main>
  );
}