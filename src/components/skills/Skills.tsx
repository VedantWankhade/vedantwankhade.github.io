import H1 from "../headers/H1"
import H2 from "../headers/H2"

const Skills = () => (
    <>
        <div className="flex flex-col gap-2">
            <H1 label="Skills" styles="from-ctp-green to-ctp-teal" />
        </div>
        {/* <div><p>Separator</p></div> */}
        <div className="hidden sm:block border-l-2 pl-28">
            <p>I love to make</p>
           <ul>
            <li><H2 label="Performant backend" styles="from-ctp-mauve to-ctp-pink"></H2></li>
            <li><H2 label="CLI utilities" styles="from-ctp-peach to-ctp-red"></H2></li>
           </ul>
        </div>
    </>
)

export default Skills
