import { Role } from "../../types"
import ExperienceCard from "../cards/ExperienceCard"
import H1 from "../headers/H1"
import H2 from "../headers/H2"

const ctsroles: Role[] = [
    {
        name: "Junior Software Engineer",
        description: "Did some stuff",
        year: "2024"
    },
    {
        name: "Intern",
        description: "Did some stuffDid some stuffDid some stuffDid some stuff",
        year: "2021"
    }
]

const clg: Role[] = [
    {
        name: "Student",
        description: "Did nothing",
        year: "2021"
    }
]

const Experience = () => (
    <>
        <div className="flex flex-col gap-2">
            <div>
            <H1 label="Experience" styles="from-ctp-pink to-ctp-teal animate-slide-right" />
            </div>
            <div className="flex flex-col gap-4 animate-slide-up">
                <ExperienceCard borderColor="border-ctp-yellow" current org="Cognizant" roles={ctsroles} styles="text-ctp-yellow" image="building" skills={["Linux", "Tmux", "NixOS"]} />
                <ExperienceCard borderColor="border-ctp-yellow" org="Prof Ram Meghe Insitute of Technology" roles={clg} styles="text-ctp-blue" image="graduation-cap" skills={["Linux", "Tmux", "NixOS"]} />
            </div>
        </div>
        {/* <div><p>Separator</p></div> */}
        <div className="hidden sm:block border-l-2 border-l-ctp-mauve pl-10 md:pl-28 h-min">
            <p>I have</p>
           <ul>
            <li><H2 label="bachelors degree" styles="from-ctp-mauve to-ctp-pink animate-slide-left"></H2></li>
            <li><H2 label="2 years professional experience" styles="from-ctp-peach to-ctp-red animate-slide-left"></H2></li>
           </ul>
        </div>
    </>
)  

export default Experience
