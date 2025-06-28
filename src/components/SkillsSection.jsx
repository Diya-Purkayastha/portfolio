// src/components/SkillsSection.jsx
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
    { name: "HTML5", icon: <FaHtml5 size={40} /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} /> },
    { name: "JavaScript", icon: <FaJsSquare size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "GitHub", icon: <FaGithub size={40} /> },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 mt-24 px-6 md:px-20 bg-base-100 text-base-content">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12">
                <h2 className="text-4xl font-bold">
                    My <span className="text-primary">Skills</span>
                </h2>
                <p className="text-accent mt-2 max-w-xl mx-auto">
                    Technologies I use to build full-stack web applications efficiently and beautifully.
                </p>

            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        className="bg-neutral rounded-xl p-6 flex flex-col items-center justify-center gap-2 
                        hover:scale-110 transition-transform shadow-[0_2px_10px_rgba(255,255,255,0.09)]"
                        initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 4px 20px rgba(255, 1, 79, 0.4)"}}
                    >
                        <div className="text-primary">{skill.icon}</div>
                        <p className="text-secondary text-sm font-medium mt-2">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
