import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="relative w-full overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Stats />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
