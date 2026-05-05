import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Rizeria14", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/atharva-karbhari-876365363/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:cricatharva@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="section-padding pb-12 relative">
      <div className="max-w-6xl mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="heading-display text-2xl md:text-3xl text-gradient-gold mb-4">
            Atharva Karbhari
          </h3>
          <p className="body-elegant text-muted-foreground text-sm max-w-md mx-auto mb-10">
            Crafting experiences through code, words, and design.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_20px_hsl(var(--gold)/0.1)]"
              >
                <social.icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <p className="text-muted-foreground/40 text-xs tracking-widest uppercase font-heading">
            © 2025 · All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
