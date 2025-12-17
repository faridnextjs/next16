"use server";
const Page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums"),
    albums = await response.json();
  return (
    <section>
      {albums.map((item: { id: number; title: string }) => (
        <article
          className="grid place-items-center place-content-center p-4"
          key={item.id}
        >
          <h1>Album title: {item.title}</h1>
          <p>Album ID: {item.id}</p>
        </article>
      ))}
    </section>
  );
};
export default Page;
