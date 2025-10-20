import Link from "next/link";
import { navItems } from "@/lib/constans";
import MobileNavigation from "./MobileNavigation";
import { ModeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-black font-heading text-primary">
              Bykouski FitPro
            </h1>
          </div>

          {/* Desctop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4 lg:space-x-7">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button className="font-semibold">Get Started</Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
