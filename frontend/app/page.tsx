import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/todo">Go to ToDo List</Link>
    </div>
  );
}