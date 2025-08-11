import React from "react";

export default function ToggleSwitch({ theme, toggleTheme }) {
  return (
    <label className="swap swap-rotate btn btn-primary cursor-pointer select-none">
      {/* Hidden checkbox */}
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        aria-label="Toggle Dark Mode"
      />

      {/* Sun icon - shows when light mode */}
      <svg
        className="swap-off fill-current w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64 17.66A9 9 0 1 0 17.66 5.64 7 7 0 1 1 5.64 17.66z" />
      </svg>

      {/* Moon icon - shows when dark mode */}
      <svg
        className="swap-on fill-current w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21 12.79A9 9 0 0 1 12.79 21 7 7 0 1 0 21 12.79z" />
      </svg>
    </label>
  );
}
