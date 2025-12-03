
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow px-4 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

       
        <h1 className="text-2xl font-bold text-blue-600">SchoolApp</h1>

        
        <div className="hidden md:flex space-x-4">
          <Link
            href="/school"
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Add School
          </Link>

          <Link
            href="/showSchools"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View Schools
          </Link>
        </div>

       
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

     
      {open && (
        <div className="md:hidden mt-3 space-y-2 animate-fadeIn">

          <Link
            href="/addSchool"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 border rounded hover:bg-gray-100"
          >
            Add School
          </Link>

          <Link
            href="/showSchools"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View Schools
          </Link>

        </div>
      )}
    </nav>
  );
}
