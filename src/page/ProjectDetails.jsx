import { useParams } from "react-router";
import projects from "../data/projectData";
import Slider from "react-slick";

const ProjectDetails = () => {
  const { id } = useParams();
    const project = projects.find((p) => p.id === Number(id));

  if (!project) return <div className="p-10 text-red-500">Project not found</div>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="min-h-screen bg-base-100 text-base-content px-6 md:px-20 py-16 space-y-8">
      <h2 className="text-4xl font-bold text-primary">{project.title}</h2>

      {/* 🔁 Image Slider */}
      <div className="md:h-[80vh] rounded-xl overflow-hidden shadow-lg">
        <Slider {...sliderSettings}>
          {project.images.map((img, index) => (
            <div className="" key={index}>
              <img
                src={img}
                alt={`${project.title} Screenshot ${index + 1}`}
                className="w-full object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Overview */}
      <div>
        <h3 className="text-xl font-semibold text-secondary">Overview:</h3>
        <p className="text-accent mt-2">{project.overview}</p>
      </div>

      {/* Role, Duration, Team */}
      <div className="grid md:grid-cols-3 gap-6 text-accent">
        <div>
          <span className="font-bold text-secondary">Role:</span> {project.role}
        </div>
        <div>
          <span className="font-bold text-secondary">Duration:</span> {project.duration}
        </div>
        <div>
          <span className="font-bold text-secondary">Team Size:</span> {project.teamSize}
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <h3 className="text-xl font-semibold text-secondary">Tech Stack:</h3>
        <div className="flex flex-wrap gap-3 mt-2">
          {project.techStack.map((tech, i) => (
            <span key={i} className="badge badge-outline text-primary">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <h3 className="text-xl font-semibold text-secondary">Tools & Libraries:</h3>
        <div className="flex flex-wrap gap-3 mt-2 text-accent">
          {project.tools.map((tool, i) => (
            <span key={i} className="badge badge-neutral">{tool}</span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-xl font-semibold text-secondary">Key Features:</h3>
        <ul className="list-disc list-inside mt-2 text-accent space-y-1">
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Routes */}
      <div>
        <h3 className="text-xl font-semibold text-secondary">Pages & Routes:</h3>
        <ul className="list-disc list-inside mt-2 text-accent space-y-1">
          {project.pagesRoutes.map((route, i) => (
            <li key={i}>{route}</li>
          ))}
        </ul>
      </div>

      {/* Challenges */}
      <div>
        <h3 className="text-xl font-semibold text-secondary">Challenges Faced:</h3>
        <p className="text-accent mt-2">{project.challenges}</p>
      </div>

      {/* Future Plans */}
      <div>
        <h3 className="text-xl font-semibold text-secondary">Future Plans:</h3>
        <p className="text-accent mt-2">{project.futurePlans}</p>
      </div>

      {/* Links */}
      <div className="flex gap-4 flex-wrap mt-6">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Live Site
        </a>
        <a
          href={project.clientRepo}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline btn-primary"
        >
          GitHub (Client)
        </a>
      </div>
    </section>
  );
};

export default ProjectDetails;
