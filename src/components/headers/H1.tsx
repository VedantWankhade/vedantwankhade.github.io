interface H1Props {
    label: string,
    styles: string
}

const H1: React.FC<H1Props> = ({ label, styles }) => (
    <h1 className={`py-2 font-maple text-3xl sm:text-6xl bg-gradient-to-r font-bold text-transparent bg-clip-text ${styles}`}>{label}</h1>
)

export default H1
