import { projectsData } from "./Data";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div>
      <div className="project__container container grid">
        {projectsData.map((item) => {
          return <ProjectItem item={item} key={item.id}/>}
        )}
      </div>
    </div>
  );
}

export default Projects;