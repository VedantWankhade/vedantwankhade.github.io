import ProjectCard from "../cards/ProjectCard"
import H1 from "../headers/H1"
import H2 from "../headers/H2"

const Projects = () => (
    <>
        <div className="flex flex-col gap-2">
            <div>
                <H1 label="Projects" styles="from-ctp-blue to-ctp-red animate-slide-right" />
            </div>
            <div className="flex flex-wrap gap-4 animate-slide-up">
                <ProjectCard title="Project 1" styles="text-ctp-sky" description="llorem ipsumlorem ipsumolorem ipsumrem ipsum" url="https://github.com/vedantwankhade/" image="github" skills={["Linux", "Tmux", "NixOS"]} />
                <ProjectCard title="Project 2" styles="text-ctp-sky" description="lorem ipsumlorem ipsumlorem ipsum" url="https://github.com/vedantwankhade/" image="github" skills={["Linux", "Tmux", "NixOS"]} />
                <ProjectCard title="Project 3" styles="text-ctp-sky" description="lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum" url="https://github.com/vedantwankhade/" image="github" skills={["Linux", "Tmux", "NixOS"]} />
                <ProjectCard title="Project 4" styles="text-ctp-sky" description="lorem ipsumlorem ipsum" url="https://github.com/vedantwankhade/" image="github" skills={["Linux", "Tmux", "NixOS"]} />
                <ProjectCard title="Project 5" styles="text-ctp-sky" description="lorem ipsumlorem ipsumlorem ipsumlorem ipsum" url="https://github.com/vedantwankhade/" image="github" skills={["Linux", "Tmux", "NixOS"]} />
            </div>
        </div>
        {/* <div><p>Separator</p></div> */}
        <div className="hidden sm:block border-l-2 pl-10 md:pl-28 h-min">
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
