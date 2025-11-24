import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Cape Town",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    text: "I was stuck in debt review for 3 years and couldn't get any credit. Credit Dispute Resolvers helped me exit debt review in just 4 months. I can now apply for a home loan!",
    service: "Debt Review Removal Success"
  },
  {
    name: "Michael K.",
    location: "Johannesburg",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    text: "My credit score went from 350 to 720 in 8 months! The team was professional and kept me updated throughout the entire process. Highly recommended!",
    service: "Credit Score Improvement"
  },
  {
    name: "Jennifer L.",
    location: "Durban",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    text: "They successfully removed old prescribed debts that were dragging down my credit score. The process was smooth and they handled everything professionally.",
    service: "Prescribed Debt Removal"
  }
];

export default function TestimonialsSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Success Stories from Our Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people who have regained their financial freedom with our help. See how we've transformed lives across South Africa.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all duration-300"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} profile`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array(5).fill(0).map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-4">
                "{testimonial.text}"
              </p>
              <p className="text-sm text-accent font-semibold">{testimonial.service}</p>
            </div>
          ))}
        </div>

        {/* CTA in testimonials */}
        <div className="text-center mt-12">
          <button 
            onClick={scrollToContact}
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-colors"
            data-testid="testimonials-cta"
          >
            Start Your Success Story Today
          </button>
        </div>
      </div>
    </section>
  );
}
