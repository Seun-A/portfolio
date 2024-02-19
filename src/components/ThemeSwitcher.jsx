"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import themeSwitcherStyles from "@/styles/themeSwitcher.module.css"

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <div className={themeSwitcherStyles.themeSwitcher}>
      <button
        onClick={() => setTheme("light")}
        className={theme === "light" && themeSwitcherStyles.activeThemeBtn}
      >
        <Icon icon="solar:sun-bold" />
      </button>

      <div className={`${themeSwitcherStyles.btnBg} ${theme==="light"&& themeSwitcherStyles.btnBgLight}`} />

      <button
        onClick={() => setTheme("dark")}
        className={theme === "dark" && themeSwitcherStyles.activeThemeBtn}
      >
        <Icon icon="ion:moon-sharp" />
      </button>
    </div>
  );
};