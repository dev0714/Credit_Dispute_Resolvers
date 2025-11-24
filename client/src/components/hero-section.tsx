import { CheckCircle } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-gradient pt-24 pb-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white animate-fade-in-left">
            <h2 className="font-serif text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Clear Your Credit,<br />
              <span className="text-accent">Reclaim Your Future</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional credit dispute resolution services in South Africa. We remove debt review, prescribed debt, defaults, and negative listings to restore your financial freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-colors text-center"
                data-testid="hero-cta-assessment"
              >
                Get Free Assessment
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-foreground transition-colors text-center"
                data-testid="hero-cta-services"
              >
                View Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-gray-300 font-medium">Operating Since 2013</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-gray-300 font-medium">1000+ Clients Helped</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-gray-300 font-medium">NCA Compliant</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-fade-in-right">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional financial consultants in a modern office"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
