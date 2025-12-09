import React from 'react'
import './Tailwind.css'
const Register = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Train Booking</h1>
            <p className="text-gray-600 mb-6">Create your account to book tickets</p>
            
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" placeholder="+1 234567890" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                
                <div className="flex items-center">
                    <input type="checkbox" id="terms" className="w-4 h-4 text-blue-600" />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-600">I agree to the terms & conditions</label>
                </div>
                
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition">Register</button>
            </form>
            
            <p className="text-center text-gray-600 mt-4 text-sm">Already have an account? <a href="#" className="text-blue-600 hover:underline">Login</a></p>
        </div>
    </div>
    </>
  )
}

export default Register
