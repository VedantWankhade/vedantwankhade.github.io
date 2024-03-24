enum Theme {
    MOCHA = "ctp-mocha",
    LATTE = "ctp-latte",
    FRAPPE = "ctp-frappe",
}

interface ContactLink {
    link: string,
    gradient: string,
    label: string,
    icon: string
}

interface Role {
    name: string,
    description: string
    year: string,
    skills: string[]
}

interface Skill {
    title: string,
    image: string,
    skills: string[],
    accent: string
}

interface Project {
    title: string,
    image: string,
    skills: string[],
    accent: string,
    description: string,
    url: string
}

interface Experience {
    roles: Role[],
    org: string,
    current?: boolean,
    image: string,
    accent: string,
}

export { Theme, Role, Skill, Project, Experience, ContactLink }