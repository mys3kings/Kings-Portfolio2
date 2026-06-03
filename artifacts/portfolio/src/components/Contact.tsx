import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MessageCircle } from "lucide-react";
import { SiTelegram, SiTiktok, SiWhatsapp } from "react-icons/si";

const socialLinks = [
  {
    icon: SiTelegram,
    label: "Telegram",
    href: "https://t.me/Mys3kings",
    color: "hover:text-[#26A5E4] hover:border-[#26A5E4]/40 hover:shadow-[0_0_20px_rgba(38,165,228,0.2)]",
  },
  {
    icon: SiTiktok,
    label: "TikTok",
    href: "https://tiktok.com/@mys3kings",
    color: "hover:text-foreground hover:border-foreground/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
  },
  {
    icon: SiWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/message/NBEZSE7HP5UBH1",
    color: "hover:text-[#25D366] hover:border-[#25D366]/40 hover:shadow-[0_0_20px_rgba(37,211,102,0.2)]",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:kingsdavidfemi.15@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="contact">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50rem] h-[25rem] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-primary" />
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Get In Touch</h2>
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-foreground mb-4">Let's Work Together</h3>
          <p className="text-muted-foreground max-w-xl">
            Have a project in mind? Ready to build something great? Reach out and let's make it happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  data-testid="input-name"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  data-testid="input-email"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  data-testid="textarea-message"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                data-testid="button-submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {sent ? "Message Sent!" : <><Send size={18} /> Send Message</>}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between gap-8"
          >
            <div className="space-y-5">
              <a
                href="mailto:kingsdavidfemi.15@gmail.com"
                data-testid="link-email"
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">kingsdavidfemi.15@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:09033856757"
                data-testid="link-phone"
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">09033856757</p>
                </div>
              </a>

              <a
                href="https://wa.me/message/NBEZSE7HP5UBH1"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-whatsapp"
                className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold hover:bg-[#25D366]/20 hover:shadow-[0_0_20px_rgba(37,211,102,0.2)] transition-all duration-300"
              >
                <SiWhatsapp size={22} />
                Chat on WhatsApp
              </a>

              <a
                href="https://t.me/Mys3kings"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-telegram"
                className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#26A5E4]/10 border border-[#26A5E4]/30 text-[#26A5E4] font-semibold hover:bg-[#26A5E4]/20 hover:shadow-[0_0_20px_rgba(38,165,228,0.2)] transition-all duration-300"
              >
                <SiTelegram size={22} />
                Message on Telegram
              </a>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-4 font-medium">Connect on Social</p>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-social-${i}`}
                    aria-label={social.label}
                    className={`w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
                <a
                  href="mailto:kingsdavidfemi.15@gmail.com"
                  data-testid="link-social-email"
                  aria-label="Email"
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
