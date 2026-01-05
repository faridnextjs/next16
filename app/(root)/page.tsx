import TestClient from "@/components/testClient";
import localFont from "next/font/local";
import ExampleClient from "@/components/exampleClient";
import ExampleServer from "@/components/exampleServer";

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "300 400 500 600 700",
});

export default function Home() {
  console.log("I am Server Component");
  return (
    <>
      <h1 className={`${spaceGrotesk.className}`}>
        Welcome to the Ultimate Next.js 16 (Stable) Showdown (Space Grotesk)
      </h1>
      <p className="text-violet-500">Google Sans Flex (Google Sans Flex)</p>
      <TestClient />
      <ExampleClient />
      <ExampleServer />

      <p className="text-red-500">
        {" "}
        build time or compile time is the time period in which we, the
        developers, are compiling the code. Remember that npm run dev script?
        It&#39;s that command that generated the build of our application
        containing all the necessary static files, bundling, optimization,
        dependency resolution, and more.
      </p>
      <p className="text-red-500">
        {" "}
        runtime is the time period when a user is running our application&#39;s
        piece of code. 00:05:45 It&#39;s about handling user interaction, such
        as user input, responding to events, to data processing, such as
        accessing data and interacting with external 00:05:55 services or APIs.
      </p>
      <p className="text-red-500">
        That was the time period of an application, whereas RTE, or a runtime
        environment, is a specific environment in which a program or application
        runs during 00:06:17 its execution. 00:06:19 It provides a set of
        libraries, services, or runtime components that support the execution of
        the program. 00:06:25 So, Node.js, what is it? 00:06:29 It&#39;s a
        JavaScript runtime environment that allows us, developers, to run
        JavaScript code outside of the browser. 00:06:37 Similarly, Next.js
        provides two different runtime environments to execute our
        application&#39;s code. 00:06:44 The Node.js runtime, which is the
        default runtime that has access to all Node.js APIs in the ecosystem, as
        well as the edge runtime, 00:06:54 a lightweight runtime based on the
        web APIs with support to a limited subset of Node.js APIs.
      </p>
    </>
  );
}
