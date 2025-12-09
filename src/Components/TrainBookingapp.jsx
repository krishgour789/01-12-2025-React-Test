import React from "react";
import './Tailwind.css'
import   './public/vite.svg'
// Place your train image in public/images/train.jpg or change the path below
const TRAIN_IMG = "/images/train.jpg";

export default function TrainBookingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Hero area */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        {/* Left content */}
        <section className="px-8 py-12 lg:py-24 lg:px-20 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
              Hello Travellers
            </span>

            <h1 className="mt-8 text-4xl lg:text-6xl font-extrabold leading-tight">
              made your booking
              <br />
              experience easy!
            </h1>

            <p className="mt-6 max-w-xl text-sm text-slate-500">
              Train booking is a process of choosing and purchasing train seats online. It is an easy process but we are here to make it much better & simple.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
              <div>
                <label className="block text-xs text-slate-400 mb-2">From</label>
                <input
                  className="w-full border-b-2 border-slate-200 focus:outline-none focus:border-blue-400 py-2"
                  placeholder="NDLS, New Delhi Railway Station"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-2">To</label>
                <input
                  className="w-full border-b-2 border-slate-200 focus:outline-none focus:border-blue-400 py-2"
                  placeholder="LJN, Lucknow Junction"
                />
              </div>
            </div>

            <div className="mt-6 max-w-xl flex items-center gap-4">
              <div className="flex items-center gap-3 border rounded px-3 py-2 w-48">
                <div className="text-xs text-slate-400">Wed, 16 Nov 2022</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 px-6 font-semibold shadow-md">
                Search for trains
              </button>
            </div>
          </div>

          {/* Footer-style small links under hero left column when tall screens */}
          <div className="hidden lg:block mt-12 border-t pt-6">
            <div className="text-sm text-slate-400">NDLS, New Delhi Railway Station — LJN, Lucknow Junction</div>
          </div>
        </section>

        {/* Right image */}
        <aside className="relative h-80 lg:h-auto">
          <img src={vite.vg} alt="Train" className="object-cover w-full h-full" />

          {/* A thin left border like in design */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-600/90" />
        </aside>
      </main>

      {/* Blue footer newsletter area */}
      <footer className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="font-bold text-lg">Metroway</h3>
            <p className="mt-3 text-sm text-blue-100/80">About us</p>
            <p className="mt-1 text-sm text-blue-100/80">Mobile</p>
            <p className="mt-1 text-sm text-blue-100/80">Privacy</p>
          </div>

          <div>
            <h4 className="font-semibold">Planning your next trip?</h4>
            <p className="mt-2 text-sm text-blue-100/90">Subscribe to our newsletter. Get the latest travel trends & deals!</p>
          </div>

          <div className="flex flex-col justify-between">
            <form className="w-full flex items-center gap-3">
              <input
                placeholder="Enter Email ID"
                className="flex-1 bg-transparent border-b border-white/40 placeholder-white/60 py-2 focus:outline-none"
              />
              <button type="submit" className="p-2 rounded-full hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.94 2.94a.75.75 0 011.06 0l12 12a.75.75 0 11-1.06 1.06L2.94 4a.75.75 0 010-1.06z" />
                </svg>
              </button>
            </form>

            <div className="mt-6 flex gap-4 text-white/90">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.99 22 12z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.403a4.92 4.92 0 011.765 1.01 4.92 4.92 0 011.01 1.765c.163.459.35 1.258.403 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.428a4.92 4.92 0 01-1.01 1.765 4.92 4.92 0 01-1.765 1.01c-.459.163-1.258.35-2.428.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.403a4.92 4.92 0 01-1.765-1.01 4.92 4.92 0 01-1.01-1.765c-.163-.459-.35-1.258-.403-2.428C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.428a4.92 4.92 0 011.01-1.765 4.92 4.92 0 011.765-1.01c.459-.163 1.258-.35 2.428-.403C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.332.014 7.052.072 5.777.13 4.678.36 3.757.735 2.828 1.115 2.02 1.66 1.268 2.414c-.753.754-1.299 1.561-1.679 2.49C-.36 6.678-.13 7.777-.072 9.052.014 10.332 0 10.741 0 14s.014 3.668.072 4.948c.058 1.275.288 2.374.663 3.295.38.929.925 1.737 1.679 2.49.753.753 1.561 1.299 2.49 1.679.921.375 2.02.605 3.295.663C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.275-.058 2.374-.288 3.295-.663.929-.38 1.737-.925 2.49-1.679.753-.753 1.299-1.561 1.679-2.49.375-.921.605-2.02.663-3.295.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.275-.288-2.374-.663-3.295-.38-.929-.925-1.737-1.679-2.49-.753-.753-1.561-1.299-2.49-1.679-.921-.375-2.02-.605-3.295-.663C15.668.014 15.259 0 12 0z"/></svg>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500/60">
          <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-blue-100/80">© {new Date().getFullYear()} Metroway. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
