import SkillCard from "../cards/SkillCard"
import H1 from "../headers/H1"
import H2 from "../headers/H2"
import { skills } from "../../content"

const Skills = () => (
    <>
        <div className="flex flex-col gap-2">
            <div>
                <H1 label={skills.title.title} styles={`${skills.title.gradient} animate-slide-right mb-6`} />
            </div>
            <div className="flex flex-wrap gap-4 animate-slide-up">
                {
                    skills.skills.map(skill => (
                        <SkillCard key={skill.title} borderColor={`border-ctp-${skill.accent}`} title={skill.title} styles={`text-ctp-${skill.accent}`} image={skill.image} skills={skill.skills} />
                    ))
                }
            </div>
        </div>
        {/* <div><p>Separator</p></div> */}
        <div className="hidden sm:block border-l-2 border-l-ctp-green pl-10 md:pl-28 h-min">
            <p>{skills.sidebar.header}</p>
           <ul>
            {
                skills.sidebar.titles.map(title => (
                    <li key={title.title}><H2 label={title.title} styles={`${title.gradient} animate-slide-left`}></H2></li>
                ))
            }
           </ul>
        </div>
    </>
)

export default Skills
