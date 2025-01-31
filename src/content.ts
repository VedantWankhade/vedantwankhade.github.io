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
        link: "https://drive.google.com/file/d/1rf0lg2ikPcn9u0QI7-8rrkEK06FUDueh/view?usp=sharing",
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
            skills: ["Go", "Java", "NodeJS", "Spring", "GoFibre", "ExpressJS"],
            image: "server",
            accent: "blue",
        },
        {
            title: "Frontend",
            skills: ["JavaScript/TypeScript", "Vue", "React", "TailwindCSS"],
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
            title: "Patterns / Protocols",
            skills: ["Microservice", "REST", "gRPC", "GraphQL", "OAuth", "JWT"],
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
            title: "vscode-cses",
            skills: ["TypeScript", "REST", "VSCode API"],
            image: "github",
            accent: "yellow",
            description: `A VSCode extension to solve and submit all of the CSES problem set from comfort of your editor`,
            url: "https://github.com/VedantWankhade/vscode-cses",
        },
        {
            title: "tsrgen",
            skills: ["Go", "gRPC", "REST", "VueJS", "PostgresQL", "Docker"],
            image: "github",
            accent: "lavender",
            description: `A microservice based application that helps release stakeholders to generate Test Summary Report based on a simple JQL query`,
            url: "https://github.com/VedantWankhade/tsrgen",
        },
        {
            title: "fuzzygit",
            skills: ["Go", "REST", "Bubbletea"],
            image: "github",
            accent: "green",
            description: `A TUI application written in pure Go that lets users interact with git in a visual and "fuzzy" way`,
            url: "https://github.com/VedantWankhade/fuzzygit",
        },
        {
            title: "ghmail",
            skills: ["Java", "Spring Boot", "GitHub OAuth", "CassandraDB"],
            image: "github",
            accent: "blue",
            description: "A messaging app with GitHub authentication, where users can send messages using GitHub usernames",
            url: "https://github.com/VedantWankhade/ghmail",
        },
        {
            title: "Portfolio Website",
            skills: ["TypeScript", "React", "Tailwind"],
            image: "github",
            accent: "red",
            description: "This website",
            url: "https://github.com/VedantWankhade/vedantwankhade.github.io",
        },
        {
            title: "JANTA",
            skills: ["React", "React Native", "MongoDB", "Electron", "GraphQL"],
            image: "github",
            accent: "rosewater",
            description: `A multiplatforn note-taking app.`,
            url: "https://github.com/VedantWankhade/janta",
        },
        {
            title: "URL Shortner",
            skills: ["React", "NodeJS", "ExpressJS", "MongoDB"],
            image: "github",
            accent: "mauve",
            description: "A simple URL shortener",
            url: "https://github.com/VedantWankhade/url-shortener",
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
            url: "https://github.com/aandrew-me/tgpt/pull/242",
        },
        {
            title: "KDE Plasma",
            skills: ["QML", "QT", "Linux"],
            image: "github",
            accent: "peach",
            description: "Desktop environment used by millions (thanks to Steam Deck). I fixed a layout bug in one of the core apps - Discover.",
            url: "https://invent.kde.org/plasma/discover/-/merge_requests/373",
        },
        {
            title: "Nix/NixOS",
            skills: ["React", "Astro"],
            image: "github",
            accent: "lavender",
            description: "Implemented a feature on the website where a user will be automatically moved to the correct download section depending on their oparating system.",
            url: "https://github.com/NixOS/nixos-homepage/pull/1368",
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
            current: false, // fix the styles and placement - until then false
            accent: "blue",
            image: "building",
            roles: [
                {
                    name: "Junior Software Engineer",
                    description: [
                    `Worked for one of the 'Big 4' Australian banking clients, in an agile team with a fast release cycle`,
                    `Collaborated closely with the business stakeholders to develop responsive and ready to use AEM UI
                    components in ReactJS`,
                    `Wrote unit tested web services in Spring Boot interfacing with MSSQL database, cron-jobs and
                    third party APIs`,
                    `Increased the coverage of end to end regression automation tests from 20% to 100% resulting in a
                    total reduction of manual regression testing; liberating testers to concentrate on progression testing`,
                    `Proposed and developed a solution that automates the AEM content authoring for testing which
                    reduced testing efforts significantly`,
                    `Successfully delivered on 20+ production releases`,
                    `Worked on an internal project for the Engineering COE team where I developed a tool from scratch to
                    generate TSR from JIRA cards and Fix Versions`,
                    ],
                    year: "Aug 2022 - Present",
                    skills: ["Java", "Spring Boot", "AWS", "PostgressQL", "React", "AEM"]
                },
                {
                    name: "Intern",
                    description: [
                        `Was trained in Spring Boot, AWS, Docker, PLSQL, Microservices etc.`,
                        `Lead the team in designing and developing a full-stack, microservices based capstone project with user
authentication, load balancing`
                    ],
                    year: "Jan 2022 - Jul 2022",
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
        link: "https://linkedin.com/in/vedant-wankhade/",
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
