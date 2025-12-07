const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  console.log(children);
  return (
    <main>
      <h1 className="text-5xl text-red-500 text-center">
        Dashboard Layout Stable
      </h1>
      {children}
    </main>
  );
};
export default Layout;
