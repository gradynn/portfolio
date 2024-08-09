interface SectionHeading {
    value: string
}

function SectionHeading(props: SectionHeading) {
    const { value } = props;

    return (
        <h1 className="text-2xl">{value}</h1>
    )
}

export default SectionHeading;