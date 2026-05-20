import Link from "next/link";

export default function Button({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block bg-green-500 hover:bg-green-800 text-black uppercase  py-3 px-7 rounded-lg transition transform hover:scale-105"
    >
      {children}
    </Link>
  );
}
