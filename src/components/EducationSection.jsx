import { motion } from "framer-motion";
import eduimg from '../assets/Learning.gif'

const educationData = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    place: "RTM AKTU University",
    duration: "2021 – Present (4th Year)",
    desc: "Pursuing my bachelor's degree with a focus on full-stack development, AI, and modern web technologies.",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    place: "Blue Bird School and College",
    duration: "Completed in 2020",
    desc: "Completed HSC in Science stream with GPA 4.75, building a strong foundation in programming and logic.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="mt-24 py-24 px-6 md:px-20 bg-[#0f0f0f] text-base-content">
      <motion.div className="text-center mb-12"
      initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}>
        <h2 className="text-4xl font-bold">
          My <span className="text-primary">Education</span>
        </h2>
        <p className="text-accent mt-2 max-w-xl mx-auto">
          A timeline of my academic journey.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
        {/* Left: Timeline Content */}
        <motion.div className="md:w-2/3 relative"
         initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
          {/* Timeline vertical line */}
          <div className="absolute left-3 top-0 w-1 bg-base-300 h-full rounded"></div>

          {/* Timeline Items */}
          <div className="space-y-12 pl-10">
            {educationData.map((edu, index) => (
              <div key={index} className="relative">
                {/* Dot marker */}
                <div className="absolute -left-6 top-1 w-4 h-4 bg-primary rounded-full border-4 border-base-100"></div>
                <h3 className="text-xl font-semibold text-secondary">{edu.title}</h3>
                <p className="text-accent font-medium">{edu.place}</p>
                <p className="text-sm text-accent italic mb-2">{edu.duration}</p>
                <p className="text-accent">{edu.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Illustration */}
        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }} 
        className="md:w-1/3 flex justify-center">
          <img
            src={eduimg} 
            alt="Education Illustration"
            className="w-full max-w-xs md:max-w-md mx-auto"
          />
      </motion.div>
        </div>
    </section>
  );
};

export default EducationSection;
