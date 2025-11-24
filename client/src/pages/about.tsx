import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { CheckCircle, Users, Award, Clock, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Over a decade of successful credit dispute resolution with thousands of satisfied clients across South Africa."
  },
  {
    icon: Shield,
    title: "NCA Compliant",
    description: "All our processes align with National Credit Act requirements, ensuring legal compliance and professional standards."
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Fully staffed contact center with experienced credit specialists and legal professionals dedicated to your success."
  },
  {
    icon: Clock,
    title: "Fast Results",
    description: "Most clients see significant improvements within 3-6 months, with many cases resolved even faster."
  },
  {
    icon: TrendingUp,
    title: "High Success Rate",
    description: "95% success rate in removing negative listings and improving credit scores for our clients."
  },
  {
    icon: CheckCircle,
    title: "Comprehensive Service",
    description: "From initial consultation to final clearance, we handle every aspect of your credit restoration journey."
  }
];

const stats = [
  { number: "10+", label: "Years Experience", description: "Operating since 2013" },
  { number: "1000+", label: "Clients Helped", description: "Across South Africa" },
  { number: "95%", label: "Success Rate", description: "Client satisfaction" },
  { number: "24/7", label: "Support", description: "Professional assistance" }
];

const team = [
  {
    name: "Legal Specialists",
    role: "Expert legal team handling complex cases",
    description: "Our qualified legal professionals handle judgment rescissions, court applications, and complex legal disputes."
  },
  {
    name: "Credit Analysts", 
    role: "Detailed credit report analysis experts",
    description: "Experienced analysts who meticulously review credit reports to identify errors and opportunities for improvement."
  },
  {
    name: "Client Relations",
    role: "Dedicated support throughout your journey", 
    description: "Professional client service team providing regular updates and guidance throughout the credit restoration process."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')"
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Trusted Credit Restoration Partners
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Since 2013, Credit Dispute Resolvers has been helping South Africans regain their financial freedom. We understand the devastating impact that negative credit listings can have on your life and your future.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Founded in 2013, Credit Dispute Resolvers emerged from a simple yet powerful mission: to help South Africans overcome the barriers that negative credit listings create in their lives.
                </p>
                <p>
                  Our founders recognized that many people were trapped in cycles of poor credit not due to irresponsibility, but due to errors, outdated information, and complex legal processes they couldn't navigate alone.
                </p>
                <p>
                  Today, we're proud to be one of South Africa's leading credit restoration companies, with a team of legal experts, credit specialists, and client service professionals dedicated to your financial freedom.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Professional team working in modern office"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results for real people across South Africa
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

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Why Choose Credit Dispute Resolvers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine legal expertise, industry knowledge, and personalized service to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Dedicated professionals working for your financial freedom
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass-card rounded-xl p-8 text-center group cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:bg-accent/5">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">{member.name}</h3>
                <p className="text-accent font-semibold mb-4 group-hover:text-yellow-400 transition-colors duration-300">{member.role}</p>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Ready to Work with the Experts?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of satisfied clients who have regained their financial freedom with our help.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-gradient-to-r from-accent to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-accent transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-accent/60 hover:-translate-y-2"
            data-testid="about-cta"
          >
            Start Your Journey Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}