import { Experience, Project, Skill } from "./types"

const title = "Software Engineer";
const intro = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto delectus sunt quidem hic dolorem totam quam odit provident aliquam laudantium accusantium, nihil minus eaque, similique aspernatur, iure dolorum perferendis? Ratione?";
    
const skills: Skill[] = [
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
]

const projects: Project[] = [
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
]

const contributions: Project[] = [
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
]

const experiences: Experience[] = [
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
]

export default {
    title, intro, skills, projects, contributions, experiences
}