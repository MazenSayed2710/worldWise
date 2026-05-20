import Image from "next/image";
import Info from "../pricing/info";

export default function page() {
  return (
    <div className="bg-zinc-800 h-full flex items-center justify-center gap-10 p-10">
      <Image
        src="/img-1.jpg"
        width={400}
        height={400}
        alt="Pricing illustration"
        className=" rounded-md"
      />
      <Info heading={"About WorldWide."}>
        Explore our comprehensive pricing options designed to fit every budget.
        Choose the plan that works best for you and unlock premium features. We
        offer flexible payment terms and dedicated customer support for all
        plans.
      </Info>
    </div>
  );
}
