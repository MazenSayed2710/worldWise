"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function User() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const response = await fetch("/api/auth/session");
      const data = await response.json();
      setSession(data);
      setLoading(false);
    };
    fetchSession();
  }, []);

  if (loading) return null;

  if (!session?.user) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 absolute top-4 right-4 bg-gray-700 p-2 rounded z-50">
      {session.user.image && (
        <Image
          src={session.user.image}
          alt={session.user.name || "User"}
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
      <span className="text-sm font-medium">{session.user.name}</span>
      <button
        onClick={() => signOut({ redirectTo: "/" })}
        className="ml-2 px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </div>
  );
}
