import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <section>
      <h1>Checkout page</h1>
      <ul>
        <li>
          <Link href="/checkout/1">Item 1</Link>
        </li>
        <li>
          <Link href="/checkout/2">Item 2</Link>
        </li>
        <li>
          <Link href="/checkout/3">Item 3</Link>
        </li>
        <li>
          <Link href="/checkout/4">Item 4</Link>
        </li>
        <li>
          <Link href="/checkout/5">Item 5</Link>
        </li>
      </ul>
    </section>
  );
};
export default Page;
