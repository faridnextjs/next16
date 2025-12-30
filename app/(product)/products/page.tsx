import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <section>
      <h1>Product Page</h1>
      <ul>
        <li>
          <Link href="/products/1">Product 1</Link>
        </li>{" "}
        <li>
          <Link href="/products/2">Product 2</Link>
        </li>{" "}
        <li>
          <Link href="/products/3">Product 3</Link>
        </li>{" "}
        <li>
          <Link href="/products/4">Product 4</Link>
        </li>{" "}
        <li>
          <Link href="/products/5">Product 5</Link>
        </li>{" "}
        <li>
          <Link href="/products/6">Product 6</Link>
        </li>
      </ul>
    </section>
  );
};
export default Page;
