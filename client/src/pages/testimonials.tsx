import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Star, Quote, CheckCircle, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Cape Town",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    text: "I was stuck in debt review for 3 years and couldn't get any credit. Credit Dispute Resolvers helped me exit debt review in just 4 months. I can now apply for a home loan!",
    service: "Debt Review Removal Success",
    beforeScore: 280,
    afterScore: 680,
    timeframe: "4 months"
  },
  {
    name: "Michael K.",
    location: "Johannesburg",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    text: "My credit score went from 350 to 720 in 8 months! The team was professional and kept me updated throughout the entire process. Highly recommended!",
    service: "Credit Score Improvement", 
    beforeScore: 350,
    afterScore: 720,
    timeframe: "8 months"
  },
  {
    name: "Jennifer L.",
    location: "Durban",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    text: "They successfully removed old prescribed debts that were dragging down my credit score. The process was smooth and they handled everything professionally.",
    service: "Prescribed Debt Removal",
    beforeScore: 420,
    afterScore: 650,
    timeframe: "3 months"
  },
  {
    name: "David R.",
    location: "Pretoria",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    text: "After a court judgment affected my credit for years, Credit Dispute Resolvers helped me get it rescinded. My credit profile is now clean and I qualified for vehicle finance!",
    service: "Judgment Rescission",
    beforeScore: 240,
    afterScore: 590,
    timeframe: "10 months"
  },
  {
    name: "Lisa P.",
    location: "Port Elizabeth",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c433?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    text: "Excellent service from start to finish. They removed multiple defaults from my credit report and my score improved dramatically. I'm now mortgage-ready!",
    service: "Default Removals",
    beforeScore: 380,
    afterScore: 710,
    timeframe: "6 months"
  },
  {
    name: "James T.",
    location: "Bloemfontein",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    text: "Professional, knowledgeable, and results-driven. They cleared my credit bureau profile completely and provided excellent ongoing support throughout the process.",
    service: "Credit Bureau Clearance",
    beforeScore: 310,
    afterScore: 680,
    timeframe: "5 months"
  }
];

const stats = [
  { number: "95%", label: "Success Rate", description: "Clients who see significant improvement" },
  { number: "4.8/5", label: "Client Rating", description: "Average satisfaction score" },
  { number: "1000+", label: "Success Stories", description: "Lives transformed since 2013" },
  { number: "6 months", label: "Average Time", description: "To see major improvements" }
];

const successMetrics = [
  { metric: "Credit Score Increase", average: "+340 points", description: "Average improvement across all clients" },
  { metric: "Debt Review Exits", success: "98%", description: "Successful exits within 6 months" },
  { metric: "Default Removals", success: "92%", description: "Incorrect defaults successfully removed" },
  { metric: "Client Satisfaction", success: "96%", description: "Would recommend our services" }
];

export default function Testimonials() {
  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')"
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6">
            Success Stories from Our Clients
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Real stories from real people who have regained their financial freedom with our help. See how we've transformed lives across South Africa with proven credit restoration results.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Our Track Record Speaks for Itself
            </h2>
            <p className="text-xl text-muted-foreground">
              Proven results across thousands of cases
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center glass-card rounded-xl p-8 group cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:bg-accent/5" data-testid={`stat-${index}`}>
                <div className="text-5xl font-bold text-accent mb-2 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300">{stat.number}</div>
                <div className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">{stat.label}</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Read how our clients transformed their financial futures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all duration-300 relative group cursor-pointer hover:scale-105 hover:-translate-y-2 hover:bg-accent/5 border border-transparent hover:border-accent/20"
                data-testid={`testimonial-${index}`}
              >
                <Quote className="w-8 h-8 text-accent/30 absolute top-4 right-4" />
                
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} profile`}
                    className="w-16 h-16 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-bold text-foreground text-lg group-hover:text-accent transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{testimonial.location}</p>
                  </div>
                </div>

                {/* Credit Score Improvement */}
                <div className="bg-accent/5 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Credit Score</span>
                    <span className="text-sm text-accent font-semibold">{testimonial.timeframe}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-500">{testimonial.beforeScore}</span>
                    <TrendingUp className="w-6 h-6 text-accent" />
                    <span className="text-2xl font-bold text-green-500">{testimonial.afterScore}</span>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-accent font-semibold">
                      +{testimonial.afterScore - testimonial.beforeScore} points improvement
                    </span>
                  </div>
                </div>

                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-accent font-semibold flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {testimonial.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Proven Success Metrics
            </h2>
            <p className="text-xl text-muted-foreground">
              Data-driven results across all our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center group cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:bg-accent/5">
                <h3 className="font-serif text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{metric.metric}</h3>
                <div className="text-3xl font-bold text-accent mb-2 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300">
                  {metric.average || metric.success}
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Start Your Success Story Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of satisfied clients who have regained their financial freedom. Your credit restoration journey starts with a simple consultation.
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-accent to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-accent transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-accent/60 hover:-translate-y-2"
            data-testid="testimonials-cta"
          >
            Begin Your Success Story
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}