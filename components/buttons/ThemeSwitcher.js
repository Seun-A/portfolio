"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";


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
    <button
      className={`
        w-fit p-2 md:p-2.5 md:text-lg rounded-full hover:scale-110 active:scale-100 duration-200
        outline-none focus:outline-none active:outline-none
        bg-sugar-dark/70 text-peach/70 
        dark:bg-peach/70 dark:text-burnt
      `}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      type="button"
    >
      <Icon icon='line-md:light-dark-loop' />
    </button>
  );
};