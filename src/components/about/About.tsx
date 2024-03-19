import { Link } from 'react-router-dom'
import content from '../../content'
import Button from '../button/Button'

const About = () => (
    <>
        <div className="flex flex-col gap-2">
            <div>
                <p>Hi, my name is</p>
                <h2 className="bg-gradient-to-r font-maple font-bold text-transparent from-ctp-green to-ctp-mauve bg-clip-text sm:text-4xl">Vedant Wankhade</h2>
            </div>
            <div>
                <p>I am a</p>
                <h1 className="py-2 font-maple text-3xl sm:text-6xl font-bold bg-gradient-to-r text-transparent from-ctp-red to-ctp-peach bg-clip-text">Software Engineer</h1>
            </div>
            <div className="max-w-sm sm:max-w-xl">
                <p>{content.intro}</p>
            </div>
            <div className="mt-2">
                <Link to={'/contact'}><Button label='Contact Me' styles={"from-ctp-mauve to-ctp-pink"} /></Link>
                <Link to={'/projects'}><Button label='View My Work' styles={"from-ctp-peach to-ctp-red"} /></Link>
                <Link to={'/'}><Button label='Download My Resume' styles={"from-ctp-green to-ctp-teal"} /></Link>
            </div>
        </div>
        <div className="hidden sm:block">
            <img className="rounded-full max-w-xs" src="/imgs/me.jpeg" alt="my profile photo" />
        </div>
    </>
)
export default About
