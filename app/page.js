import Image from "next/image";
import ShowSchool from "./school/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <Link href={'/school'}>
    Show School
    </Link>
      
    </div>
  );
}
