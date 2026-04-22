
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Downloads from "./pages/Downloads";
import Games from "./pages/Games";
import VocabularyMatch from "./pages/VocabularyMatch";
import MathRacing from "./pages/MathRacing";
import ScienceLab from "./pages/ScienceLab";
import ReadingAdventure from "./pages/ReadingAdventure";
import MathFactsSpeedway from "./pages/MathFactsSpeedway";
import SentenceBuilder from "./pages/SentenceBuilder";
import ReadingDetective from "./pages/ReadingDetective";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/videos" element={<Navigate to="/downloads" replace />} />
          <Route path="/audio" element={<Navigate to="/downloads" replace />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/vocabulary-match" element={<VocabularyMatch />} />
          <Route path="/games/math-racing" element={<MathRacing />} />
          <Route path="/games/science-lab" element={<ScienceLab />} />
          <Route path="/games/reading-adventure" element={<ReadingAdventure />} />
          <Route path="/games/math-facts-speedway" element={<MathFactsSpeedway />} />
          <Route path="/games/sentence-builder" element={<SentenceBuilder />} />
          <Route path="/games/reading-detective" element={<ReadingDetective />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
