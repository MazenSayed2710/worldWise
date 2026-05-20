"use client";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-8 py-4 fixed left-0 w-full h-20">
      <Logo />

      {/* Navigation Links */}
      <nav className="flex items-center gap-8">
        <Link
          href="/pricing"
          className={` hover:text-green-800 font-medium transition ${pathname === "/pricing" ? "text-green-800" : "text-gray-100"}`}
        >
          Pricing
        </Link>
        <Link
          href="/products"
          className={` hover:text-green-800 font-medium transition ${pathname === "/products" ? "text-green-800" : "text-gray-100"}`}
        >
          Products
        </Link>
        <Button href="/login">Login</Button>
      </nav>
    </header>
  );
}
