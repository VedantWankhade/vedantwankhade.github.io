import { Link } from 'react-router-dom'
import content from '../../content'
import Button from '../button/Button'
import H1 from '../headers/H1'
import H2 from '../headers/H2'

const About = () => (
    <>
        <div className="flex flex-col gap-2">
            <div>
                <p>Hi, my name is</p>
                <H2 label="Vedant Wankhade" styles="from-ctp-green to-ctp-sapphire animate-slide-right" />
            </div>
            <div>
                <p>I am a</p>
                <H1 label="Software Engineer" styles="from-ctp-red to-ctp-yellow animate-slide-right" />
            </div>
            <div className="max-w-sm sm:max-w-xl">
                <p>{content.intro}</p>
            </div>
            <div className="mt-2 flex flex-wrap gap-x gap-y-4 animate-slide-up">
                <Link to={'/contact'}><Button label='Contact Me' styles={"from-ctp-mauve to-ctp-pink"} /></Link>
                <Link to={'/projects'}><Button label='View My Work' styles={"from-ctp-peach to-ctp-red"} /></Link>
                <Link to={'/'}><Button label='Download My Resume' styles={"from-ctp-green to-ctp-teal"} /></Link>
            </div>
        </div>
        <div className="hidden sm:block bg-gradient-to-r from-ctp-peach to-ctp-red h-min p-0 rounded-full animate-slide-left">
            <img className="rounded-full p-2 max-w-xs" src="/imgs/me.jpeg" alt="my profile photo" />
        </div>
    </>
)

export default About
