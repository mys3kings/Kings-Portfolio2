import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiTailwindcss, SiFirebase, 
  SiSupabase, SiMongodb, SiGithub 
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS", icon: SiCss, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Express.js", icon: SiExpress, color: "text-foreground" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "GitHub", icon: SiGithub, color: "text-foreground" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section className="py-24 bg-background" id="skills">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-primary"></div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">My Arsenal</h2>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-foreground">Technologies & Tools</h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-card border border-border hover:border-primary/50 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
            >
              <skill.icon className={`text-4xl opacity-80 group-hover:opacity-100 transition-opacity ${skill.color}`} />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
