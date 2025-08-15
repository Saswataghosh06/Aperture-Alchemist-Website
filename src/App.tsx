import { useEffect, useState } from "react"; // 🆕 to handle loader timeout
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Albums from "./pages/Albums";
import Designs from "./pages/Designs"; // ✅ New import
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/Footer";
import ScrollToTop from "./components/molecules/ScrollToTop";
import PageLoader from "./components/molecules/PageLoader"; // 🆕 import loader

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true); // 🆕 track loading state

  useEffect(() => {
    // 🆕 show loader for 3 seconds, then load main site
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="scroll-smooth">
            {/* 🆕 Show loader first, then the app */}
            {loading ? (
              <PageLoader />
            ) : (
              <>
                <Navbar />

                {/* Prevent content from going under the fixed navbar */}
                <div className="pt-32">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/albums" element={<Albums />} />
                    <Route path="/designs" element={<Designs />} /> {/* ✅ New route */}
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>

                <Footer />
                <ScrollToTop />
              </>
            )}
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
