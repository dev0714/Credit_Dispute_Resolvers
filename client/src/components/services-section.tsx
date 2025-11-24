import { CheckCircle, Clock, X, BarChart3, Scale, TrendingUp } from "lucide-react";

const services = [
  {
    icon: CheckCircle,
    title: "Debt Review Removal",
    description: "Professional assistance to exit debt review status and regain access to credit. We navigate the legal requirements to restore your borrowing capacity.",
    features: [
      "Legal documentation review",
      "Credit bureau clearance certificates",
      "Post-removal credit monitoring"
    ]
  },
  {
    icon: Clock,
    title: "Prescribed Debt Clearing",
    description: "Remove time-barred debts from your credit report. We identify prescribed debts and ensure they're properly removed from all credit bureaus.",
    features: [
      "Prescription audit and analysis",
      "Multi-bureau removal process",
      "Legal compliance verification"
    ]
  },
  {
    icon: X,
    title: "Default Removals",
    description: "Dispute and remove incorrect default listings that are damaging your credit score. We challenge inaccurate information and ensure proper removal.",
    features: [
      "Comprehensive dispute filing",
      "Evidence collection and review",
      "Follow-up until resolution"
    ]
  },
  {
    icon: BarChart3,
    title: "Credit Bureau Clearance",
    description: "Complete credit report restoration across all major South African credit bureaus. We ensure your profile reflects accurate, positive information.",
    features: [
      "Full credit report analysis",
      "Multi-bureau coordination",
      "Clearance certificate provision"
    ]
  },
  {
    icon: Scale,
    title: "Judgment Rescission",
    description: "Legal assistance to set aside court judgments that are affecting your credit profile. We handle the complex legal process professionally.",
    features: [
      "Legal case evaluation",
      "Court application preparation",
      "Post-rescission clearance"
    ]
  },
  {
    icon: TrendingUp,
    title: "Credit Score Improvement",
    description: "Strategic approach to boost your creditworthiness and improve your credit score for better borrowing opportunities and financial freedom.",
    features: [
      "Score analysis and strategy",
      "Ongoing monitoring and tips",
      "Financial education support"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Credit Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expert team provides specialized services to address every aspect of your credit profile and restore your financial standing.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              data-testid={`service-card-${index}`}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
