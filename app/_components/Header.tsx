"use client"
import { Section } from "./Section";
import ModeSwitcher from "./ModeSwitcher";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme } = useTheme();

  // Ajouter la classe "dark" au <html> uniquement côté client
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header className="top-0 py-4">
      <Section className="flex max-md:flex-col items-start">
        <h1 className="flex-[100] text-4xl font-bold text-primary">Victor.com</h1>
        <div className="flex-[1]">
          <ModeSwitcher />
        </div>
      </Section>
    </header>
  );
};
