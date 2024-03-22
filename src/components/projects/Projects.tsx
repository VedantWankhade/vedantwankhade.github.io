import ProjectCard from "../cards/ProjectCard"
import H1 from "../headers/H1"
import H2 from "../headers/H2"
import content from "../../content"

const Projects = () => (
    <>
        <div className="flex flex-col gap-2">
            <div>
                <H1 label="Projects" styles="from-ctp-blue to-ctp-red animate-slide-right" />
            </div>
            <div className="flex flex-wrap gap-4 animate-slide-up">
                {
                    content.projects.map(project => (
                        <ProjectCard borderColor={`border-ctp-${project.accent}`} title={project.title} styles={`text-ctp-${project.accent}`} description="lorem ipsumlorem ipsum" url={project.url} image={project.image} skills={project.skills} />
                    ))
                }
            </div>
        </div>
        {/* <div><p>Separator</p></div> */}
        <div className="hidden sm:block border-l-2 border-l-ctp-red pl-10 md:pl-28 h-min">
            <p>I have made</p>
           <ul>
            <li><H2 label="Distributed backends" styles="from-ctp-mauve to-ctp-pink animate-slide-left"></H2></li>
            <li><H2 label="CLI tools" styles="from-ctp-peach to-ctp-red animate-slide-left"></H2></li>
            <li><H2 label="Multithreaded apps" styles="from-ctp-pink to-ctp-green animate-slide-left"></H2></li>
           </ul>
        </div>
    </>
)

export default Projects
