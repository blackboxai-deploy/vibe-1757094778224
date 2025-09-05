"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">LC</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">LightCurrent</span>
              <span className="text-blue-600 font-semibold"> Pro</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="tel:+1234567890">
              <span className="text-blue-600 font-semibold text-sm">Emergency: (123) 456-7890</span>
            </Link>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <span className="sr-only">Open main menu</span>
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className="w-5 h-0.5 bg-gray-700 mb-1"></span>
                    <span className="w-5 h-0.5 bg-gray-700 mb-1"></span>
                    <span className="w-5 h-0.5 bg-gray-700"></span>
                  </div>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="border-t pt-4">
                    <Link href="tel:+1234567890" className="block">
                      <span className="text-blue-600 font-semibold text-sm">Emergency: (123) 456-7890</span>
                    </Link>
                    <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;