interface H2Props {
    label: string,
    styles: string
}

const H2: React.FC<H2Props> = ({ label, styles }) => (
    <h2 className={`py-1 font-maple text-2xl sm:text-4xl bg-gradient-to-r font-bold text-transparent bg-clip-text ${styles}`}>{label}</h2>
)

export default H2