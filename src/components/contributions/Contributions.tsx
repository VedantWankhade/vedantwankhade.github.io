import H1 from "../headers/H1"
import H2 from "../headers/H2"
import ProjectCard from "../cards/ProjectCard"
import { contributions } from "../../content"

const Contributions = () =>  (
    <>
        <div className="flex flex-col gap-2">
            <div>
                <H1 label={contributions.title} styles="from-ctp-blue to-ctp-yellow animate-slide-right" />
            </div>
            <div className="flex flex-wrap gap-4 animate-slide-up">
                {/* <ProjectCard borderColor="border-ctp-red" title="tgpt" styles="text-ctp-red" description="llorem ipsumlorem ipsumolorem ipsumrem ipsum" url="https://github.com/vedantwankhade/" image="github" skills={["Go", "Bugfix"]} />
                <ProjectCard borderColor="border-ctp-green" title="KDE PLasma (Discover)" styles="text-ctp-green" description="lorem ipsumlorem ipsumlorem ipsum" url="https://github.com/vedantwankhade/" image="github" skills={["Linux", "Bugfix", "QT", "QML"]} />  */}
                {
                    contributions.contributions.map(contrib => (
                        <ProjectCard key={contrib.title} borderColor={`border-ctp-${contrib.accent}`} title={contrib.title} styles={`text-ctp-${contrib.accent}`} description={contrib.description} url={contrib.url} image={contrib.image} skills={contrib.skills} />
                    ))
                }
            </div>
        </div>
        {/* <div><p>Separator</p></div> */}
        <div className="hidden sm:block border-l-2 border-l-ctp-peach pl-10 md:pl-28 h-min">
            <p>{contributions.sideHeader}</p>
           <ul>
            {
                contributions.sideTitles.map(title => (
                    <li key={title.title}><H2 label={title.title} styles={`${title.gradient} animate-slide-left`}></H2></li>
                ))
            }
           </ul>
        </div>
    </>
)

export default Contributions
