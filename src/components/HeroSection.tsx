import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Web Developer", "Writer", "Graphic Designer"];

const FloatingShape = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -30, 0],
      rotate: [0, 10, -5, 0],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg">

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/[0.02] blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground tracking-[0.3em] uppercase text-xs md:text-sm mb-8 font-heading"
        >
          Portfolio · 2025
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="heading-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-gradient-gold mb-6"
        >
          Atharva Karbhari
        </motion.h1>

        <div className="h-10 md:h-12 flex items-center justify-center mb-12">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl lg:text-2xl tracking-[0.15em] uppercase font-heading text-muted-foreground"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="px-8 py-3.5 bg-primary/10 border border-primary/30 text-primary rounded-full font-heading text-sm tracking-wider uppercase hover:bg-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--gold)/0.15)]"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("skills")}
            className="px-8 py-3.5 border border-border text-muted-foreground rounded-full font-heading text-sm tracking-wider uppercase hover:border-silver/40 hover:text-foreground transition-all duration-500"
          >
            View Skills
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
