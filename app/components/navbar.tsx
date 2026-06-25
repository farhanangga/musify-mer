"use client";

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">
            Musify
          </h1>

          <p className="text-sm opacity-70">
            Music Emotion Recognition 
          </p>
        </div>
      </div>
    </nav>
  );
}