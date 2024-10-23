//const isSystemDark =  theme === "dark" || theme === "system" && window.matchMedia('(prefers-color-scheme: dark)').matches;
"use client";
import { useTheme } from "next-themes";
export function isSystemDark() {
  const { theme } = useTheme();
  return (
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}
