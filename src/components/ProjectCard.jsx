

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";

export default function ProjectCard({ title, skills, description, github }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => setOpen(!open)}
      className="
        bg-white rounded-lg p-6 cursor-pointer transition-all duration-300
        shadow-md hover:shadow-[0_0_25px_#60a5fa]
      "
    >
      {/* Title + GitHub link */}
      <div className="flex items-center justify-between">
        <motion.h3 layout className="text-lg font-bold text-gray-800">
          {title}
        </motion.h3>

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // prevent card toggle
            className="text-gray-600 hover:text-black transition"
          >
            <Github size={22} />
          </a>
        )}
      </div>

      {/* Skills */}
      <motion.div layout className="mt-3 flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="
              rounded-full bg-blue-50 px-3 py-1 text-xs font-medium 
              text-blue-700 ring-1 ring-blue-200
            "
          >
            {s}
          </span>
        ))}
      </motion.div>

      {/* Expandable description */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 text-sm text-gray-700 leading-relaxed"
          >
            {description}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
