import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Globe, Code2 } from "lucide-react";

const projects = [
  {
    title: "Nexus – Local AI Assistant",
    description:
      "A privacy-first AI system built using Retrieval-Augmented Generation (RAG), running fully offline with Ollama and Mistral. Enables intelligent querying of local data with zero external API usage.",
    tech: ["Python", "Ollama", "Mistral", "RAG"],
    link: "https://github.com/Rizeria14/nexus-ai",
    icon: BrainCircuit,
    featured: true,
  },
  {
    title: "EnchantScript – Poem Blog",
    description:
      "A responsive website to publish and showcase original poems with a clean UI and structured content layout for smooth reading experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://www.enchantscript.com",
    icon: Globe,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React and TypeScript to showcase projects, skills, and development work.",
    tech: ["React", "TypeScript"],
    link: "/",
    icon: Code2,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
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
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What I’ve Built
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`border rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] 
              ${project.featured 
                ? "bg-zinc-900 border-zinc-700 shadow-[0_0_40px_rgba(255,255,255,0.05)] md:col-span-2" 
                : "bg-zinc-900 border-zinc-800 hover:border-zinc-600"}`}
            >

              {/* Top */}
              <div className="flex items-center justify-between mb-4">
                <project.icon className="w-6 h-6 text-white opacity-80" />

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-zinc-800 rounded-md text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;