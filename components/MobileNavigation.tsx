"use client";

import { useState } from "react";
import { ModeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/constans";
import Link from "next/link";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative z-50">
        <ModeToggle />
        <Button size="icon" variant="ghost" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isOpen && (
        <>
          <div
            className={`shadow-lg fixed top-16 left-0 right-0 bottom-0 z-30 md:hidden bg-transparent ${
              isOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-16 left-0 right-0 z-40 md:hidden bg-background border-t border-border dark:border-secondary/40 shadow-lg">
            <div className="p-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 text-sm font-medium transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full font-semibold">Join Now</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileNavigation;
