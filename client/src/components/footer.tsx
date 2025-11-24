import { Facebook, Linkedin, Mail } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Logo className="w-10 h-10 text-accent" />
              <div>
                <h3 className="text-xl font-serif font-bold">Credit Dispute Resolvers</h3>
                <p className="text-sm text-gray-400">Your Partners in Blacklisting Removals</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional credit dispute resolution services helping South Africans regain their financial freedom since 2013. We specialize in removing negative credit listings and restoring creditworthiness.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1"
                data-testid="social-facebook"
              >
                <Facebook className="w-5 h-5 text-accent hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-5 h-5 text-accent hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1"
                data-testid="social-email"
              >
                <Mail className="w-5 h-5 text-accent hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a 
                  href="/services" 
                  className="hover:text-accent transition-all duration-300 text-left hover:pl-2 hover:scale-105 block py-1"
                  data-testid="footer-service-debt-review"
                >
                  Debt Review Removal
                </a>
              </li>
              <li>
                <a 
                  href="/services" 
                  className="hover:text-accent transition-all duration-300 text-left hover:pl-2 hover:scale-105 block py-1"
                  data-testid="footer-service-prescribed-debt"
                >
                  Prescribed Debt Clearing
                </a>
              </li>
              <li>
                <a 
                  href="/services" 
                  className="hover:text-accent transition-all duration-300 text-left hover:pl-2 hover:scale-105 block py-1"
                  data-testid="footer-service-default-removals"
                >
                  Default Removals
                </a>
              </li>
              <li>
                <a 
                  href="/services" 
                  className="hover:text-accent transition-all duration-300 text-left hover:pl-2 hover:scale-105 block py-1"
                  data-testid="footer-service-bureau-clearance"
                >
                  Credit Bureau Clearance
                </a>
              </li>
              <li>
                <a 
                  href="/services" 
                  className="hover:text-accent transition-all duration-300 text-left hover:pl-2 hover:scale-105 block py-1"
                  data-testid="footer-service-judgment-rescission"
                >
                  Judgment Rescission
                </a>
              </li>
              <li>
                <a 
                  href="/services" 
                  className="hover:text-accent transition-all duration-300 text-left hover:pl-2 hover:scale-105 block py-1"
                  data-testid="footer-service-score-improvement"
                >
                  Credit Score Improvement
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a 
                  href="/about" 
                  className="hover:text-accent transition-all duration-300 text-left hover:pl-2 hover:scale-105 block py-1"
                  data-testid="footer-link-about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/process" 
                  className="hover:text-accent transition-all duration-300 text-left hover:pl-2 hover:scale-105 block py-1"
                  data-testid="footer-link-process"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a 
                  href="/testimonials" 
                  className="hover:text-accent transition-all duration-300 text-left hover:pl-2 hover:scale-105 block py-1"
                  data-testid="footer-link-testimonials"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="hover:text-accent transition-all duration-300 text-left hover:pl-2 hover:scale-105 block py-1"
                  data-testid="footer-link-contact"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-all duration-300 hover:pl-2 hover:scale-105 block py-1" data-testid="footer-link-privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-all duration-300 hover:pl-2 hover:scale-105 block py-1" data-testid="footer-link-terms">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Credit Dispute Resolvers. All rights reserved. | NCA Compliant Credit Solutions
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Operating in South Africa since 2013
          </p>
        </div>
      </div>
    </footer>
  );
}
