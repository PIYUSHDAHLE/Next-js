import Link from "next/link";

export default async function Home(props) {
  console.log(props);
  console.log(await props.searchParams);
  console.log(await props.params);

  // http://localhost:3000/?name=piysuh&age=25

  return (
    <>
      <h1> home page</h1>{" "}
      <p>Welcome to the home page!</p>
      <br />
      <Link href="/services">Go to Services</Link>
      <br />
      <Link href="/about">Go to About</Link>
      <br />
      <Link href="/blog">Go to Blog</Link>
    </>
  );
}
