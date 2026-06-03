import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiTelegram, SiTiktok, SiWhatsapp, SiGithub } from "react-icons/si";

const socials = [
  { icon: SiGithub, href: "#", label: "GitHub" },
  { icon: SiTelegram, href: "https://t.me/Mys3kings", label: "Telegram" },
  { icon: SiTiktok, href: "https://tiktok.com/@mys3kings", label: "TikTok" },
  { icon: SiWhatsapp, href: "https://wa.me/message/NBEZSE7HP5UBH1", label: "WhatsApp" },
  { icon: Mail, href: "mailto:kingsdavidfemi.15@gmail.com", label: "Email" },
];

const navLinks = ["About", "Skills", "Projects", "Services", "Contact"];

export default function Footer() {
  const handleScrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[15rem] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3"
          >
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center cursor-pointer hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 group"
            >
              <span className="text-3xl font-black text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-300">
                K
              </span>
            </div>
            <p className="text-xl font-black tracking-tight text-foreground">
              <span className="text-primary">K</span>INGS
            </p>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building modern digital experiences with clean design and powerful functionality.
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleScrollTo(link)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </motion.nav>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-3"
          >
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                data-testid={`footer-social-${i}`}
                className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Kings. All rights reserved. Built with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
