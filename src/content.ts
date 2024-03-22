import { Skill } from "./types"

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

export default {
    title, intro, skills
}