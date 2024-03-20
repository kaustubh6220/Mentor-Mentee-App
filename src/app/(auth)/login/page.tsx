"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image"; // Import Image component for displaying images

const roles = ["Admin", "Mentee", "Mentor", "Class Teacher"];

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    role: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/");
    } catch (error:any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email && user.password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user.email, user.password]);

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Container */}
      <div className="flex items-center justify-center w-full max-w-6xl"> {/* Increase the width */}
        {/* Left side: Authentication */}
        <div className="flex-1 max-w-md px-8 py-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              id="role"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="">Select Role</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Email"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Password"
            />
          </div>

          <div className="mt-6">
            <button
              onClick={onLogin}
              className={`w-full p-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md ${
                buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={buttonDisabled}
            >
              {loading ? "Processing" : "Login"}
            </button>
          </div>

          <div className="mt-4 text-center">
            <Link href="/signup" className="text-blue-500 hover:underline">
              Create an account
            </Link>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="hidden sm:block flex-1">
          <Image src="/assets/itbuilding.jpg" alt="Image" width={910} height={910} className="object-cover" /> {/* Adjusted image size */}
        </div>
      </div>
    </div>
  );
}
