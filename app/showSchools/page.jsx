"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  

  useEffect(() => {
    const getData = async () => {
    const res = await fetch("/api/schools/list");
    const data = await res.json();
    setSchools(data.school);
  };
    getData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {schools.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow rounded">
            <img  src={`/schoolImages/${item.image}`} className="w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-bold mt-3">School name - {item.name}</h3>
            <p className="text-gray-600">{item.address}</p>
            <p className="text-gray-700 font-medium">{item.city}</p>
          </div>
        ))}
      </div>
    </>
  );
}
