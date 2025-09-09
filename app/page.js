import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1> home page</h1>{" "}
      <p>Welcome to the home page!</p>
      <br />
      <Link href="/services">Go to Services</Link>
      <br />
      <Link href="/about">Go to About</Link>
    </>
  );
}
