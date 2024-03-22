import { Role } from "../../types"
import H3 from "../headers/H3"
import H4 from "../headers/H4"

interface ExperienceCardProps {
    org: string,
    styles: string,
    image: string,
    borderColor: string,
    roles: Role[],
    current?: boolean
}

const ProjectCard: React.FC<ExperienceCardProps> = (props) => {
    return (
        <div className="bg-ctp-mantle w-full drop-shadow-xl rounded-lg p-2 w gap-4 flex flex-col">
            <div className="flex justify-between">
                <H3 label={props.org} styles={props.styles}></H3>
                <div>
                    <i className={`ri-${props.image}-fill text-3xl ${props.styles}`}></i>
                </div>
            </div>
            
            <div>
                {props.roles.map(role => (
                    <div key={role.name+'@'+props.org}>
                        <div className="mt-2" >
                            <H4 label={role.name} styles={props.styles}></H4>
                            <p>{role.description}</p>
                            <p>{role.year}</p>
                        </div>
                        {/* <div>
                            <ul className="flex flex-wrap gap-3">
                                {role.skills.map((skill) => <li key={skill} className={`font-bold bg-ctp-base px-2 rounded-full border-2 ${props.borderColor}`}>{skill}</li>)}
                            </ul>
                        </div> */}
                    </div>
                ))}
            </div>
            {props.current && <div>
                {<p className={`font-bold bg-ctp-base px-2 text-center rounded-full ml-auto border-2 w-min ${props.borderColor}`}>Current</p>}
            </div>}
        </div>
    )
}

export default ProjectCard
