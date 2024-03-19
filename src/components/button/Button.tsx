interface ButtonProps {
    label: string,
    styles: string
}

const Button: React.FC<ButtonProps> = ({ label, styles }) => (
    <button className={`bg-gradient-to-r border-none rounded-full text-ctp-crust font-bold px-4 py-2 mr-4 ${styles}`}>{label}</button>
)

export default Button