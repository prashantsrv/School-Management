import Image from "next/image";
import ShowSchool from "./school/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-zinc-100 flex flex-col items-center justify-center px-4 text-center font-sans">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
        Empowering Education, One Click at a Time
      </h1>
      <p className="text-lg md:text-xl text-zinc-700 mb-6 max-w-xl">
        Discover your school’s journey with our intuitive management system. Simple, smart, and scalable.
      </p>
     
      <Link
        href="/school"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
      >
        Show School
      </Link>
    </div>
  );
}

