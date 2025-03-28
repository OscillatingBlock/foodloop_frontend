
import React, { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-leaf" />
            <span className="text-xl font-bold font-display text-leaf-dark">
              FoodLoop
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-sm font-medium text-gray-700 hover:text-leaf transition-colors"
            >
              About
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-leaf transition-colors"
            >
              Features
            </a>
            <a
              href="#stakeholders"
              className="text-sm font-medium text-gray-700 hover:text-leaf transition-colors"
            >
              Partners
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-leaf transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-leaf text-leaf hover:bg-leaf hover:text-white">
              Login
            </Button>
            <Button className="bg-leaf hover:bg-leaf-dark text-white">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-16 left-0 right-0 shadow-md animate-fade-in">
            <div className="flex flex-col p-4 space-y-3">
              <a
                href="#about"
                className="text-gray-700 hover:text-leaf py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-leaf py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#stakeholders"
                className="text-gray-700 hover:text-leaf py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Partners
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-leaf py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="border-leaf text-leaf hover:bg-leaf hover:text-white w-full">
                  Login
                </Button>
                <Button className="bg-leaf hover:bg-leaf-dark text-white w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
