import React, { useState, useEffect } from "react";
import Header from "../Header/Header";

const ComingSoon = () => {
  // Set your launch date here (Year, Month - 1, Day, Hour, Minute, Second)
  const launchDate = new Date(2025, 7, 1, 0, 0, 0); // August 1, 2025 midnight

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = launchDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null;
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <header className="bg-[#010100e9] shadow-2xl fixed top-0 right-0 left-0 z-20">
        <Header />
      </header>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-200 via-orange-400 to-orange-600 px-4">
        <h1 className="text-7xl font-extrabold text-white mb-6 animate-pulse drop-shadow-lg">
          🚧 Coming Soon 🚧
        </h1>
        <p className="text-white text-center max-w-xl mb-10 text-lg sm:text-xl drop-shadow-md">
          We’re building something amazing! Launching soon.
        </p>

        {timeLeft ? (
          <div className="flex space-x-6 text-white font-mono text-3xl sm:text-5xl drop-shadow-md">
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div key={unit} className="flex flex-col items-center">
                <span className="bg-black bg-opacity-20 rounded-lg px-5 py-3 sm:px-7 sm:py-5">
                  {timeLeft[unit].toString().padStart(2, "0")}
                </span>
                <span className="mt-2 text-sm sm:text-base capitalize">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white text-2xl font-semibold drop-shadow-md">
            We are live now! 🚀
          </p>
        )}
      </div>
    </div>
  );
};

export default ComingSoon;
