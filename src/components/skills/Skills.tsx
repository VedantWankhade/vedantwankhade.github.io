import SkillCard from "../cards/SkillCard"
import H1 from "../headers/H1"
import H2 from "../headers/H2"

const Skills = () => (
    <>
        <div className="flex flex-col gap-2 justify-center">
            <div>
                <H1 label="What I use" styles="from-ctp-green to-ctp-teal animate-slide-right" />
            </div>
            <div className="flex flex-wrap gap-4">
                <SkillCard title="Backend" titleStyles="from-ctp-rosewater to-ctp-blue" image= "image" skills={["Go", "Java"]} />
                <SkillCard title="Frontend" titleStyles="from-ctp-peach to-ctp-red" image= "image" skills={["React", "TypeScript", "TailwindCSS"]} />
                <SkillCard title="Patterns" titleStyles="from-ctp-red to-ctp-green" image= "image" skills={["REST", "gRPC"]} />
                <SkillCard title="Database" titleStyles="from-ctp-yellow to-ctp-pink" image= "image" skills={["MySQL", "MongoDB"]} />
                <SkillCard title="Tools" titleStyles="from-ctp-red to-ctp-blue" image= "image" skills={["Git"]} />
                <SkillCard title="Other" titleStyles="from-ctp-teal to-ctp-green" image= "image" skills={["Linux", "Tmux", "NixOS"]} />
            </div>
        </div>
        {/* <div><p>Separator</p></div> */}
        <div className="hidden sm:block border-l-2 pl-10 md:pl-28 h-min">
            <p>I love to make</p>
           <ul>
            <li><H2 label="Performant backend" styles="from-ctp-mauve to-ctp-pink animate-slide-left"></H2></li>
            <li><H2 label="CLI utilities" styles="from-ctp-peach to-ctp-red animate-slide-left"></H2></li>
            <li><H2 label="Fullstack apps" styles="from-ctp-pink to-ctp-green animate-slide-left"></H2></li>
           </ul>
        </div>
    </>
)

export default Skills
