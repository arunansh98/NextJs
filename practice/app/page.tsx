import Link from "next/link";

export default function Home() {
  return (
    <>
      Home Page !
      <p>
        <Link href="./users">Link to Users Page</Link>
      </p>
    </>
  );
}
