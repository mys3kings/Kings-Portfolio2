import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Luxury Car Showcase Website",
    description: "A stunning visual showcase for luxury automobiles with smooth transitions and a premium feel.",
    image: "/project-car.webp",
    tags: ["React", "Tailwind CSS", "Firebase"],
    live: "#",
    github: "#"
  },
  {
    title: "AI SaaS Dashboard",
    description: "A powerful analytics dashboard for an AI-powered SaaS platform with real-time data visualization.",
    image: "/project-dashboard.webp",
    tags: ["Next.js", "Node.js", "MongoDB"],
    live: "#",
    github: "#"
  },
  {
    title: "Modern Business Landing Page",
    description: "A high-converting landing page for a modern business brand, optimized for performance and conversions.",
    image: "/project-business.webp",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    live: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-24 bg-card" id="projects">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-primary"></div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Selected Works</h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-foreground">Featured Projects</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="p-6 relative z-10">
                <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-card border border-border rounded-full text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 border-t border-border pt-4">
                  <a href={project.live} className="flex flex-1 items-center justify-center gap-2 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center justify-center p-2 border border-border rounded-lg text-foreground hover:border-primary hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
