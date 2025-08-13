import React from "react";

export default function ToggleSwitch({ theme, toggleTheme }) {
  return (
    <label
      className={`
        relative flex items-center justify-between w-14 h-7 rounded-full p-1 cursor-pointer
        transition-all duration-500
        ${theme === "dark" ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-yellow-400 to-orange-500"}
        shadow-lg
      `}
    >
      {/* Hidden checkbox */}
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="hidden"
        aria-label="Toggle Dark Mode"
      />

      {/* Sun icon */}
      <svg
        className={`w-4 h-4 text-yellow-300 transition-transform duration-500 ${
          theme === "dark" ? "-translate-x-6 opacity-0" : "translate-x-0 opacity-100"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 4.5a1 1 0 0 1 1-1h.01a1 1 0 1 1-1.01 1zM6.34 6.34a1 1 0 0 1 1.41 0l.01.01a1 1 0 0 1-1.42 1.41zM4.5 12a1 1 0 1 1 1 1h-.01a1 1 0 0 1-1-1zm1.84 5.66a1 1 0 0 1 1.41-1.41l.01.01a1 1 0 0 1-1.42 1.41zM12 19.5a1 1 0 0 1 1 1h.01a1 1 0 0 1-1.01-1zM17.66 17.66a1 1 0 0 1-1.41 0l-.01-.01a1 1 0 0 1 1.42-1.41zM19.5 12a1 1 0 0 1-1-1h.01a1 1 0 0 1 1 1zM17.66 6.34a1 1 0 0 1-1.41 1.41l-.01-.01a1 1 0 0 1 1.42-1.41z" />
        <circle cx="12" cy="12" r="5" />
      </svg>

      {/* Moon icon */}
      <svg
        className={`w-4 h-4 text-gray-300 transition-transform duration-500 ${
          theme === "dark" ? "translate-x-6 opacity-100" : "-translate-x-6 opacity-0"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 12.79A9 9 0 0 1 12.79 21 7 7 0 1 0 21 12.79z" />
      </svg>

      {/* Moving knob */}
      <span
        className={`
          absolute top-0.5 left-0.5 w-6 h-6 rounded-full transition-all duration-500
          ${theme === "dark" ? "translate-x-7 bg-gray-700" : "translate-x-0 bg-white"}
          shadow-md
        `}
      ></span>
    </label>
  );
}
