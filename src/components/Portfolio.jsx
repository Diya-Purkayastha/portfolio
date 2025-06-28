import { motion } from "framer-motion";
import {Link} from 'react-router'

const projects = [
  {
    id: 1,
    title: "Recipe Book",
    desc: "A full-stack web app where users can add, like, and manage recipes with authentication.",
    tech: ["React", "Tailwind", "MongoDB", "Node.js"],
    image: "/project1.jpg",
    live: "https://recipebook.com",
    code: "https://github.com/Diya-Purkayastha/recipe-book-client",
  },
  {
    id: 2,
    title: "Lawyer Booking App",
    desc: "A lawyer appointment booking app with profile pages, dynamic routes, and local storage.",
    tech: ["React", "Firebase", "DaisyUI"],
    image: "/project2.jpg",
    live: "https://lawyerbookings.netlify.app",
    code: "https://github.com/programming-hero-web-course1/b11a8-router-booking-Diya-Purkayastha",
  },
  {
    id: 3,
    title: "Subscription Box",
    desc: "Responsive e-commerce style subscription box platform with user authentication.",
    tech: ["React", "Firebase", "Express"],
    image: "/project3.jpg",
    live: "https://subscriptionbox.com",
    code: "https://github.com/Diya-Purkayastha/subscription-box",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 mt-24 px-6 md:px-20 bg-base-100 text-base-content">
      <motion.div className="text-center mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-accent mt-2 max-w-xl mx-auto">
          A closer look at some of my most complete and detailed work.
        </p>
      </motion.div>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-8 bg-neutral p-6 rounded-2xl shadow-[0_2px_20px_rgba(255,255,255,0.05)]`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 4px 20px rgba(255, 1, 79, 0.4)", // glowing primary color
            }}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-full object-cover h-72 md:h-80 shadow-md"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-secondary">{project.title}</h3>
              <p className="text-accent">{project.desc}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#2a2e32] text-sm text-secondary px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center md:justify-start gap-4 pt-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  Live Site
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm border border-primary text-primary hover:bg-primary hover:text-white"
                >
                  GitHub
                </a>
                <Link
                  to={`/project/${project.id}`}
                  className="btn btn-sm border border-primary text-primary hover:bg-primary hover:text-white"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
