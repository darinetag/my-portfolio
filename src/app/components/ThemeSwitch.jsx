"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return <FiSun className="opacity-0 py-2 pl-3 pr-4 md:p-0 text-xl" />;

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        className="text-xl cursor-pointer dark:text-[#ADB7BE]"
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        className=" text-xl cursor-pointer hover:text-gray-600"
        onClick={() => setTheme("dark")}
      />
    );
  }
}
