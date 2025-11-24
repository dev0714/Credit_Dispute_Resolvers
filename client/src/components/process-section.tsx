const steps = [
  {
    number: 1,
    title: "Initial Assessment",
    description: "Comprehensive review of your credit report and financial situation. We identify all negative listings and develop a customized strategy.",
    details: [
      "Complete credit report analysis",
      "Consultation and case evaluation",
      "Strategy development and timeline"
    ]
  },
  {
    number: 2,
    title: "Documentation Review",
    description: "Thorough examination of all documentation and legal requirements. We prepare comprehensive dispute packages for submission.",
    details: [
      "Legal document verification",
      "Evidence collection and analysis",
      "Dispute package preparation"
    ]
  },
  {
    number: 3,
    title: "Credit Bureau Engagement",
    description: "Professional mediation with credit bureaus and creditors. We handle all communications and negotiations on your behalf.",
    details: [
      "Multi-bureau dispute filing",
      "Creditor negotiations",
      "Progress tracking and updates"
    ]
  },
  {
    number: 4,
    title: "Legal Intervention",
    description: "When necessary, we provide legal assistance to address complex cases requiring court intervention or specialized legal expertise.",
    details: [
      "Legal case preparation",
      "Court applications and filings",
      "Professional legal representation"
    ]
  },
  {
    number: 5,
    title: "Progress Monitoring",
    description: "Continuous tracking of case progress with regular client updates. We maintain communication throughout the entire process.",
    details: [
      "Regular progress reports",
      "Client communication updates",
      "Case status monitoring"
    ]
  },
  {
    number: 6,
    title: "Credit Restoration",
    description: "Final credit restoration and score improvement. We provide ongoing support to maintain your improved credit standing.",
    details: [
      "Final credit report verification",
      "Score improvement confirmation",
      "Ongoing maintenance support"
    ]
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Proven 6-Step Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We follow a systematic approach to ensure the best possible outcome for your credit restoration. Each step is carefully designed to maximize success rates.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-accent/30"></div>

          {/* Timeline Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex items-center justify-between">
                {step.number % 2 === 1 ? (
                  // Left side content
                  <>
                    <div className="flex-1 text-right pr-8 animate-fade-in-left">
                      <div className="glass-card rounded-xl p-6" data-testid={`process-step-${step.number}`}>
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>• {detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-accent rounded-full border-4 border-background">
                      <span className="text-accent-foreground font-bold">{step.number}</span>
                    </div>
                    <div className="flex-1 pl-8"></div>
                  </>
                ) : (
                  // Right side content
                  <>
                    <div className="flex-1 pr-8"></div>
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-accent rounded-full border-4 border-background">
                      <span className="text-accent-foreground font-bold">{step.number}</span>
                    </div>
                    <div className="flex-1 text-left pl-8 animate-fade-in-right">
                      <div className="glass-card rounded-xl p-6" data-testid={`process-step-${step.number}`}>
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>• {detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
