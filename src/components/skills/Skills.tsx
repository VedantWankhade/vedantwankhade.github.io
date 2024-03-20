import SkillCard from "../cards/SkillCard"
import H1 from "../headers/H1"
import H2 from "../headers/H2"

const Skills = () => (
    <>
        <div className="flex flex-col gap-2">
            <div>
                <H1 label="What I use" styles="from-ctp-green to-ctp-teal animate-slide-right" />
            </div>
            <div className="flex flex-wrap gap-4 animate-slide-up">
                <SkillCard title="Backend" styles="text-ctp-blue" image="server" skills={["Go", "Java"]} />
                <SkillCard title="Frontend" styles="text-ctp-red" image="smartphone" skills={["React", "TypeScript", "TailwindCSS"]} />
                <SkillCard title="Patterns" styles="text-ctp-green" image="git-branch" skills={["REST", "gRPC"]} />
                <SkillCard title="Database" styles="text-ctp-pink" image="database-2" skills={["MySQL", "MongoDB"]} />
                <SkillCard title="Tools" styles="text-ctp-peach" image="hammer" skills={["Git"]} />
                <SkillCard title="Other" styles="text-ctp-sky" image="terminal-box" skills={["Linux", "Tmux", "NixOS"]} />
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
