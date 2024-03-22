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

export { Theme, Role, Skill }