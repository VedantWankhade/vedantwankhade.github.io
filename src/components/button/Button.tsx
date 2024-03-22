interface ButtonProps {
    label: string,
    styles: string,
    icon: string
}

const Button: React.FC<ButtonProps> = ({ label, styles, icon }) => (
    <button className={`bg-gradient-to-r border-none rounded-full text-ctp-crust px-4 py-2 mr-4 ${styles}`}><i className={`ri-${icon}-fill`}></i> {label}</button>
)

export default Button
