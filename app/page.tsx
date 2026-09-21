import ClientTest from "@/components/clientTest";

const Home = () => {
  console.log("I'm a server component. I was rendered in the server. Pre-rendered at build time on the server.");
  return (
    <main>
      <h1 className="text-3xl font-bold text-center my-10 dark:text-white">Home</h1>
      <ClientTest />
    </main>
  )
}
export default Home;