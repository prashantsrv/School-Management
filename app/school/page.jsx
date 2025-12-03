// 

"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function AddSchool() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setMsg("");

      const form = new FormData();

      Object.keys(data).forEach((key) => {
        if (key === "image") {
          // image is a FileList → take first file
          if (data.image && data.image[0]) {
            form.append("image", data.image[0]);
          }
        } else {
          form.append(key, data[key]);
        }
      });

      const res = await fetch("/api/schools/add", {
        method: "POST",
        body: form, 
      });

      const result = await res.json();
console.log("result",result);

      if (res.ok) {
        setMsg(result.message || "School added successfully.");
        reset(); // clear form
      } else {
        setMsg(result.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setMsg("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-lg mx-auto text-black mt-10 bg-gray-100 p-6 rounded shadow">
        <div className="flex justify-center">
          <h2 className="text-2xl font-semibold mb-5">Add School</h2>
        </div>

        {msg && <p className="text-black mb-4">{msg}</p>}

      
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-7">
          {/* School Name */}
          <div>
            <input
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              {...register("name", { required: true })}
              placeholder="School Name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">Name required</p>
            )}
          </div>

          {/* Address */}
          <div>
            <input
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              {...register("address", { required: true })}
              placeholder="Address"
            />
            {errors.address && (
              <p className="text-red-600 text-sm mt-1">Address required</p>
            )}
          </div>

          {/* City */}
          <div>
            <input
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              {...register("city", { required: true })}
              placeholder="City"
            />
            {errors.city && (
              <p className="text-red-600 text-sm mt-1">City required</p>
            )}
          </div>

          {/* State */}
          <div>
            <input
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              {...register("state", { required: true })}
              placeholder="State"
            />
            {errors.state && (
              <p className="text-red-600 text-sm mt-1">State required</p>
            )}
          </div>

          {/* Contact */}
          <div>
            <input
              type="tel"
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              {...register("contact", { required: true,
                  pattern: {
      value: /^[0-9]{10}$/,
      message: "Enter a valid 10-digit number",
    },
               })}
                 maxLength={10}
              placeholder="Contact"
            />
            {errors.contact && (
               <p className="text-red-600 text-sm mt-1">
    {errors.contact.message || "Contact required"}
  </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              {...register("email_id", {
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
              placeholder="Email"
            />
           
            {errors.email_id && (
              <p className="text-red-600 text-sm mt-1">
                Valid email required
              </p>
            )}
          </div>

          {/* Image */}
          <div>
            <input
              type="file"
              accept="image/*"
              className="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <p className="text-red-600 text-sm mt-1">Image required</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}