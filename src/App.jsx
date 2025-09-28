import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Github, Linkedin, Mail } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

// ---------------- Spinning 3D Poly ----------------
function SpinningPoly() {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.6;
    ref.current.rotation.y += delta * 0.6;
  });
  return (
    <mesh ref={ref} position={[0, -2, 0]}> {/* 👈 Y = -1 moves it down */}
      <icosahedronGeometry args={[1.8, 0]} />
      <meshStandardMaterial color="pink" metalness={0.2} roughness={0.3} />
    </mesh>
  );
}

export default function App() {
  const skills = {
    Programming: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript"],
    "Web / Full-Stack": ["React", "Node.js", "Express", "MERN", "REST APIs"],
    "AI / ML": ["Transformers", "LLMs", "LangChain", "LangGraph", "NLP", "Generative AI"],
    "Cloud / DevOps": ["AWS", "Docker", "Git", "Maven", "CI/CD"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB", "NoSQL"],
    "Tools": ["MLFlow", "KubeFlow", "Selenium", "Postman", "JIRA", "Agile/Scrum"]
  };

  return (
   <div className="min-h-screen bg-[url('/pattern.jpg')] bg-cover bg-fixed text-gray-900">


      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[3, 3, 2]} intensity={0.6} />
            <SpinningPoly />
            <OrbitControls enableZoom={false} enablePan={false} />
            <Stars radius={100} depth={50} count={5000} factor={10} saturation = {0} />
          </Canvas>
        </div>
        <motion.header
          className="text-center z-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold mb-2 drop-shadow-lg mb-10">Hi 👋! I am Afnan</h1>
          <p className="text-blue-600 text-lg mb-10">Software Engineering | AI/ML | Full-Stack Development</p>
          <h2 className="text-lg font-mono mt-2 max-w-2xl mx-auto mb-30">
            Computer Science Graduate student at California State University,
            Sacramento with experience in Full Stack and AI/ML
          </h2>
          <motion.img
            src="/profile.jpg"
            alt="Profile"
            className="w-50 h-60 mx-auto rounded-full shadow-lg mt-16 object-cover border-4 border-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_blue]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.header>
      </section>

     {/* Education */}
<motion.section id="education" className="max-w-5xl mx-auto mb-16 px-4">
  <h2 className="text-2xl font-bold mb-6">Education</h2>
  <div className="bg-white rounded-lg shadow p-6 space-y-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#60a5fa]">
    <div className="flex items-center gap-3">
      <img src="/csus.png" alt="CSUS Logo" className="w-15 h-15" />
      <h3 className="font-semibold font-mono">California State University, Sacramento</h3>
    </div>
    <p>Master’s in Computer Science (2025–2027)</p>

    <div className="flex items-center gap-3">
      <img src="/ou.jpeg" alt="OU Logo" className="w-15 h-15" />
      <h3 className="font-semibold font-mono">Osmania University, Hyderabad</h3>
    </div>
    <p>B.E. Computer Science & Engineering (2021–2025) — Rank 1, CGPA: 9.29/10</p>
  </div>
</motion.section>

{/* Work Experience */}
<motion.section id="work" className="max-w-5xl mx-auto mb-16 px-4">
  <h2 className="text-2xl font-bold mb-6">Work Experience 💼</h2>
  <div className="bg-white rounded-lg shadow p-6 space-y-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#facc15]">
    <div className="flex items-center gap-3">
      <img src="/cognizant.jpeg" alt="Cognizant Logo" className="w-15 h-15" />
      <h3 className="font-semibold">Cognizant Technology Solutions</h3>
    </div>
    <p className="text-gray-600">Programmer Analyst Trainee — May 2025 - July 2025</p>
    <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-2">
      <li>Worked as part of a Java Full Stack development and QA Automation team.</li>
      <li>Applied GenAI tools in QEA Automation and used Selenium-based UI test scripts.</li>
      <li>Collaborated with cross-functional teams using Git and Maven.</li>
      <li>Participated in Agile/Scrum ceremonies and delivered features in sprints.</li>
    </ul>
  </div>
</motion.section>


      {/* Research */}
      {/* <motion.section id="research" className="max-w-5xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-bold mb-6">Research Experience 📃</h2>
        <div className="bg-white rounded-lg shadow p-6 space-y-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#34d399]">
          <h3 className="font-semibold">
            Assessing the Capabilities of MBERT and FLAN-T5 in Detecting Multilingual Suspicious Messages
          </h3>
          <p className="text-gray-700 mt-2">
            Worked with a professor on this research paper, which was accepted in ICACECS-2025 and will be published
            in Springer Nature Scopus indexed series <em>Smart Innovation, Systems and Technologies (SIST)</em>.
          </p>
        </div>
      </motion.section> */}
      {/* Research */}
<motion.section id="research" className="max-w-5xl mx-auto mb-16 px-4">
  <h2 className="text-2xl font-bold mb-6">Research Experience 📃</h2>
  <div className="bg-white rounded-lg shadow p-6 space-y-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#34d399]">
    <h3 className="font-semibold font-mono">
      Evaluating the Capabilities of MBERT and FLAN-T5 in Detection of Multilingual Skeptical Messages
    </h3>
    <p className="text-gray-700 mt-2">
      Worked with a professor on this research paper, which was accepted in ICACECS-2025 and will be published
      in Springer Nature Scopus indexed series <em>Smart Innovation, Systems and Technologies (SIST)</em>.
    </p>

    {/* Certificate Link Button */}
    <a
      href="/certificate.jpg" // <- place your certificate file inside "public/certificate.jpg"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 mt-3 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
    >
      🔗 View Certificate
    </a>
  </div>
</motion.section>


      {/* Skills */}
      <motion.section id="skills" className="max-w-5xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-bold mb-6">Skills 💻</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="p-5 bg-white rounded-xl shadow cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#f472b6]"
            >
              <h4 className="font-bold text-blue-600">{category}</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section id="projects" className="max-w-5xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-bold mb-2">Projects ⚙️</h2>
        <h4 className="text-1xl font-mono mb-6">[ Click on each project card to know more ]</h4>
        <div className="grid md:grid-cols-2 gap-6 ">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section id="contact" className="max-w-5xl mx-auto text-center px-4 mb-16">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <div className="flex justify-center gap-6">
          <a href="mailto:afnansabir10@outlook.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-7 h-7 hover:text-blue-500" />
          </a>
          <a href="https://github.com/sabir-10" target="_blank" rel="noopener noreferrer">
            <Github className="w-7 h-7 hover:text-blue-800" />
          </a>
          <a href="https://linkedin.com/in/afnan-sabir-mohammed" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-7 h-7 hover:text-blue-700" />
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4">
        <p className="text-sm text-gray-700">© 2025 Afnan Sabir Mohammed. All rights reserved.</p>
      </footer>
    </div>
  );
}


