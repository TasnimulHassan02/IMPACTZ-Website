import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  const navItems = [{
    label: "Home",
    href: "#home"
  }, {
    label: "Services",
    href: "#services"
  }, {
    label: "About",
    href: "#about"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  return <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container flex justify-between items-center mx-0 px-[10px]">
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <img alt="IMPACTZ Logo" onError={e => {
            console.error('Logo failed to load');
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://placehold.co/200x80?text=IMPACTZ';
          }} src="/lovable-uploads/79060f61-d257-482d-8bb5-0fcf7b0eb3d0.png" className="h-11 mr-0" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(item => <a key={item.label} href={item.href} className="text-gray-700 hover:text-brand-blue transition-colors">
              {item.label}
            </a>)}
          <a href="#contact">
            <Button className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-blue text-white">
              Get Started
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && <div className="md:hidden bg-white w-full py-4 px-6 shadow-md">
          <div className="flex flex-col space-y-4">
            {navItems.map(item => <a key={item.label} href={item.href} className="text-gray-700 hover:text-brand-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {item.label}
              </a>)}
            <a href="#contact">
              <Button className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-blue text-white w-full">
                Get Started
              </Button>
            </a>
          </div>
        </div>}
    </nav>;
};
export default Navbar;