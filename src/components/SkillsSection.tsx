import { motion } from "framer-motion";
import { Code2, Pen, Palette } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Crafting performant, elegant digital experiences with modern technologies.",
    tags: ["Python", "JavaScript", "HTML", "CSS"],
    accent: "gold" as const,
  },
  {
    icon: Pen,
    title: "Writing",
    description: "Weaving narratives through short novels and poetry that resonate deeply.",
    tags: ["Short Novels", "Poems", "Storytelling"],
    accent: "blue" as const,
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Visual compositions that communicate with clarity and creative precision.",
    tags: ["Visual Design", "Compositions", "Branding"],
    accent: "gold" as const,
  },
];

const accentStyles = {
  gold: {
    iconColor: "text-gold",
    border: "hover:border-gold/20",
    glow: "group-hover:shadow-[0_0_40px_hsl(var(--gold)/0.08)]",
    tagBg: "bg-gold/5 text-gold/70",
  },
  blue: {
    iconColor: "text-electric-blue",
    border: "hover:border-electric-blue/20",
    glow: "group-hover:shadow-[0_0_40px_hsl(var(--electric-blue)/0.08)]",
    tagBg: "bg-electric-blue/5 text-electric-blue/70",
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-muted-foreground tracking-[0.3em] uppercase text-xs mb-4 font-heading">
            Expertise
          </p>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold">
            What I Do
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => {
            const styles = accentStyles[skill.accent];
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group glass-card p-8 lg:p-10 transition-all duration-700 ${styles.border} ${styles.glow}`}
              >
                <skill.icon className={`w-6 h-6 ${styles.iconColor} mb-6 opacity-70`} strokeWidth={1.5} />
                <h3 className="font-heading text-xl mb-3 text-foreground tracking-tight">
                  {skill.title}
                </h3>
                <p className="body-elegant text-muted-foreground text-sm mb-6">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full font-heading tracking-wider ${styles.tagBg}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
