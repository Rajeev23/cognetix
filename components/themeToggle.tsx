"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  themeTextVisible?: boolean;
}

export default function ThemeToggle({ themeTextVisible = false }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted
  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className={cn(
        "relative h-9 w-9",
        "transition-colors duration-200"
      )}
    >
      <Sun 
        className={cn(
          "h-4 w-4 rotate-0 scale-100 transition-all duration-200",
          "dark:-rotate-90 dark:scale-0"
        )} 
      />
      <Moon 
        className={cn(
          "absolute h-4 w-4 rotate-90 scale-0 transition-all duration-200",
          "dark:rotate-0 dark:scale-100"
        )} 
      />
      <span className="sr-only">Toggle theme</span>
      {themeTextVisible && (
        <span className="ml-2 text-sm">
          {resolvedTheme === "light" ? "Dark" : "Light"} Mode
        </span>
      )}
    </Button>
  );
} 