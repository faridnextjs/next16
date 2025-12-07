import Link from "next/link";

const Page = () => {
  console.log("Page Dashboard / Users");
  return (
    <section>
      <h1>Page Dashboard / Users</h1>
      <ul>
        <li>
          <Link href="/dashboard/users/user-1">User 1</Link>{" "}
        </li>
        <li>
          <Link href="/dashboard/users/user-2">User 2</Link>{" "}
        </li>
        <li>
          <Link href="/dashboard/users/user-3">User 3</Link>{" "}
        </li>
        <li>
          <Link href="/dashboard/users/user-4">User 4</Link>{" "}
        </li>
        <li>
          <Link href="/dashboard/users/user-5">User 5</Link>{" "}
        </li>
      </ul>
    </section>
  );
};
export default Page;
