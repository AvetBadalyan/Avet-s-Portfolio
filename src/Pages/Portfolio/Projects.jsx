import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div className="portfolio__projects" data-aos="zoom-in-up">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
