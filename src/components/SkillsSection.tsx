import { motion } from "framer-motion";
import { Code2, BrainCircuit, Wrench } from "lucide-react";

const skills = [
  {
    icon: BrainCircuit,
    title: "AI & Generative Systems",
    description:
      "Building privacy-first AI systems with local LLMs, focusing on Retrieval-Augmented Generation (RAG) and efficient model deployment.",
    tags: ["Python", "Ollama", "Mistral", "RAG", "Prompt Engineering"],
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Developing responsive and scalable web applications with clean UI, strong fundamentals, and modern frontend practices.",
    tags: ["JavaScript", "React", "HTML", "CSS"],
  },
  {
    icon: Wrench,
    title: "Core CS & Tools",
    description:
      "Strong foundation in data structures, problem solving, and development tools used in real-world software engineering.",
    tags: ["Data Structures", "OOP", "Git", "Debugging"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-muted-foreground tracking-[0.3em] uppercase text-xs mb-4">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What I Build & Work With
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-all duration-300 hover:scale-[1.02]"
            >
              <skill.icon className="w-6 h-6 mb-4 text-white opacity-80" />

              <h3 className="text-lg font-semibold mb-2">
                {skill.title}
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-zinc-800 rounded-md text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;