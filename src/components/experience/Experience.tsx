import ExperienceCard from "../cards/ExperienceCard"
import H1 from "../headers/H1"
import H2 from "../headers/H2"
import { experience } from "../../content"

const Experience = () => (
    <>
        <div className="flex flex-col gap-2">
            <div>
            <H1 label={experience.title.title} styles={`${experience.title.gradient} animate-slide-right mb-6`} />
            </div>
            <div className="flex flex-col gap-4 animate-slide-up">
                {
                    experience.experiences.map(experience => (
                        <ExperienceCard key={experience.org} borderColor={`border-ctp-${experience.accent}`} org={experience.org} roles={experience.roles} current={experience.current} styles={`text-ctp-${experience.accent}`} image={experience.image} />
                    ))
                }
            </div>
        </div>
        {/* <div><p>Separator</p></div> */}
        <div className="hidden sm:block border-l-2 border-l-ctp-mauve pl-10 md:pl-28 h-min">
            <p>{experience.sidebar.header}</p>
           <ul>
            {
                experience.sidebar.titles.map(title => (
                    <li key={title.title}><H2 label={title.title} styles={`${title.gradient} animate-slide-left`}></H2></li>
                ))
            }
           </ul>
        </div>
    </>
)  

export default Experience
