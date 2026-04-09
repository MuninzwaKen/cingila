import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/Landing";
import SignUp from "@/pages/SignUp";
import Demo from "@/pages/Demo";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark">
          <Switch>
            <Route path="/" component={Landing} />
            <Route path="/signup" component={SignUp} />
            <Route path="/demo" component={Demo} />
            <Route component={Landing} />
          </Switch>
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
