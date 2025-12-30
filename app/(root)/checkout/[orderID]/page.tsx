const Page = async ({ params }: { params: Promise<{ orderID: number }> }) => {
  const response = await params,
    id = response.orderID;

  return (
    <section>
      Order ID is: <span className="text-violet-500">{id}</span>
    </section>
  );
};
export default Page;
