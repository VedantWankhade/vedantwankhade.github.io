import ProjectCard from "../cards/ProjectCard"
import H1 from "../headers/H1"
import H2 from "../headers/H2"
import { projects } from "../../content"

const Projects = () => (
    <>
        <div className="flex flex-col gap-2">
            <div>
                <H1 label={projects.title.title} styles={`${projects.title.gradient} animate-slide-right`} />
            </div>
            <div className="flex flex-wrap gap-4 animate-slide-up">
                {
                    projects.projects.map(project => (
                        <ProjectCard key={project.title} borderColor={`border-ctp-${project.accent}`} title={project.title} styles={`text-ctp-${project.accent}`} description={project.description} url={project.url} image={project.image} skills={project.skills} />
                    ))
                }
            </div>
        </div>
        {/* <div><p>Separator</p></div> */}
        <div className="hidden sm:block border-l-2 border-l-ctp-red pl-10 md:pl-28 h-min">
            <p>{projects.sidebar.header}</p>
           <ul>
            {
                projects.sidebar.titles.map(title => (
                    <li key={title.title}><H2 label={title.title} styles={`${title.gradient} animate-slide-left`}></H2></li>
                ))
            }
           </ul>
        </div>
    </>
)

export default Projects
