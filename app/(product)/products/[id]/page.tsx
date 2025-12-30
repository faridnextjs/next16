const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const response = await params,
    id = response.id;

  return (
    <section>
      <h1>
        User id is : <span className="text-red-500">{id}</span>
      </h1>
    </section>
  );
};
export default Page;
