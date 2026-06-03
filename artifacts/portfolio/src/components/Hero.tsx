import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Available for Work
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight mb-4 leading-tight">
            Hi, I'm <span className="text-primary drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]">Kings</span>
          </h1>
          <div className="h-12 mb-6">
            <motion.p
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl md:text-3xl font-semibold text-muted-foreground"
            >
              {roles[currentRole]}
            </motion.p>
          </div>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Building modern digital experiences with clean design and powerful functionality.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button
              data-testid="button-view-projects"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </button>
            <button
              data-testid="button-contact"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm text-foreground font-semibold hover:border-primary hover:text-primary transition-all duration-300"
            >
              Contact Me
            </button>
            <a
              data-testid="button-hire-me"
              href="mailto:kingsdavidfemi.15@gmail.com?subject=Hire%20Kings%20-%20Full%20Stack%20Developer"
              className="px-8 py-3 rounded-lg border border-primary/50 bg-primary/10 text-primary font-semibold hover:bg-primary/20 hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 border border-primary/30 shadow-[0_0_40px_rgba(59,130,246,0.2)] bg-card/30 backdrop-blur-xl">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full rounded-full overflow-hidden border border-white/5 bg-black"
            >
              <img
                src="/avatar.jpg"
                alt="Kings - Full Stack Developer"
                className="w-full h-full object-cover object-center object-top opacity-95 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
