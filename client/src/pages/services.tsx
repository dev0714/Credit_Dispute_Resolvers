import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { CheckCircle, Clock, X, BarChart3, Scale, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: CheckCircle,
    title: "Debt Review Removal",
    description: "Professional assistance to exit debt review status and regain access to credit. We navigate the legal requirements to restore your borrowing capacity.",
    features: [
      "Legal documentation review",
      "Credit bureau clearance certificates", 
      "Post-removal credit monitoring",
      "Timeline: 3-6 months",
      "Success rate: 95%"
    ],
    process: "Our team reviews your debt review status, prepares legal documentation, and works with credit bureaus to remove the listing and restore your credit profile."
  },
  {
    icon: Clock,
    title: "Prescribed Debt Clearing",
    description: "Remove time-barred debts from your credit report. We identify prescribed debts and ensure they're properly removed from all credit bureaus.",
    features: [
      "Prescription audit and analysis",
      "Multi-bureau removal process",
      "Legal compliance verification",
      "Timeline: 2-4 months", 
      "No upfront fees"
    ],
    process: "We conduct a thorough audit of your credit report, identify prescribed debts, and initiate the removal process across all major South African credit bureaus."
  },
  {
    icon: X,
    title: "Default Removals",
    description: "Dispute and remove incorrect default listings that are damaging your credit score. We challenge inaccurate information and ensure proper removal.",
    features: [
      "Comprehensive dispute filing",
      "Evidence collection and review", 
      "Follow-up until resolution",
      "Timeline: 1-3 months",
      "Legal backing"
    ],
    process: "Our specialists analyze each default listing, gather supporting evidence, and file formal disputes with creditors and credit bureaus to achieve removal."
  },
  {
    icon: BarChart3,
    title: "Credit Bureau Clearance",
    description: "Complete credit report restoration across all major South African credit bureaus. We ensure your profile reflects accurate, positive information.",
    features: [
      "Full credit report analysis",
      "Multi-bureau coordination",
      "Clearance certificate provision",
      "Timeline: 2-6 months",
      "Comprehensive service"
    ],
    process: "We coordinate with TransUnion, Experian, Compuscan, and XDS to ensure consistent, accurate information across all your credit profiles."
  },
  {
    icon: Scale,
    title: "Judgment Rescission",
    description: "Legal assistance to set aside court judgments that are affecting your credit profile. We handle the complex legal process professionally.",
    features: [
      "Legal case evaluation",
      "Court application preparation",
      "Post-rescission clearance",
      "Timeline: 6-12 months",
      "Professional legal support"
    ],
    process: "Our legal team evaluates your case, prepares court applications, represents you in proceedings, and ensures credit bureau updates following successful rescission."
  },
  {
    icon: TrendingUp,
    title: "Credit Score Improvement",
    description: "Strategic approach to boost your creditworthiness and improve your credit score for better borrowing opportunities and financial freedom.",
    features: [
      "Score analysis and strategy",
      "Ongoing monitoring and tips",
      "Financial education support",
      "Timeline: 3-12 months",
      "Personalized guidance"
    ],
    process: "We develop a customized strategy to improve your credit score through dispute resolution, positive account management, and ongoing financial guidance."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')"
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6">
            Comprehensive Credit Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our expert team provides specialized services to address every aspect of your credit profile and restore your financial standing in South Africa.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer hover:scale-105 hover:bg-accent/5 border border-transparent hover:border-accent/20"
                data-testid={`service-card-${index}`}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 group-hover:text-foreground transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Process Description */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <ArrowRight className="w-4 h-4 text-accent mr-2" />
                    Our Process
                  </h4>
                  <p className="text-sm text-muted-foreground">{service.process}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Ready to Restore Your Credit?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't let negative credit listings hold you back. Contact us today for a free consultation and take the first step towards financial freedom.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-gradient-to-r from-accent to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-accent transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-accent/60 hover:-translate-y-2"
            data-testid="services-cta"
          >
            Get Your Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}