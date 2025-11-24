import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import Logo from "./logo";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-lg border-b border-accent/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-4 group cursor-pointer hover:scale-105 transition-all duration-300">
            <Logo className="w-20 h-20 text-accent" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-serif font-bold text-white tracking-wide group-hover:text-accent transition-colors duration-300">Credit Dispute Resolvers</h1>
              <p className="text-sm text-accent/90 font-medium tracking-wider group-hover:text-accent transition-colors duration-300">Your Partners in Blacklisting Removals</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/services"
              className="text-white hover:text-accent transition-all duration-300 font-medium text-lg tracking-wide hover:scale-110 hover:drop-shadow-lg relative group"
              data-testid="nav-services"
            >
              <span className="relative">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link 
              href="/credit-investigation"
              className="text-white hover:text-accent transition-all duration-300 font-medium text-lg tracking-wide hover:scale-110 hover:drop-shadow-lg relative group"
              data-testid="nav-investigation"
            >
              <span className="relative">
                R750 Investigation
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link 
              href="/process"
              className="text-white hover:text-accent transition-all duration-300 font-medium text-lg tracking-wide hover:scale-110 hover:drop-shadow-lg relative group"
              data-testid="nav-process"
            >
              <span className="relative">
                Our Process
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link 
              href="/about"
              className="text-white hover:text-accent transition-all duration-300 font-medium text-lg tracking-wide hover:scale-110 hover:drop-shadow-lg relative group"
              data-testid="nav-about"
            >
              <span className="relative">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link 
              href="/testimonials"
              className="text-white hover:text-accent transition-all duration-300 font-medium text-lg tracking-wide hover:scale-110 hover:drop-shadow-lg relative group"
              data-testid="nav-testimonials"
            >
              <span className="relative">
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-accent to-yellow-500 text-black px-8 py-3 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-accent transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-accent/60 hover:-translate-y-1"
              data-testid="nav-consultation"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-accent p-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-180 transform"
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-black to-gray-900 border-t border-accent/20 backdrop-blur-lg">
          <div className="px-6 py-8 space-y-6">
            <Link 
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-white hover:text-accent transition-all duration-300 font-medium text-lg py-2 hover:pl-4 hover:bg-white/5 rounded-lg px-2"
              data-testid="mobile-nav-services"
            >
              Services
            </Link>
            <Link 
              href="/credit-investigation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-white hover:text-accent transition-all duration-300 font-medium text-lg py-2 hover:pl-4 hover:bg-white/5 rounded-lg px-2"
              data-testid="mobile-nav-investigation"
            >
              R750 Investigation
            </Link>
            <Link 
              href="/process"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-white hover:text-accent transition-all duration-300 font-medium text-lg py-2 hover:pl-4 hover:bg-white/5 rounded-lg px-2"
              data-testid="mobile-nav-process"
            >
              Our Process
            </Link>
            <Link 
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-white hover:text-accent transition-all duration-300 font-medium text-lg py-2 hover:pl-4 hover:bg-white/5 rounded-lg px-2"
              data-testid="mobile-nav-about"
            >
              About
            </Link>
            <Link 
              href="/testimonials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-white hover:text-accent transition-all duration-300 font-medium text-lg py-2 hover:pl-4 hover:bg-white/5 rounded-lg px-2"
              data-testid="mobile-nav-testimonials"
            >
              Testimonials
            </Link>
            <Link 
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-gradient-to-r from-accent to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-accent transition-all duration-300 text-center mt-4 hover:scale-105 hover:shadow-xl"
              data-testid="mobile-nav-consultation"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
