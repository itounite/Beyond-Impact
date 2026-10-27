import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Funds from "./pages/Funds.tsx";
import Advisory from "./pages/Advisory.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import BlueEconomy from "./pages/BlueEconomy.tsx";
import Insights from "./pages/Insights.tsx";
import InsightDetail from "./pages/InsightDetail.tsx";
import Media from "./pages/Media.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blue-economy" element={<BlueEconomy />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/media" element={<Media />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
