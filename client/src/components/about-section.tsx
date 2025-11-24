import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Proven Track Record",
    description: "Over a decade of successful credit dispute resolution with thousands of satisfied clients across South Africa."
  },
  {
    title: "NCA Compliant",
    description: "All our processes align with National Credit Act requirements, ensuring legal compliance and professional standards."
  },
  {
    title: "Professional Team",
    description: "Fully staffed contact center with experienced credit specialists and legal professionals dedicated to your success."
  }
];

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "1000+", label: "Clients Helped" },
  { number: "95%", label: "Success Rate" }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="animate-fade-in-left">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Credit Restoration Partners
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Since 2013, Credit Dispute Resolvers has been helping South Africans regain their financial freedom. We understand the devastating impact that negative credit listings can have on your life and your future.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-testid={`stat-${index}`}>
                  <div className="text-3xl font-bold text-accent">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* About Image */}
          <div className="animate-fade-in-right">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional team working in modern office"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
