import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ArrowRight, CheckCircle, Star, Clock, Shield, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "NCA Compliant",
    description: "All our processes align with National Credit Act requirements"
  },
  {
    icon: Star,
    title: "95% Success Rate",
    description: "Proven track record of successful credit restoration"
  },
  {
    icon: Clock,
    title: "Fast Results",
    description: "Most clients see improvements within 3-6 months"
  },
  {
    icon: TrendingUp,
    title: "Expert Team",
    description: "Professional legal and credit specialists"
  }
];

const services = [
  {
    title: "Debt Review Removal",
    description: "Exit debt review status and regain access to credit",
    features: ["Legal documentation", "Bureau clearance", "Post-removal monitoring"]
  },
  {
    title: "Prescribed Debt Clearing",
    description: "Remove time-barred debts from your credit report",
    features: ["Prescription audit", "Multi-bureau removal", "Legal compliance"]
  },
  {
    title: "Default Removals",
    description: "Dispute and remove incorrect default listings",
    features: ["Comprehensive disputes", "Evidence collection", "Legal backing"]
  },
  {
    title: "Credit Bureau Clearance",
    description: "Complete credit report restoration across all bureaus",
    features: ["Full analysis", "Multi-bureau coordination", "Clearance certificates"]
  },
  {
    title: "Judgment Rescission",
    description: "Legal assistance to set aside court judgments",
    features: ["Legal evaluation", "Court applications", "Professional representation"]
  },
  {
    title: "Credit Score Improvement",
    description: "Strategic approach to boost your creditworthiness",
    features: ["Score analysis", "Ongoing monitoring", "Financial education"]
  }
];

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "1000+", label: "Clients Helped" },
  { number: "95%", label: "Success Rate" },
  { number: "24/7", label: "Support Available" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')"
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="font-serif text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Reclaim Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-500">
                Financial Freedom
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Since 2013, we've helped thousands of South Africans remove negative credit listings, 
              exit debt review, and restore their creditworthiness. Don't let bad credit hold you back any longer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a 
                href="/credit-investigation"
                className="bg-gradient-to-r from-accent to-yellow-500 text-black px-10 py-4 rounded-xl font-bold text-xl hover:from-yellow-500 hover:to-accent transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl hover:shadow-accent/70 flex items-center hover:-translate-y-2 group"
                data-testid="hero-cta-primary"
              >
                R750 Professional Investigation
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="/free-credit-analysis"
                className="border-2 border-accent text-accent px-10 py-4 rounded-xl font-bold text-xl hover:bg-accent hover:text-black transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-accent/50 hover:-translate-y-2"
                data-testid="hero-cta-secondary"
              >
                Free Analysis First
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer hover:scale-110 transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-accent mb-2 group-hover:text-yellow-400 transition-colors duration-300 group-hover:drop-shadow-lg">{stat.number}</div>
                  <div className="text-white font-medium group-hover:text-accent transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose Credit Dispute Resolvers?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine legal expertise, industry knowledge, and personalized service to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card rounded-xl p-8 text-center hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-2 hover:bg-accent/5">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">{benefit.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Credit Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From debt review removal to credit score improvement, we handle every aspect of credit restoration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer hover:scale-105 hover:bg-accent/5 border border-transparent hover:border-accent/20"
              >
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="/services"
                  className="text-accent hover:text-accent/80 font-semibold flex items-center group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/services"
              className="inline-block bg-gradient-to-r from-accent to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-accent transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-accent/60 hover:-translate-y-1"
              data-testid="services-cta"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How Our Process Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 6-step process ensures the best possible outcome for your credit restoration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-2xl group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-accent/50 transition-all duration-300">
                1
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">Initial Assessment</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Comprehensive review of your credit report and financial situation with customized strategy development.
              </p>
            </div>

            <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-2xl group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-accent/50 transition-all duration-300">
                2
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">Professional Mediation</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                We handle all communications with credit bureaus and creditors, managing disputes and negotiations professionally.
              </p>
            </div>

            <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-2xl group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-accent/50 transition-all duration-300">
                3
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">Credit Restoration</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Final verification and ongoing support to maintain your improved credit standing and score.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/process"
              className="inline-block bg-gradient-to-r from-accent to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-accent transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-accent/60 hover:-translate-y-1"
              data-testid="process-cta"
            >
              View Detailed Process
            </a>
          </div>
        </div>
      </section>

      {/* Client Success Testimonial */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-12 text-center group cursor-pointer hover:scale-105 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-accent/5">
            <div className="flex justify-center mb-6">
              {Array(5).fill(0).map((_, starIndex) => (
                <Star key={starIndex} className="w-8 h-8 text-accent fill-current group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${starIndex * 100}ms`}} />
              ))}
            </div>
            
            <blockquote className="text-2xl lg:text-3xl font-medium text-foreground mb-8 italic leading-relaxed group-hover:text-accent transition-colors duration-300">
              "Credit Dispute Resolvers helped me exit debt review in just 4 months. 
              My credit score went from 280 to 680, and I can now apply for a home loan. 
              Professional service from start to finish!"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-6">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
                alt="Client testimonial"
                className="w-16 h-16 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <p className="font-bold text-foreground text-lg group-hover:text-accent transition-colors duration-300">Sarah M.</p>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Cape Town • Debt Review Removal</p>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="/testimonials"
                className="text-accent hover:text-accent/80 font-semibold flex items-center justify-center group/link"
              >
                Read More Success Stories
                <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Free Credit Analysis CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')"
          }}
        ></div>
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-white">Limited Time Offer - 100% Free</span>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
            Discover What's Holding Back Your Credit Score
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We'll pull your credit report directly from the bureaus and give you a detailed analysis showing exactly what can be removed. 
            No cost, no obligations - just honest insights about your financial future.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">We Pull The Report</h3>
              <p className="text-sm text-blue-100">You don't lift a finger - we handle everything</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">Expert Analysis</h3>
              <p className="text-sm text-blue-100">Identify removable listings & opportunities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">24-Hour Results</h3>
              <p className="text-sm text-blue-100">Get your personalized action plan fast</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="/free-credit-analysis"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-12 py-5 rounded-xl font-bold text-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl hover:shadow-yellow-500/70 flex items-center hover:-translate-y-2 group"
              data-testid="final-cta-primary"
            >
              Get Your Free Analysis Now
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
          
          <p className="text-sm text-blue-200 mt-6">
            ✓ No Credit Card Required  •  ✓ No Hidden Fees  •  ✓ No Obligations
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
