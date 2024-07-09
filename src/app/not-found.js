// pages/404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          Oops! The page you are looking for does not exist.
        </p>
        <Link href="/">
          <span className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            Go Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
