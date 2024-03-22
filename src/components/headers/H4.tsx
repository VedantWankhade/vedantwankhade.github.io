interface H4Props {
    label: string,
    styles: string
}

const H4: React.FC<H4Props> = ({ label, styles }) => (
    <h4 className={`py-1 font-maple text-md sm:text-md font-bold ${styles}`}>{label}</h4>
)

export default H4
