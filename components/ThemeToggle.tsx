"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button size="icon" variant="ghost">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button size="icon" variant="ghost" onClick={toggleTheme}>
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          theme === "light" ? "scale-0 rotate-90" : "scale-100 rotate-0"
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          theme === "light" ? "scale-100 rotate-0" : "scale-0 rotate-90"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
