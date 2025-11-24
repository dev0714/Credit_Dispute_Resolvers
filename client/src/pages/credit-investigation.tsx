import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertCreditReportAnalysisRequestSchema, type InsertCreditReportAnalysisRequest } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { CheckCircle2, Shield, Scale, FileText, TrendingUp, AlertTriangle, Lock, Award, Clock, Users } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function CreditInvestigation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertCreditReportAnalysisRequest>({
    resolver: zodResolver(insertCreditReportAnalysisRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      idNumber: "",
      email: "",
      phone: "",
      employerName: "",
      monthlyIncome: "",
      primaryConcern: "",
      consentGiven: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertCreditReportAnalysisRequest) => {
      return await apiRequest("POST", "/api/credit-investigation-payment", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Payment Initiated",
        description: "Redirecting you to secure payment...",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertCreditReportAnalysisRequest) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                <Award className="w-6 h-6 text-yellow-400" />
                <span className="font-semibold text-lg">Professional Credit Investigation Service</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="heading-hero">
                R750 Initial Credit Investigation
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-4">
                Comprehensive Credit Report Analysis + Legal Action Plan
              </p>
              <p className="text-lg text-blue-200 max-w-3xl mx-auto">
                Not just another "free check" - Get a professional investigation by credit restoration experts 
                with a detailed legal strategy to remove unlawful listings.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">What Makes ADRA Different?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <Scale className="w-12 h-12 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Legal Expertise</h3>
                    <p className="text-blue-100">We work with qualified legal professionals who understand the National Credit Act inside-out. Not just admin staff reading templates.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Shield className="w-12 h-12 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">NCR Registered</h3>
                    <p className="text-blue-100">Fully registered with the National Credit Regulator. Your case is handled legally and ethically - no shortcuts or false promises.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FileText className="w-12 h-12 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Detailed Written Report</h3>
                    <p className="text-blue-100">You receive a comprehensive written report identifying every unlawful listing, with exact legal grounds for removal - not vague promises.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <TrendingUp className="w-12 h-12 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Bureau Relationships</h3>
                    <p className="text-blue-100">Established working relationships with TransUnion, Experian, and XDS. We know the submission procedures and follow-up protocols.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Users className="w-12 h-12 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">9000+ Success Stories</h3>
                    <p className="text-blue-100">Since 2013, we've successfully restored credit for over 9000 South Africans. Real results, real track record.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Lock className="w-12 h-12 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">POPIA Compliant</h3>
                    <p className="text-blue-100">Your personal and financial data is protected with bank-level security. Full POPIA compliance and data protection.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="heading-what-you-get">
              What Your R750 Investigation Includes
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              This is not a "quick look" - it's a professional forensic investigation
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-2 border-blue-600">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <CardTitle>Complete Credit Report Pull</CardTitle>
                      <CardDescription>From all 3 major bureaus</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We pull your full credit report from TransUnion, Experian, and XDS - giving us the complete picture across all bureaus.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-600">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <CardTitle>Forensic Analysis</CardTitle>
                      <CardDescription>Line-by-line investigation</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our specialists examine every account, every listing, every date - identifying unlawful entries, prescription violations, and bureau errors.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-600">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <CardTitle>Written Legal Report</CardTitle>
                      <CardDescription>Detailed action plan</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    You receive a comprehensive written report detailing what can be removed, the legal basis for removal, and estimated timeline.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-600">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <CardTitle>Strategic Action Plan</CardTitle>
                      <CardDescription>Step-by-step roadmap</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Clear, prioritized steps showing exactly what needs to happen, in what order, to restore your credit profile completely.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-600">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                    <div>
                      <CardTitle>Cost Estimate</CardTitle>
                      <CardDescription>Transparent pricing</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Exact quote for the full credit restoration service - no hidden fees, no surprises. You decide if you want to proceed.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-600">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                    <div>
                      <CardTitle>30-Minute Consultation</CardTitle>
                      <CardDescription>Expert guidance</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Personal call with a credit restoration specialist to walk you through the findings and answer all your questions.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-400 dark:border-yellow-600 rounded-xl p-6 mb-12">
              <div className="flex gap-4 items-start">
                <AlertTriangle className="w-8 h-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-yellow-900 dark:text-yellow-100">Why We Charge R750</h3>
                  <p className="text-yellow-800 dark:text-yellow-200 mb-3">
                    Unlike "free" services that give you a computer-generated score, our R750 fee ensures:
                  </p>
                  <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>A qualified credit specialist personally reviews your file (not automated software)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>We pull actual reports from all 3 bureaus (costs us money to access)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>You're working with serious professionals, not data-harvesting websites</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>This filters out time-wasters - we only work with committed clients</span>
                    </li>
                  </ul>
                  <p className="text-yellow-900 dark:text-yellow-100 mt-4 font-semibold">
                    Quality investigation costs money. We'd rather serve 100 serious clients excellently than 10,000 casually.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center" data-testid="heading-order-form">
                  Order Your R750 Credit Investigation
                </CardTitle>
                <CardDescription className="text-center">
                  Secure payment. Your investigation begins within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8" data-testid="message-payment-redirect">
                    <Clock className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-pulse" />
                    <h3 className="text-2xl font-bold mb-2">Redirecting to Payment...</h3>
                    <p className="text-muted-foreground">
                      Please complete your secure R750 payment to start your investigation.
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} data-testid="input-firstName" />
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
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} data-testid="input-lastName" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="idNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>SA ID Number *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="9307245011085" 
                                maxLength={13}
                                {...field} 
                                data-testid="input-idNumber" 
                              />
                            </FormControl>
                            <FormDescription>Required to pull your credit reports from the bureaus</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
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
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="0685129001" {...field} data-testid="input-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="primaryConcern"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Main Credit Concern (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="E.g., Debt review, judgments, defaults, accounts in arrears..."
                                className="resize-none"
                                rows={3}
                                {...field}
                                value={field.value || ""}
                                data-testid="input-primaryConcern"
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
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <Checkbox
                                checked={field.value === "true"}
                                onCheckedChange={(checked) => field.onChange(checked ? "true" : "false")}
                                data-testid="checkbox-consent"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm cursor-pointer">
                                I consent to ADRA pulling my credit reports from all bureaus and conducting a professional 
                                investigation for R750. I understand this is a paid service. *
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
                        <p className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">Total: R750</p>
                        <p className="text-sm text-blue-700 dark:text-blue-300">One-time fee • Secure payment • Investigation starts within 24 hours</p>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full" 
                        size="lg"
                        disabled={mutation.isPending}
                        data-testid="button-proceed-payment"
                      >
                        {mutation.isPending ? (
                          <>
                            <Clock className="w-4 h-4 mr-2 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            Proceed to Secure Payment (R750)
                          </>
                        )}
                      </Button>

                      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                        <Lock className="w-4 h-4" />
                        <span>Secure payment powered by Stripe</span>
                        <Shield className="w-4 h-4" />
                        <span>POPIA compliant</span>
                      </div>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4 text-left">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What happens after I pay?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Within 24 hours, we pull your credit reports from all 3 bureaus and begin the investigation. 
                    Within 3-5 business days, you receive your comprehensive written report and we schedule your consultation call.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is the R750 refundable?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The R750 covers the cost of pulling your credit reports and professional analysis time. 
                    It's non-refundable as the work begins immediately. However, you're under no obligation to proceed with the full restoration service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if nothing can be removed?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We'll tell you honestly. The investigation shows exactly what's removable and what isn't. 
                    Even if nothing is unlawful, you'll receive guidance on rebuilding your credit properly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How much does the full service cost after investigation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    It depends on your specific case. Simple cases (1-2 removals) may be R3,500-R5,000. 
                    Complex cases (debt review, multiple judgments) range R8,000-R15,000. You get an exact quote in your investigation report.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
