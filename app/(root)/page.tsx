import TestClient from "@/components/testClient";
import localFont from "next/font/local";

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "300 400 500 600 700",
});

export default function Home() {
  console.log("I am Server Component");
  return (
    <>
      <h1 className={`${spaceGrotesk.className}`}>
        Welcome to the Ultimate Next.js 16 (Stable) Showdown (Space Grotesk)
      </h1>
      <p className="text-violet-500">Google Sans Flex (Google Sans Flex)</p>
      <TestClient />
    </>
  );
}
