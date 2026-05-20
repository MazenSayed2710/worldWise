import { auth } from "@/auth";
import Button from "./Button";

export default async function Hero() {
  const session = await auth();
  console.log(session);
  return (
    <section
      className="flex items-center justify-center h-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/bg.jpg")',
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold mb-6">
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>

        {/* Subheading */}
        <p className="text-lg mb-10 leading-relaxed">
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </p>

        {/* CTA Button */}
        <Button href={session?.user ? "/map/cities" : "/login"}>
          Start Tracking now
        </Button>
      </div>
    </section>
  );
}
