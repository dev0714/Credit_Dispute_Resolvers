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
import { CheckCircle2, FileText, TrendingUp, Shield, AlertCircle, Clock, Award } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function FreeCreditAnalysis() {
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
      return await apiRequest("POST", "/api/credit-report-analysis", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Request Submitted Successfully!",
        description: "We'll pull your credit report and contact you within 24 hours with your free analysis.",
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">100% Free - No Obligation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="heading-hero">
              Get Your Free Credit Report Analysis
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8" data-testid="text-hero-subtitle">
              Discover what's holding back your financial freedom. We'll pull and analyze your credit report completely free.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>24-Hour Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Expert Analysis Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card data-testid="card-benefit-pull">
              <CardHeader>
                <FileText className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>We Pull Your Report</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  You don't need to do anything. We'll pull your credit report directly from the bureaus.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-benefit-analyze">
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>Expert Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Our specialists identify listings that can be removed and opportunities to improve your score.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-benefit-action">
              <CardHeader>
                <Shield className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>Action Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Receive a detailed roadmap showing exactly what can be fixed and how we can help.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-benefit-free">
              <CardHeader>
                <Award className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>100% Free</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  No cost, no obligations. Just honest insights about your credit situation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-understand">
                Understanding Your Credit Report
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-start gap-2">
                    <AlertCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    What is a Credit Report?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Your credit report is a detailed record of your financial history. It's like your financial reputation - 
                    showing every loan, credit card, store account, and payment you've made. Banks, landlords, and employers 
                    check this before deciding whether to trust you with credit or opportunities.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">What's Inside Your Credit Report</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Personal Information:</strong> Your name, ID number, addresses, and employment history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Account History:</strong> All your credit accounts, balances, and 24-month payment history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Credit Score:</strong> A number (0-999) showing how risky you are to lenders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Negative Listings:</strong> Defaults, debt review status, judgments, and arrears</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Why Your Credit Score Matters</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Your credit score is a three-digit number that summarizes your entire credit history:
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">660+ (Excellent)</span>
                      <span className="text-green-600 dark:text-green-400">Low risk - best rates</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">610-659 (Good)</span>
                      <span className="text-blue-600 dark:text-blue-400">Moderate risk</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Below 610 (Poor)</span>
                      <span className="text-red-600 dark:text-red-400">High risk - may be rejected</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">What Can Be Removed?</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Not everything on your credit report is permanent. Our expert analysis will identify:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span><strong>Debt Review Status:</strong> Can be removed with clearance certificate or court order</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span><strong>Prescribed Debt:</strong> Debts older than 3 years that can be legally cleared</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span><strong>Judgments:</strong> Can be rescinded through proper legal channels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span><strong>Incorrect Listings:</strong> Errors and outdated information that shouldn't be there</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-2xl" data-testid="heading-form">Request Your Free Credit Report Analysis</CardTitle>
                  <CardDescription>
                    Fill in your details below and we'll pull your credit report from the bureaus. 
                    You'll receive your personalized analysis within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8" data-testid="message-success">
                      <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        We're pulling your credit report now. Our team will analyze it and contact you within 24 hours 
                        with your free analysis and personalized action plan.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline" data-testid="button-submit-another">
                        Submit Another Request
                      </Button>
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
                              <FormDescription>Required to pull your credit report</FormDescription>
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

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="employerName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Current Employer (Optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="Company Name" {...field} value={field.value || ""} data-testid="input-employerName" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="monthlyIncome"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Monthly Income (Optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="R 15,000" {...field} value={field.value || ""} data-testid="input-monthlyIncome" />
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
                              <FormLabel>What's Your Main Credit Concern? (Optional)</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="E.g., I'm under debt review and want it removed, I have judgments, my credit score is very low..."
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
                                  I consent to Credit Dispute Resolvers pulling my credit report from the credit bureaus 
                                  and analyzing it for the purpose of this free assessment. *
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full" 
                          size="lg"
                          disabled={mutation.isPending}
                          data-testid="button-submit-form"
                        >
                          {mutation.isPending ? (
                            <>
                              <Clock className="w-4 h-4 mr-2 animate-spin" />
                              Submitting Request...
                            </>
                          ) : (
                            "Get My Free Credit Analysis"
                          )}
                        </Button>

                        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                          Your information is secure and will only be used to pull and analyze your credit report.
                        </p>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-what-happens">
              What Happens Next?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">We Pull Your Report</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Using your ID number, we'll securely pull your credit report from TransUnion, Experian, or XDS.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our specialists review every detail - identifying removable listings and improvement opportunities.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">You Get Results</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Within 24 hours, we'll contact you with your analysis and a clear action plan to fix your credit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
