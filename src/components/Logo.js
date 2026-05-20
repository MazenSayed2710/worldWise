import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="WorldWise Logo"
          width={200}
          height={200}
          className="rounded-full max-w-52 max-h-12"
        />
      </Link>
    </div>
  );
}
