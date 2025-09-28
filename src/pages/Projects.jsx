import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            skills={p.skills}
            description={p.description}
          />
        ))}
      </div>
    </motion.section>
  );
}
