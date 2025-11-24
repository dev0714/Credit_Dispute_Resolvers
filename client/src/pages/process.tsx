import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { CheckCircle, ArrowRight, Clock, FileText, Users, Scale, TrendingUp, Award } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Initial Assessment",
    description: "Comprehensive review of your credit report and financial situation. We identify all negative listings and develop a customized strategy.",
    details: [
      "Complete credit report analysis",
      "Consultation and case evaluation", 
      "Strategy development and timeline",
      "Documentation requirements review"
    ],
    duration: "1-2 weeks",
    outcome: "Clear understanding of your credit situation and a detailed action plan."
  },
  {
    number: 2,
    icon: Users,
    title: "Documentation Review",
    description: "Thorough examination of all documentation and legal requirements. We prepare comprehensive dispute packages for submission.",
    details: [
      "Legal document verification",
      "Evidence collection and analysis",
      "Dispute package preparation",
      "Client approval and authorization"
    ],
    duration: "1-3 weeks", 
    outcome: "Complete documentation package ready for submission to relevant parties."
  },
  {
    number: 3,
    icon: Scale,
    title: "Credit Bureau Engagement",
    description: "Professional mediation with credit bureaus and creditors. We handle all communications and negotiations on your behalf.",
    details: [
      "Multi-bureau dispute filing",
      "Creditor negotiations",
      "Progress tracking and updates",
      "Follow-up correspondence"
    ],
    duration: "4-12 weeks",
    outcome: "Active disputes filed and professional representation in all communications."
  },
  {
    number: 4,
    icon: Scale,
    title: "Legal Intervention",
    description: "When necessary, we provide legal assistance to address complex cases requiring court intervention or specialized legal expertise.",
    details: [
      "Legal case preparation",
      "Court applications and filings",
      "Professional legal representation",
      "Post-judgment clearance"
    ],
    duration: "6-12 months",
    outcome: "Legal resolution of complex matters with proper court documentation."
  },
  {
    number: 5,
    icon: Clock,
    title: "Progress Monitoring",
    description: "Continuous tracking of case progress with regular client updates. We maintain communication throughout the entire process.",
    details: [
      "Regular progress reports",
      "Client communication updates",
      "Case status monitoring",
      "Timeline adjustments as needed"
    ],
    duration: "Ongoing",
    outcome: "Complete transparency and regular updates on your case progress."
  },
  {
    number: 6,
    icon: TrendingUp,
    title: "Credit Restoration",
    description: "Final credit restoration and score improvement. We provide ongoing support to maintain your improved credit standing.",
    details: [
      "Final credit report verification",
      "Score improvement confirmation", 
      "Clearance certificate provision",
      "Ongoing maintenance support"
    ],
    duration: "2-4 weeks",
    outcome: "Restored credit profile and improved credit score with ongoing support."
  }
];

const timeline = [
  { phase: "Assessment & Planning", duration: "Week 1-2", description: "Initial consultation and strategy development" },
  { phase: "Documentation & Preparation", duration: "Week 3-5", description: "Evidence gathering and dispute preparation" },
  { phase: "Active Dispute Phase", duration: "Month 2-4", description: "Bureau engagement and creditor negotiations" },
  { phase: "Resolution & Clearance", duration: "Month 4-6", description: "Final clearances and credit restoration" }
];

export default function Process() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Proven 6-Step Process
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We follow a systematic approach to ensure the best possible outcome for your credit restoration. Each step is carefully designed to maximize success rates and keep you informed throughout your journey.
          </p>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Typical Timeline Overview
            </h2>
            <p className="text-xl text-muted-foreground">
              While every case is unique, here's what you can typically expect
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((phase, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{phase.phase}</h3>
                <p className="text-accent font-semibold mb-2">{phase.duration}</p>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Timeline line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-24 h-32 w-0.5 bg-accent/30"></div>
                )}

                <div className={`flex flex-col lg:flex-row items-center gap-12 ${step.number % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="glass-card rounded-xl p-8" data-testid={`process-step-${step.number}`}>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                          <step.icon className="w-8 h-8 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-serif text-2xl font-bold text-foreground">
                            Step {step.number}: {step.title}
                          </h3>
                          <p className="text-accent font-semibold">Duration: {step.duration}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 text-lg">
                        {step.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center">
                            <CheckCircle className="w-5 h-5 text-accent mr-2" />
                            What We Do
                          </h4>
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="text-sm text-muted-foreground flex items-start">
                                <ArrowRight className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center">
                            <Award className="w-5 h-5 text-accent mr-2" />
                            Expected Outcome
                          </h4>
                          <p className="text-sm text-muted-foreground">{step.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step Number Circle */}
                  <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-yellow-500 rounded-full border-4 border-background shadow-lg">
                    <span className="text-black font-bold text-2xl">{step.number}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              What Makes Our Process Different
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional, transparent, and results-driven approach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">Personalized Approach</h3>
              <p className="text-muted-foreground">
                Every case is unique. We develop customized strategies based on your specific situation and goals.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">Regular Updates</h3>
              <p className="text-muted-foreground">
                Stay informed with regular progress reports and immediate notification of any developments in your case.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Scale className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">Legal Expertise</h3>
              <p className="text-muted-foreground">
                Our legal team handles complex cases requiring court intervention, ensuring professional representation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Credit Restoration Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't wait any longer. Take the first step towards financial freedom with our proven process.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-gradient-to-r from-accent to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-accent transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/50"
            data-testid="process-cta"
          >
            Begin Your Assessment Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}