import React from "react";
import './Tailwind.css'
// import   './public/vite.svg'
// Place your train image in public/images/train.jpg or change the path below
const TRAIN_IMG = "/images/train.jpg";

export default function TrainBookingPage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">TrainBook</h1>
          <p className="text-blue-100">Book your journey with ease</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200">
            Login
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 mt-4">
            Don't have an account? <a href="./Register.jsx" className="text-blue-600 hover:underline font-semibold">Sign up</a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
