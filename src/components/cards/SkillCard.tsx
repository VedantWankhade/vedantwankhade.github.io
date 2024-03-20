import H3 from "../headers/H3"

interface SkillCardProps {
    title: string,
    styles: string
    image: string
    skills: string[]
}

const SkillCard: React.FC<SkillCardProps> = (props) => {
    return (
        <div className="bg-ctp-mantle w-full drop-shadow-xl rounded-lg p-2 sm:w-64 flex flex-col justify-between">
            <div className="flex justify-between">
                <H3 label={props.title} styles={props.styles}></H3>
                <div>
                <i className={`ri-${props.image}-fill text-3xl ${props.styles} bg-gradient-to-r text-transparent bg-clip-text`}></i>
                </div>
            </div>
            <div>
                <ul className="flex flex-wrap gap-3">
                    {props.skills.map((skill) => <li key={skill} className="font-bold bg-ctp-base p-2 rounded-full">{skill}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default SkillCard