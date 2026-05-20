import Image from "next/image";
import Info from "./info";

export default function page() {
  return (
    <div className="bg-zinc-800 h-full flex items-center justify-center gap-10 p-10">
      <Info heading={"Simple pricing. Just $9/month."}>
        Everything you need to track your adventures around the world.
      </Info>
      <Image
        src="/img-2.jpg"
        width={400}
        height={400}
        alt="Pricing illustration"
        className=" rounded-md"
      />
    </div>
  );
}
