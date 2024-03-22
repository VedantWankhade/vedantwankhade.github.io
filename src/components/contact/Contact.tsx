import Button from "../button/Button"
import H1 from "../headers/H1"
import H2 from "../headers/H2"
import { contact } from "../../content"

const Contact = () =>  (
    <>
        <div className="flex flex-col gap-2">
            <div>
                <H1 label={contact.title} styles="from-ctp-mauve to-ctp-red animate-slide-right" />
            </div>
            <div className="mt-2 flex flex-wrap gap-x gap-y-4 animate-slide-up">
                <a target="_blank" href={contact.links.linkedin}><Button label='LinkedIn' styles={"from-ctp-peach to-ctp-red"} icon="linkedin" /></a>
                <a target="_blank" href={contact.links.github}><Button label='GitHub' styles={"from-ctp-pink to-ctp-mauve"} icon="github" /></a>
                <a href={`mailto:${contact.links.email}`}><Button label='Email' styles={"from-ctp-teal to-ctp-green"} icon="mail" /></a>
            </div>
        </div>
        {/* <div><p>Separator</p></div> */}
        <div className="hidden sm:block border-l-2 border-l-ctp-pink pl-10 md:pl-28 h-min">
            <p>{contact.sideHeader}</p>
           <ul>
            {
                contact.sideTitles.map(title => (
                    <li key={title.title}><H2 label={title.title} styles={`${title.gradient} animate-slide-left`}></H2></li>
                ))
            }
           </ul>
        </div>
    </>
)

export default Contact
