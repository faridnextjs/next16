import TestClient from "@/components/testClient";

export default function Home() {
    console.log("I am Server Component");
    return (
        <main>
 Main   Page
            <TestClient />
        </main>
    );
}
