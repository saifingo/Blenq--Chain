"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-3 rounded-[20px] transition-all duration-300 border-2"
      style={{
        padding:'4px',
        backgroundColor: isDark ? "var(--bg-secondary)" : "var(--bg-secondary)",
        borderColor: isDark ? "var(--accent-purple)" : "var(--accent-blue)",
        color: "var(--text-primary)",
      }}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
