import TokenTable from "@/components/tokens/Table";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <h1 className="text-2xl font-bold p-6">Token Discovery</h1>
      <TokenTable />
    </main>
  );
}
