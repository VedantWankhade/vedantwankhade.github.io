import H1 from "../headers/H1"
import H2 from "../headers/H2"
import ProjectCard from "../cards/ProjectCard"

const Contributions = () =>  (
    <>
        <div className="flex flex-col gap-2">
            <div>
                <H1 label="Contributions" styles="from-ctp-blue to-ctp-yellow animate-slide-right" />
            </div>
            <div className="flex flex-wrap gap-4 animate-slide-up">
                <ProjectCard borderColor="border-ctp-red" title="tgpt" styles="text-ctp-red" description="llorem ipsumlorem ipsumolorem ipsumrem ipsum" url="https://github.com/vedantwankhade/" image="github" skills={["Go", "Bugfix"]} />
                <ProjectCard borderColor="border-ctp-green" title="KDE PLasma (Discover)" styles="text-ctp-green" description="lorem ipsumlorem ipsumlorem ipsum" url="https://github.com/vedantwankhade/" image="github" skills={["Linux", "Bugfix", "QT", "QML"]} /> 
            </div>
        </div>
        {/* <div><p>Separator</p></div> */}
        <div className="hidden sm:block border-l-2 border-l-ctp-peach pl-10 md:pl-28 h-min">
            <p>I have made</p>
           <ul>
            <li><H2 label="Distributed backends" styles="from-ctp-mauve to-ctp-pink animate-slide-left"></H2></li>
            <li><H2 label="CLI tools" styles="from-ctp-peach to-ctp-red animate-slide-left"></H2></li>
            <li><H2 label="Multithreaded apps" styles="from-ctp-pink to-ctp-green animate-slide-left"></H2></li>
           </ul>
        </div>
    </>
)
export default Contributions
