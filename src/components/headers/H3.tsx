interface H3Props {
    label: string,
    styles: string
}

const H3: React.FC<H3Props> = ({ label, styles }) => (
    <h3 className={`py-1 font-maple text-2xl sm:text-2xl bg-gradient-to-r font-bold text-transparent bg-clip-text ${styles}`}>{label}</h3>
)

export default H3