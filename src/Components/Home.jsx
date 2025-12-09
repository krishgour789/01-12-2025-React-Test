import React from 'react'
import './Tailwind.css'

const Home = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400">
        {/* Header */}
        <header className="bg-white shadow">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">TrainBook</h1>
                <div className="space-x-4">
                    <button className="text-gray-700 hover:text-blue-600">Home</button>
                    <button className="text-gray-700 hover:text-blue-600">Bookings</button>
                    <button className="text-gray-700 hover:text-blue-600">Contact</button>
                </div>
            </nav>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16 text-white">
            <h2 className="text-4xl font-bold mb-4">Book Your Train Tickets Today</h2>
            <p className="text-lg mb-8">Find and book trains across the country easily</p>

            {/* Search Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input type="text" placeholder="From" className="border rounded px-4 py-2" />
                    <input type="text" placeholder="To" className="border rounded px-4 py-2" />
                    <input type="date" className="border rounded px-4 py-2" />
                    <button className="bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700">
                        Search Trains
                    </button>
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl mb-4">✓</div>
                        <h4 className="text-xl font-bold mb-2">Best Prices</h4>
                        <p className="text-gray-600">Get the best deals on train tickets</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-4">⚡</div>
                        <h4 className="text-xl font-bold mb-2">Quick Booking</h4>
                        <p className="text-gray-600">Book tickets in seconds</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-4">🔒</div>
                        <h4 className="text-xl font-bold mb-2">Secure Payment</h4>
                        <p className="text-gray-600">Safe and encrypted transactions</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p>&copy; 2024 TrainBook. All rights reserved.</p>
            </div>
        </footer>
    </div>
    </>
  )
}

export default Home
