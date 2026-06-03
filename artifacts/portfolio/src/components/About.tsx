import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 bg-card" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-primary"></div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">About Me</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-foreground mb-6 leading-tight">
                Architecting the web with precision and purpose.
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a passionate Full Stack Developer with a relentless focus on creating modern, highly-performant web experiences. I believe that every interface should not just function flawlessly, but feel extraordinary.
                </p>
                <p>
                  Specializing in React, Node.js, and modern CSS frameworks, I bridge the gap between complex backend architectures and sleek, intuitive frontend designs. My commitment is to build digital products that leave a lasting impression.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-3xl"></div>
              <div className="relative bg-background border border-border rounded-xl p-6 shadow-xl font-mono text-sm">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-primary-foreground/80">
                  <p><span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                  <p className="ml-4">name: <span className="text-green-400">'Kings'</span>,</p>
                  <p className="ml-4">role: <span className="text-green-400">'Full Stack Developer'</span>,</p>
                  <p className="ml-4">focus: [<span className="text-green-400">'Performance'</span>, <span className="text-green-400">'UI/UX'</span>, <span className="text-green-400">'Scalability'</span>],</p>
                  <p className="ml-4">coffeeLevel: <span className="text-orange-400">100</span></p>
                  <p>{'};'}</p>
                  <br />
                  <p><span className="text-pink-500">developer</span>.<span className="text-yellow-200">build</span>();</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
