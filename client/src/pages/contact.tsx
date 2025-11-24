import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Clock, CheckCircle, MessageCircle, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertConsultationRequestSchema, type InsertConsultationRequest } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const primaryConcerns = [
  "Debt Review Removal",
  "Prescribed Debt Clearing", 
  "Default Removals",
  "Credit Bureau Clearance",
  "Judgment Rescission",
  "Credit Score Improvement",
  "General Inquiry",
  "Other"
];

const faqs = [
  {
    question: "How long does the process take?",
    answer: "Process timeframes vary by case complexity, but most clients see results within 3-6 months. Simple cases like prescribed debt removal can be completed in 2-3 months, while complex legal matters may take 6-12 months."
  },
  {
    question: "Do you guarantee results?",
    answer: "While we cannot guarantee specific outcomes due to the nature of credit disputes, we have a 95% success rate and offer free consultations to assess your case before you commit."
  },
  {
    question: "Are your services NCA compliant?",
    answer: "Yes, all our processes align with National Credit Act requirements and industry best practices. We maintain full compliance with South African credit legislation."
  },
  {
    question: "What documents do I need?",
    answer: "We'll need your ID document, recent credit reports from all bureaus, and any relevant documentation related to your credit issues. We'll guide you through the complete list during consultation."
  },
  {
    question: "How much do your services cost?",
    answer: "Our fees vary based on the complexity of your case and services required. We offer transparent, upfront pricing with no hidden costs. Contact us for a personalized quote."
  },
  {
    question: "Can you help with all credit bureaus?",
    answer: "Yes, we work with all major South African credit bureaus including TransUnion, Experian, Compuscan, and XDS to ensure comprehensive credit restoration."
  }
];

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Consultation",
    value: "+27 11 234 5678",
    description: "Speak directly with a credit specialist",
    available: "Mon-Fri: 8:00 AM - 5:00 PM"
  },
  {
    icon: Mail,
    title: "Email Support",
    value: "info@creditdisputeresolvers.co.za",
    description: "Send us your questions anytime",
    available: "24/7 response within 2 hours"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+27 82 123 4567",
    description: "Quick questions and updates",
    available: "Mon-Fri: 8:00 AM - 6:00 PM"
  },
  {
    icon: Calendar,
    title: "In-Person Meeting",
    value: "Schedule Appointment",
    description: "Face-to-face consultation",
    available: "By appointment only"
  }
];

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertConsultationRequest>({
    resolver: zodResolver(insertConsultationRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      primaryConcern: "",
      additionalDetails: "",
      consentGiven: "false"
    }
  });

  const submitConsultation = useMutation({
    mutationFn: async (data: InsertConsultationRequest) => {
      const response = await apiRequest("POST", "/api/consultation-requests", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Consultation Request Submitted",
        description: "Thank you for your interest! We will contact you within 24 hours to schedule your free assessment.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertConsultationRequest) => {
    submitConsultation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')"
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6">
            Get Your Free Credit Assessment
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Take the first step towards financial freedom. Our experts will review your credit report and provide a personalized strategy at no cost. Start your journey to a better credit score today.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              How to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to connect with our credit restoration experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-2 hover:bg-accent/5">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <method.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">{method.title}</h3>
                <p className="text-accent font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">{method.value}</p>
                <p className="text-sm text-muted-foreground mb-2 group-hover:text-foreground transition-colors duration-300">{method.description}</p>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">{method.available}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-serif text-3xl font-bold text-foreground mb-6">Request Your Free Consultation</h3>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and one of our credit specialists will contact you within 24 hours to discuss your specific situation and how we can help.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name*</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                data-testid="input-first-name"
                                placeholder="Enter your first name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name*</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                data-testid="input-last-name"
                                placeholder="Enter your last name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address*</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              {...field} 
                              data-testid="input-email"
                              placeholder="your.email@example.com"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number*</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              {...field} 
                              data-testid="input-phone"
                              placeholder="+27 XX XXX XXXX"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="primaryConcern"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Concern</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-primary-concern">
                                <SelectValue placeholder="Select your main credit issue" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {primaryConcerns.map((concern) => (
                                <SelectItem key={concern} value={concern}>
                                  {concern}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="additionalDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              placeholder="Please provide any additional information about your credit situation that might help us assist you better..." 
                              {...field} 
                              data-testid="textarea-additional-details"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="consentGiven"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value === "true"}
                              onCheckedChange={(checked) => field.onChange(checked ? "true" : "false")}
                              data-testid="checkbox-consent"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-muted-foreground">
                              I consent to Credit Dispute Resolvers contacting me regarding my credit dispute needs and agree to the terms of service and privacy policy.*
                            </FormLabel>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-accent to-yellow-500 text-black py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-accent transition-all duration-300 transform hover:scale-105"
                      disabled={submitConsultation.isPending}
                      data-testid="button-submit-consultation"
                    >
                      {submitConsultation.isPending ? "Submitting..." : "Get My Free Assessment"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            {/* Contact Information & FAQ */}
            <div className="animate-fade-in-right space-y-8">
              {/* Office Information */}
              <div className="glass-card rounded-xl p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Office Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Head Office</h4>
                      <p className="text-muted-foreground">
                        123 Credit Plaza<br />
                        Sandton, Johannesburg<br />
                        2196, South Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p>Saturday: 9:00 AM - 1:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="text-accent text-sm">Emergency support available 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="glass-card rounded-xl p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>

                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-semibold text-foreground mb-2 flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        {faq.question}
                      </h4>
                      <p className="text-sm text-muted-foreground ml-7">{faq.answer}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-accent/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Have more questions?</strong> Our consultation is completely free and includes answers to all your credit-related questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}