import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 20, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Happy Clients" },
  { value: 12, suffix: "+", label: "Technologies Used" },
  { value: 2, suffix: "+", label: "Years of Learning" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(duration / target);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-primary" />
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">By The Numbers</h2>
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-foreground">Experience & Impact</h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-background border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]"
            >
              <div className="text-5xl md:text-6xl font-black text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] mb-3 tabular-nums">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
