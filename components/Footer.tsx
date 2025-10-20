import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 text-neutral-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 ">
            <h3 className="text-3xl font-black font-heading text-primary mb-4">
              Bykouski FitPro Fitness
            </h3>
            <p className="mb-6 leading-relaxed max-w-md ">
              We are a gym that provides a wide range of fitness services to
              help you achieve your fitness goals.
            </p>

            <div className="flex space-x-4">
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#programs"
                  className="text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold font-heading mb-4">
              Contact Info
            </h4>
            <p className="mb-2">
              <span className="font-semibold">Address:</span> 123 Main Street,
              City, Country
            </p>
            <p className="mb-2">
              <span className="font-semibold">Phone:</span> (123) 456-7890
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span>{" "}
              <Link
                href="mailto:0e6lG@example.com"
                className="hover:text-primary transition-all duration-300"
              >
                info@fitness.com
              </Link>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="borderr-t border-secondary pt-12 text-center text-neutral-400">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Bykouski FitPro Fitness. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
