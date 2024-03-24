import { ContactLink, Experience, Project, Skill } from "./types"

const about = {
    name: {
        header: "Hi, my name is",
        name: "Vedant Wankhade",
        gradient: "from-ctp-green to-ctp-yellow"
    },
    title: {
        header: "I am a",
        title: "Software Engineer",
        gradient: "from-ctp-yellow to-ctp-mauve"
    },
    intro: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto delectus sunt quidem hic dolorem totam quam odit provident aliquam laudantium accusantium, nihil minus eaque, similique aspernatur, iure dolorum perferendis? Ratione?",
    photo: {
        photo: "/imgs/me.jpeg",
        gradient: "from-ctp-peach to-ctp-lavender"
    },
    contactButton: {
        label: "Contact Me",
        gradient: "from-ctp-peach to-ctp-red",
        icon: "mail"
    },
    workButton: {
        label: "View My Work",
        gradient: "from-ctp-pink to-ctp-mauve",
        icon: "code-s-slash"
    },
    resumeButton: {
        label: "My Resume",
        gradient: "from-ctp-teal to-ctp-green",
        link: "/",
        icon: "profile"
    },
}

const skills = {
    title: {
        title: "What I use",
        gradient: "from-ctp-green to-ctp-teal"
    },
    sidebar: {
        header: "I love to make",
        titles: [
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
    },
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
    title: {
        title: "What I have made",
        gradient: "from-ctp-blue to-ctp-red"
    },
    sidebar: {
        header: "I love to make",
        titles: [
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
    },
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
    title: {
        title: "Contributions",
        gradient: "from-ctp-blue to-ctp-yellow"
    },
    sidebar: {
        header: "I have contributed to",
        titles: [
            {
                title: "Open source",
                gradient: "from-ctp-mauve to-ctp-pink"
            },
            {
                title: "Projects used by millions",
                gradient: "from-ctp-pink to-ctp-green"
            }
        ],
    },
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
    title: {
        title: "Experience",
        gradient: "from-ctp-pink to-ctp-teal"
    },
    sidebar: {
        header: "I have worked in",
        titles: [
            {
                title: "Agile",
                gradient: "from-ctp-mauve to-ctp-pink"
            },
            {
                title: "Fast release cycles",
                gradient: "from-ctp-pink to-ctp-green"
            },
        ],
    },
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

const links: ContactLink[] = [
    {
        link: "mailto:vedantwankhade17@gmail.com",
        gradient: "from-ctp-teal to-ctp-green",
        label: "Email",
        icon: "mail"
    },
    {
        link: "https://linkedin.com/in/vedantwankhade/",
        gradient: "from-ctp-peach to-ctp-red",
        label: "LinkedIn",
        icon: "linkedin"
    },
    {
        link: "https://github.com/vedantwankhade/",
        gradient: "from-ctp-pink to-ctp-mauve",
        label: "GitHub",
        icon: "github"
    },
]

const contact = {
    title: {
        title: "Get in touch",
        gradient: "from-ctp-mauve to-ctp-red"
    },
    sidebar: {
        header: "Or, you can also reach me at",
        titles: [
            {
                title: "vedantwankhade17@gmail.com",
                gradient: "from-ctp-mauve to-ctp-peach"
            },
            {
                title: "(+91) 7620702927",
                gradient: "from-ctp-green to-ctp-blue"
            }
        ],
    },
    links 
}

export {
    about, skills, projects, contributions, experience, contact
}
