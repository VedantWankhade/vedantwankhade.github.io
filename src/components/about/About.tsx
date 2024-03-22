import { Link } from 'react-router-dom'
import { about } from '../../content'
import Button from '../button/Button'
import H1 from '../headers/H1'
import H2 from '../headers/H2'

const About = () => (
    <>
        <div className="flex flex-col gap-2">
            <div>
                <p>{about.nameHeader}</p>
                <H2 label={about.name} styles="from-ctp-green to-ctp-sapphire animate-slide-right" />
            </div>
            <div>
                <p>{about.titleHeader}</p>
                <H1 label={about.title} styles="from-ctp-red to-ctp-yellow animate-slide-right" />
            </div>
            <div className="max-w-sm sm:max-w-xl">
                <p>{about.intro}</p>
            </div>
            <div className="mt-2 flex flex-wrap gap-x gap-y-4 animate-slide-up">
                <Link to={'/contact'}><Button label='Contact Me' styles={"from-ctp-peach to-ctp-red"} icon="mail" /></Link>
                <Link to={'/projects'}><Button label='View My Work' styles={"from-ctp-pink to-ctp-mauve"} icon="code-s-slash" /></Link>
                <a href={about.resumeLink} target='_blank'><Button label='My Resume' styles={"from-ctp-teal to-ctp-green"} icon="profile" /></a>
            </div>
        </div>
        <div className="hidden sm:block bg-gradient-to-r from-ctp-peach to-ctp-red h-min p-0 rounded-full animate-slide-left">
            <img className="rounded-full p-2 max-w-xs" src={about.photo} alt="my profile photo" />
        </div>
    </>
)

export default About
