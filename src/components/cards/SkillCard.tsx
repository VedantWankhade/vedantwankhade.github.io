import H3 from "../headers/H3"

interface SkillCardProps {
    title: string,
    styles: string
    image: string
    skills: string[]
    borderColor: string
}

const SkillCard: React.FC<SkillCardProps> = (props) => {
    return (
        <div className="bg-ctp-mantle w-full drop-shadow-xl rounded-lg p-2 sm:w-64 gap-4 flex flex-col">
            <div className="flex justify-between">
                <H3 label={props.title} styles={props.styles}></H3>
                <div>
                <i className={`ri-${props.image}-fill text-3xl ${props.styles}`}></i>
                </div>
            </div>
            <div>
                <ul className="flex flex-wrap gap-3">
                    {props.skills.map((skill) => <li key={skill} className={`font-bold bg-ctp-base px-2 rounded-full border-2 ${props.borderColor}`}>{skill}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default SkillCard
