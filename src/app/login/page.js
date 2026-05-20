import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="h-full bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-1">Welcome Back</h1>
          <p className="text-sm text-gray-400">
            Sign in to your WorldWise account
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-2xl">
          <LoginForm />
        </div>

        {/* Footer Links */}
        <div className="text-center mt-6">
          <p className="text-gray-400">
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="text-green-700 hover:text-green-600 font-medium transition"
            >
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
