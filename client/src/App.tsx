import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Process from "@/pages/process";
import Testimonials from "@/pages/testimonials";
import Contact from "@/pages/contact";
import FreeCreditAnalysis from "@/pages/free-credit-analysis";
import CreditInvestigation from "@/pages/credit-investigation";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/process" component={Process} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/contact" component={Contact} />
      <Route path="/free-credit-analysis" component={FreeCreditAnalysis} />
      <Route path="/credit-investigation" component={CreditInvestigation} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
