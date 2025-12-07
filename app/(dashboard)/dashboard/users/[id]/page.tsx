const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log("Page Dashboard / Users / ", id);
  return <section>Page {id}</section>;
};
export default Page;
