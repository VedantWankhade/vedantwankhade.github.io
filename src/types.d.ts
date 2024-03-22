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

export { Theme, Role }