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
    // each string in the intro array will result in a new paragraph
    intro: [`
            with 2 years of experience working in an agile team.
            I have worked closely with the business stakeholders to deliver scalable products in a really fast release cycle.
            As a polygot programmer, I am proficient in multiple programming languages such as Go, Java, TypeScript/JavaScript,
            and can leverage frameworks like React, Express, Spring Boot, GoFibre etc.
        `,
        `
            I also have experience working large-scale codebases with microservice with RESTful architecture.
            Other than these mainstream patterns I am also familiar with patterns like gRPC, json-RPC and GraphQL.
            I have a deep knowledge of working linux systems, hence cloud and containerization concepts comes naturally to me.
        `,
        `
            I also like to optimize my devoper workflow, by working in a tilling window manager and it also leads me to looking at
            lots of low level code and creating some usefull cli utilities and deamons that interact with my system.
        `
    ],
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
        gradient: "from-ctp-green to-ctp-yellow"
    },
    sidebar: {
        header: "I can work with",
        titles: [
            {
                title: "Backends",
                gradient: "from-ctp-mauve to-ctp-pink"
            },
            {
                title: "Frontends",
                gradient: "from-ctp-peach to-ctp-rosewater"
            },
            {
                title: "Databases",
                gradient: "from-ctp-sky to-ctp-red"
            },
        ],
    },
    skills: [
        {
            title: "Backend",
            skills: ["Go", "Java", "NodeJS", "Python", "Spring Boot", "GoFibre", "ExpressJS"],
            image: "server",
            accent: "blue",
        },
        {
            title: "Frontend",
            skills: ["JavaScript/TypeScript", "React", "TailwindCSS"],
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
            skills: ["Microservice", "REST", "gRPC", "json-rpc", "GraphQL", "OAuth", "JWT"],
            image: "git-branch",
            accent: "pink",
        },
        {
            title: "Tools",
            skills: ["Git", "Docker", "Postman"],
            image: "hammer",
            accent: "peach",
        },
        {
            title: "Automation",
            skills: ["Bash", "Playwright"],
            image: "robot-2",
            accent: "mauve",
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
                title: "Pretty frontend",
                gradient: "from-ctp-sky to-ctp-red"
            },
            {
                title: "IDE Plugins",
                gradient: "from-ctp-red to-ctp-peach"
            }
        ],  
    },
    projects: [
        {
            title: "ghmail",
            skills: ["Java", "Spring Boot", "GitHub OAuth"],
            image: "github",
            accent: "blue",
            description: "An email app with GitHub authentication, where users can send messages using GitHub useranames.",
            url: "https://github.com/vedantwankhade/",
        },
        {
            title: "Portfolio Website",
            skills: ["React", "Tailwind"],
            image: "github",
            accent: "red",
            description: "This website.",
            url: "https://github.com/vedantwankhade/",
        },
        {
            title: "URL Shorter",
            skills: ["HTML", "CSS", "NodeJS", "ExpressJS", "JavaScript"],
            image: "github",
            accent: "mauve",
            description: "A simple URL shortener.",
            url: "https://github.com/vedantwankhade/",
        },
        {
            title: "Issue Tracker",
            skills: ["MongoDB", "ExpressJS", "JavaScript", "React", "NodeJS"],
            image: "github",
            accent: "yellow",
            description: "A simple issue tracker.",
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
            description: "tgpt is a cli tool that lets you communicate with a generative AI model from your terminal. I fixed an issue with piping an output from stdin to the command line.",
            url: "https://github.com/vedantwankhade/",
        },
        {
            title: "KDE Plasma",
            skills: ["QML", "QT", "Linux"],
            image: "github",
            accent: "peach",
            description: "Desktop environment used by millions. I fixed an issue with the app store where I fixed layout issue.",
            url: "https://github.com/vedantwankhade/",
        },
        {
            title: "Nix/NixOS",
            skills: ["React", "Astro"],
            image: "github",
            accent: "lavender",
            description: "Implemented a feature on the website where a user will be automatically moved to the correct download section.",
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
                    skills: ["Java", "Spring Boot", "AWS", "PostgressQL", "React", "AEM"]
                },
                {
                    name: "Intern",
                    description: "Did some stuffDid some stuffDid some stuffDid some stuff",
                    year: "2021",
                    skills: ["Java", "Spring Boot", "Angular", "MySQL"]
                }
            ]
        },
        // {
        //     org: "PRMITR",
        //     // current: true,
        //     accent: "red",
        //     image: "graduation-cap",
        //     roles: [
        //         {
        //             name: "Studenbt",
        //             description: "Did nothing",
        //             year: "2024",
        //             skills: ["Go", "Java", "Linux", "Tmux", "NixOS"]
        //         },
        //     ]
        // }
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
