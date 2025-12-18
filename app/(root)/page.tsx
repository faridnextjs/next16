import TestClient from "@/components/testClient";

export default function Home() {
  console.log("I am Server Component");
  return (
    <main>
      <h1>Welcome to the Next.js 16 (Stable) Showdown</h1>
      <TestClient />
    </main>
  );
}
