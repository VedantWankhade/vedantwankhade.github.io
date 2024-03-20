import { Link } from "react-router-dom"
import Button from "../button/Button"
import H1 from "../headers/H1"
import H2 from "../headers/H2"

const Contact = () =>  (
    <>
        <div className="flex flex-col gap-2">
            <div>
                <H1 label="Contact me" styles="from-ctp-mauve to-ctp-red animate-slide-right" />
            </div>
            <div className="mt-2 flex flex-wrap gap-x gap-y-4 animate-slide-up">
                <a href="#"><Button label='LinkedIn' styles={"from-ctp-mauve to-ctp-pink"} icon="linkedin" /></a>
                <a href="#"><Button label='GitHub' styles={"from-ctp-peach to-ctp-red"} icon="github" /></a>
                <a href="#"><Button label='Email' styles={"from-ctp-green to-ctp-teal"} icon="mail" /></a>
            </div>
        </div>
        {/* <div><p>Separator</p></div> */}
        <div className="hidden sm:block border-l-2 pl-10 md:pl-28 h-min">
            <p>Or if you are old school</p>
           <ul>
            <li><H2 label="vedantwankhade17@gmail.com" styles="from-ctp-mauve to-ctp-pink animate-slide-left"></H2></li>
            <li><H2 label="(+91) 7620702927" styles="from-ctp-peach to-ctp-red animate-slide-left"></H2></li>
            {/* <li><H2 label="Fullstack apps" styles="from-ctp-pink to-ctp-green animate-slide-left"></H2></li> */}
           </ul>
        </div>
    </>
)

export default Contact
