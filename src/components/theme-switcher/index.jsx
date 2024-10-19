"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import themeSwitcherStyles from "./index.module.css"

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("dark");

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <React.Fragment>
      <button
        className={themeSwitcherStyles.themeSwitcherSm}
        onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}
      >
        <Icon icon={theme === "dark" ? "ion:moon-sharp" : "solar:sun-bold"} />
      </button>

      <div className={themeSwitcherStyles.themeSwitcherLg}>
        <button
          onClick={() => setTheme("light")}
          className={theme === "light" ? themeSwitcherStyles.activeThemeBtn : ""}
        >
          <Icon icon="solar:sun-bold" />
        </button>

        <div className={`${themeSwitcherStyles.btnBg} ${theme==="light"&& themeSwitcherStyles.btnBgLight}`} />

        <button
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? themeSwitcherStyles.activeThemeBtn : ""}
        >
          <Icon icon="ion:moon-sharp" />
        </button>
      </div>
    </React.Fragment>
  );
};