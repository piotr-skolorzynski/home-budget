import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    return savedTheme === "dark" || (!savedTheme && systemPrefersDark);
  });

  useEffect(() => {
    const theme = isDark ? "dracula" : "winter";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "winter");
      localStorage.setItem("theme", "winter");
      setIsDark(false);
    } else {
      document.documentElement.setAttribute("data-theme", "dracula");
      localStorage.setItem("theme", "dracula");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-primary btn-sm glass"
      aria-label="Toggle theme"
    >
      <Sun size={18} className="hidden dark:inline" />
      <Moon size={18} className="dark:hidden inline" />
    </button>
  );
}
