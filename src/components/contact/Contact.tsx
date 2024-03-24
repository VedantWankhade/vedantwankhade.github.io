import Button from "../button/Button"
import H1 from "../headers/H1"
import H2 from "../headers/H2"
import { contact } from "../../content"

const Contact = () =>  (
    <>
        <div className="flex flex-col gap-2">
            <div>
                <H1 label={contact.title.title} styles={`${contact.title.gradient} animate-slide-right`} />
            </div>
            <div className="mt-2 flex flex-wrap gap-x gap-y-4 animate-slide-up">
                {
                    contact.links.map(link => (
                        <a key={link.label} target="_blank" href={link.link}><Button label={link.label} styles={link.gradient} icon={link.icon} /></a>
                    ))
                }
            </div>
        </div>
        {/* <div><p>Separator</p></div> */}
        <div className="hidden sm:block border-l-2 border-l-ctp-pink pl-10 md:pl-28 h-min">
            <p>{contact.sidebar.header}</p>
           <ul>
            {
                contact.sidebar.titles.map(title => (
                    <li key={title.title}><H2 label={title.title} styles={`${title.gradient} animate-slide-left`}></H2></li>
                ))
            }
           </ul>
        </div>
    </>
)

export default Contact
