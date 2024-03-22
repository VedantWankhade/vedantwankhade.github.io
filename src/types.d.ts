enum Theme {
    MOCHA = "ctp-mocha",
    LATTE = "ctp-latte",
    FRAPPE = "ctp-frappe",
}

interface Role {
    name: string,
    description: string
    year: string
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

export { Theme, Role, Skill, Project }