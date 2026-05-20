import { signIn } from "@/auth";
import { FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  return (
    <form
      className="space-y-4"
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
      }}
    >
      {/* Google Sign In Button */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg text-sm transition transform hover:scale-105 active:scale-95 duration-200 border border-gray-300"
      >
        <FaGoogle className="w-4 h-4" />
        Sign in with Google
      </button>
    </form>
  );
}
