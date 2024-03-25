import { Link } from 'react-router-dom'
import { about } from '../../content'
import Button from '../button/Button'
import H1 from '../headers/H1'
import H2 from '../headers/H2'

const About = () => (
    <>
        <div className="flex flex-col gap-2">
            <div>
                <p>{about.name.header}</p>
                <H2 label={about.name.name} styles={`${about.name.gradient} animate-slide-right`} />
            </div>
            <div>
                <p>{about.title.header}</p>
                <H1 label={about.title.title} styles={`${about.title.gradient} animate-slide-right`} />
            </div>
            <div className="sm:max-w-xl">
                {
                    about.intro.map(intro => (
                        <p key={intro}>{intro}</p>
                    ))
                }
            </div>
            <div className="mt-2 flex flex-wrap gap-x gap-y-4 animate-slide-up">
                <Link to={'/contact'}><Button label={about.contactButton.label} styles={about.contactButton.gradient} icon={about.contactButton.icon} /></Link>
                <Link to={'/projects'}><Button label={about.workButton.label} styles={about.workButton.gradient} icon={about.workButton.icon} /></Link>
                <a href={about.resumeButton.link} target='_blank'><Button label={about.resumeButton.label} styles={about.resumeButton.gradient} icon={about.resumeButton.icon} /></a>
            </div>
        </div>
        <div className={`hidden sm:block bg-gradient-to-br ${about.photo.gradient} h-min p-0 rounded-full animate-slide-left`}>
            <img className="rounded-full p-2 max-w-xs" src={about.photo.photo} alt="my profile photo" />
        </div>
    </>
)

export default About
