import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-black text-white">

      <div className="max-w-4xl text-center">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Atharva Karbhari
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Computer Science student focused on building real-world software and privacy-first AI systems.
        </motion.p>

        {/* Tech stack quick view */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mt-6"
        >
          {["Python", "JavaScript", "React", "Ollama", "Mistral", "RAG"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-zinc-800 rounded-md text-gray-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
          >
            View Projects
          </button>

          <a
            href="https://github.com/Rizeria14"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-zinc-700 rounded-lg hover:border-white transition"
          >
            GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;