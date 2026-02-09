import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, BookOpen, Layers, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Web Development",
    subtitle: "Digital Experiences",
    description: "A curated collection of web projects built with modern frameworks and clean architecture.",
    icon: Code2,
    tags: ["React", "TypeScript", "Python"],
  },
  {
    title: "Writing",
    subtitle: "Words & Narratives",
    description: "Short novels, poetry, and prose exploring the human condition with literary precision.",
    icon: BookOpen,
    tags: ["Novels", "Poetry", "Essays"],
  },
  {
    title: "Graphic Design",
    subtitle: "Visual Language",
    description: "A showcase of compositions, branding, and visual design crafted with intentional aesthetics.",
    icon: Layers,
    tags: ["Branding", "Composition", "Visual"],
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoplay, active]);

  const next = () => {
    setAutoplay(false);
    setActive((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setAutoplay(false);
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-muted-foreground tracking-[0.3em] uppercase text-xs mb-4 font-heading">
            Selected Work
          </p>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold">
            Projects
          </h2>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative flex items-center justify-center" style={{ perspective: "1200px" }}>
          <div className="relative w-full max-w-lg md:max-w-2xl h-[420px] md:h-[460px]" style={{ transformStyle: "preserve-3d" }}>
            {projects.map((project, index) => {
              const offset = ((index - active + projects.length) % projects.length);
              // 0 = center, 1 = right, 2 = left (for 3 items)
              const isCenter = offset === 0;
              const isRight = offset === 1;
              const isLeft = offset === projects.length - 1;

              let translateX = 0;
              let translateZ = 0;
              let rotateY = 0;
              let opacity = 0.4;
              let scale = 0.8;
              let zIndex = 0;

              if (isCenter) {
                translateX = 0;
                translateZ = 80;
                rotateY = 0;
                opacity = 1;
                scale = 1;
                zIndex = 10;
              } else if (isRight) {
                translateX = 280;
                translateZ = -60;
                rotateY = -35;
                opacity = 0.5;
                scale = 0.85;
                zIndex = 5;
              } else if (isLeft) {
                translateX = -280;
                translateZ = -60;
                rotateY = 35;
                opacity = 0.5;
                scale = 0.85;
                zIndex = 5;
              }

              return (
                <motion.div
                  key={project.title}
                  className="absolute inset-0 w-full cursor-pointer"
                  animate={{
                    x: translateX,
                    z: translateZ,
                    rotateY,
                    opacity,
                    scale,
                  }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    zIndex,
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => {
                    if (!isCenter) {
                      setAutoplay(false);
                      setActive(index);
                    }
                  }}
                >
                  <div className={`glass-card p-8 md:p-10 lg:p-12 h-full transition-all duration-700 ${isCenter ? "border-primary/15 shadow-[0_0_60px_hsl(var(--gold)/0.06)]" : ""}`}>
                    <div className="flex items-start justify-between mb-8">
                      <div className="p-3 rounded-xl bg-primary/5">
                        <project.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <ArrowUpRight
                        className={`w-5 h-5 transition-all duration-500 ${isCenter ? "text-primary/70" : "text-muted-foreground/30"}`}
                        strokeWidth={1.5}
                      />
                    </div>

                    <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-heading mb-2">
                      {project.subtitle}
                    </p>
                    <h3 className="heading-display text-2xl md:text-3xl text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="body-elegant text-muted-foreground text-sm mb-8 max-w-md">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full font-heading tracking-wider bg-primary/5 text-primary/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-500"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>

          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => { setAutoplay(false); setActive(i); }}
                className={`h-1 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-primary" : "w-3 bg-muted-foreground/20 hover:bg-muted-foreground/40"}`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-500"
            aria-label="Next project"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
