import { Experience, Project, Skill } from "./types"

const about = {
    nameHeader: "Hi, my name is",
    name: "Vedant Wankhade",
    titleHeader: "I am a",
    title: "Software Engineer",
    intro: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto delectus sunt quidem hic dolorem totam quam odit provident aliquam laudantium accusantium, nihil minus eaque, similique aspernatur, iure dolorum perferendis? Ratione?",
    photo: "/imgs/me.jpeg",
    resumeLink: "/"
}

const skills = {
    title: "What I use",
    sideHeader: "I love to make",
    sideTitles: [
        {
            title: "Performant backend",
            gradient: "from-ctp-mauve to-ctp-pink"
        },
        {
            title: "CLI apps",
            gradient: "from-ctp-pink to-ctp-green"
        },
        {
            title: "Fullstack apps",
            gradient: "from-ctp-sky to-ctp-red"
        }
    ],
    skills: [
        {
            title: "Backend",
            skills: ["Go", "Java"],
            image: "server",
            accent: "blue",
        },
        {
            title: "Frontend",
            skills: ["TypeScript", "React", "TailwindCSS"],
            image: "smartphone",
            accent: "red",
        },
        {
            title: "Databases",
            skills: ["MySQL", "MongoDB"],
            image: "database-2",
            accent: "green",
        },
        {
            title: "Patterns",
            skills: ["REST", "gRPC", "json-rpc", "GraphQL"],
            image: "git-branch",
            accent: "pink",
        },
        {
            title: "Tools",
            skills: ["Git"],
            image: "hammer",
            accent: "peach",
        },
        {
            title: "Other",
            skills: ["Linux", "Tiling Window Manager", "tmux", "Nix/NixOS"],
            image: "terminal-box",
            accent: "sky",
        },
    ] as Skill[],
}

const projects = {
    title: "What I have made",
    sideHeader: "I love to make",
    sideTitles: [
        {
            title: "Performant backend",
            gradient: "from-ctp-mauve to-ctp-pink"
        },
        {
            title: "CLI apps",
            gradient: "from-ctp-pink to-ctp-green"
        },
        {
            title: "Fullstack apps",
            gradient: "from-ctp-sky to-ctp-red"
        }
    ],
    projects: [
        {
            title: "Project 1",
            skills: ["Go", "Java"],
            image: "github",
            accent: "blue",
            description: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
            url: "https://github.com/vedantwankhade/",
        },
        {
            title: "Project 2",
            skills: ["React", "Tailwind"],
            image: "github",
            accent: "peach",
            description: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
            url: "https://github.com/vedantwankhade/",
        },
    ] as Project[]
}

const contributions = {
    title: "Contributions",
    sideHeader: "I have contributed to",
    sideTitles: [
        {
            title: "Open source",
            gradient: "from-ctp-mauve to-ctp-pink"
        },
        {
            title: "Projects used by millions",
            gradient: "from-ctp-pink to-ctp-green"
        }
    ],
    contributions: [
        {
            title: "tgpt",
            skills: ["Go", "CLI", "AI"],
            image: "github",
            accent: "blue",
            description: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
            url: "https://github.com/vedantwankhade/",
        },
        {
            title: "KDE Plasma",
            skills: ["QML", "QT", "Linux"],
            image: "github",
            accent: "peach",
            description: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
            url: "https://github.com/vedantwankhade/",
        },
    ] as Project[]
}

const experience = {
    title: "Experience",
    sideHeader: "I have worked in",
    sideTitles: [
        {
            title: "Agile",
            gradient: "from-ctp-mauve to-ctp-pink"
        },
        {
            title: "Fast release cycles",
            gradient: "from-ctp-pink to-ctp-green"
        }
    ],
    experiences: [
        {
            org: "Cognizant",
            current: true,
            accent: "blue",
            image: "building",
            roles: [
                {
                    name: "Junior Software Engineer",
                    description: "Did some stuff",
                    year: "2024",
                    skills: ["Go", "Java", "Linux", "Tmux", "NixOS"]
                },
                {
                    name: "Intern",
                    description: "Did some stuffDid some stuffDid some stuffDid some stuff",
                    year: "2021",
                    skills: ["Go", "Java"]
                }
            ]
        },
        {
            org: "PRMITR",
            // current: true,
            accent: "red",
            image: "graduation-cap",
            roles: [
                {
                    name: "Studenbt",
                    description: "Did nothing",
                    year: "2024",
                    skills: ["Go", "Java", "Linux", "Tmux", "NixOS"]
                },
            ]
        }
    ] as Experience[]
}

const links = {
    email: "vedantwankhade17@gmail.com",
    linkedin: "https://linkedin.com/in/vedantwankhade/",
    github: "https://github.com/vedantwankhade/",
    ph: "(+91) 7620702927"
}

const contact = {
    title: "Get in touch",
    sideHeader: "Or, you can also reach me at",
    sideTitles: [
        {
            title: links.email,
            gradient: "from-ctp-mauve to-ctp-pink"
        },
        {
            title: links.ph,
            gradient: "from-ctp-pink to-ctp-green"
        }
    ],
    links
}

export {
    about, skills, projects, contributions, experience, contact
}
