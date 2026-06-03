import { motion } from "framer-motion";
import { Code2, Smartphone, Layout, Palette, RefreshCw, Plug } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "End-to-end web applications built with modern technologies — from database architecture to polished user interfaces.",
  },
  {
    icon: Smartphone,
    title: "Responsive Website Design",
    description: "Pixel-perfect layouts that adapt beautifully across all devices, from mobile to ultra-wide desktop screens.",
  },
  {
    icon: Layout,
    title: "Landing Page Development",
    description: "High-converting, performance-optimized landing pages designed to capture attention and drive action.",
  },
  {
    icon: Palette,
    title: "UI/UX Frontend Design",
    description: "Crafting intuitive, visually stunning interfaces with a focus on user experience, accessibility, and delight.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Transforming outdated websites into modern, fast, and visually compelling digital experiences.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Seamlessly connecting third-party services, payment gateways, and external APIs into your application.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="services">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-primary" />
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">What I Offer</h2>
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-foreground">Services</h3>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Comprehensive development services tailored to build, enhance, and scale your digital presence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon
                    size={26}
                    className="text-primary group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
