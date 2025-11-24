import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertConsultationRequestSchema, type InsertConsultationRequest } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const primaryConcerns = [
  "Debt Review Removal",
  "Prescribed Debt Clearing", 
  "Default Removals",
  "Credit Bureau Clearance",
  "Judgment Rescission",
  "Credit Score Improvement",
  "Other"
];

const faqs = [
  {
    question: "How long does the process take?",
    answer: "Process timeframes vary by case complexity, but most clients see results within 3-6 months."
  },
  {
    question: "Do you guarantee results?",
    answer: "While we cannot guarantee specific outcomes, we have a 95% success rate and offer free consultations."
  },
  {
    question: "Are your services NCA compliant?",
    answer: "Yes, all our processes align with National Credit Act requirements and industry best practices."
  }
];

export default function ContactSection() {
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
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Your Free Credit Assessment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards financial freedom. Our experts will review your credit report and provide a personalized strategy at no cost.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Request Your Free Consultation</h3>

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
                              <SelectValue placeholder="Select your main issue" />
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
                            placeholder="Tell us more about your situation..." 
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
                    className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-colors"
                    disabled={submitConsultation.isPending}
                    data-testid="button-submit-consultation"
                  >
                    {submitConsultation.isPending ? "Submitting..." : "Get My Free Assessment"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-right">
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="glass-card rounded-xl p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+27 11 234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">info@creditdisputeresolvers.co.za</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">Durban, South Africa</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Business Hours</h4>
                      <p className="text-muted-foreground">Mon-Fri: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Highlight */}
              <div className="glass-card rounded-xl p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Quick FAQ</h3>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
