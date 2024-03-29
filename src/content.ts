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
            with 2 years of experience working in agile teams. My focus has been on delivering scalable backend
            and frontend products within rapid release cycles,
            closely engaging with business stakeholders throughout the development process
            and taking responsibility of the code.
            As a polyglot programmer, I am proficient in various languages including Go, Java, TypeScript/JavaScript,
            and use frameworks such as React, Express, Spring Boot, and GoFibre.
        `,
        `
            My expertise extends to working on large-scale codebases, with microservices and RESTful architecture.
            Beyond conventional patterns, I have also worked with gRPC, JSON-RPC, and GraphQL.
            Being proficient in Linux systems, I naturally grasp cloud and containerization concepts.
        `,
        `
            I am really passionate about optimizing my developer workflow,
            working in a tiling window manager directs me to use terminal for majority of tasks
            and looking at lots of low level code and configuration.
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
                title: "Backend",
                gradient: "from-ctp-mauve to-ctp-pink"
            },
            {
                title: "Frontend",
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
        header: "I make",
        titles: [
            {
                title: "Scalable backend",
                gradient: "from-ctp-mauve to-ctp-pink"
            },
            {
                title: "Pretty frontend",
                gradient: "from-ctp-sky to-ctp-red"
            },
            {
                title: "CLI apps",
                gradient: "from-ctp-pink to-ctp-green"
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
            skills: ["Java", "Spring Boot", "GitHub OAuth", "CassandraDB"],
            image: "github",
            accent: "blue",
            description: "A messaging app with GitHub authentication, where users can send messages using GitHub useranames.",
            url: "https://github.com/VedantWankhade/ghmail",
        },
        {
            title: "Portfolio Website",
            skills: ["TypeScript", "React", "Tailwind"],
            image: "github",
            accent: "red",
            description: "This website.",
            url: "https://github.com/VedantWankhade/vedantwankhade.github.io",
        },
        {
            title: "URL Shortner",
            skills: ["React", "NodeJS", "ExpressJS", "MongoDB"],
            image: "github",
            accent: "mauve",
            description: "A simple URL shortener.",
            url: "https://github.com/VedantWankhade/url-shortener",
        },
        {
            title: "Issue Tracker",
            skills: ["React", "NodeJS", "ExpressJS", "MongoDB"],
            image: "github",
            accent: "yellow",
            description: "A simple issue tracker.",
            url: "https://github.com/VedantWankhade/astora-issue-tracker",
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
            description: "tgpt is a cli tool that lets you communicate with a generative AI model from your terminal. I fixed an issue with piping an output from stdout to the command line.",
            url: "https://github.com/vedantwankhade/",
        },
        {
            title: "KDE Plasma",
            skills: ["QML", "QT", "Linux"],
            image: "github",
            accent: "peach",
            description: "Desktop environment used by millions. I fixed a layout issue bug in the app store.",
            url: "https://github.com/vedantwankhade/",
        },
        {
            title: "Nix/NixOS",
            skills: ["React", "Astro"],
            image: "github",
            accent: "lavender",
            description: "Implemented a feature on the website where a user will be automatically moved to the correct download section depending on their oparating system.",
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
                    description: `
                        I worked for a banking client.
                        Initially I worked exclusively with React, writing some AEM components for the bank's website.
                        Later on I moved on to a more challanging role, where I got to work with the backend service for the bank's forms.
                        I contributed to a lot of the web services written in Go and Java.
                        Contributed to 18+ backend and frontend production releases.
                    `,
                    year: "2022 - current",
                    skills: ["Java", "Spring Boot", "AWS", "PostgressQL", "React", "AEM"]
                },
                {
                    name: "Intern",
                    description: `
                        As fullstack developer intern, I was trained on Java, Spring Boot, Angular, MySQL and AWS. I implemented 
                        microservice patterns using load balancers.
                    `,
                    year: "2021 - 2022",
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
        header: "Or, you can also reach me on",
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
