import Link from 'next/link';


export default function Page() {
  return (
  <>
  <h1>Hello World</h1>
  <Link href="/name">Name</Link>
  <Link href="/name/address">Address</Link>
  </>
  );
}