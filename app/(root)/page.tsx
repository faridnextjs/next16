import TestClient from "@/components/testClient";

export default function Home() {
  console.log("I am Server Component");
  return (
    <>
      <h1>Welcome to the Ultimate Next.js 16 (Stable) Showdown</h1>
      <TestClient />
    </>
  );
}
