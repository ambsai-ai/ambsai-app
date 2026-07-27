export default function Header() {
  return (
    <header className="p-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-orange-500">
        AMBSAI
      </h1>

      <nav className="space-x-6 text-gray-300">
        <span>Analiza AI</span>
        <span>Raporty</span>
      </nav>
    </header>
  );
}