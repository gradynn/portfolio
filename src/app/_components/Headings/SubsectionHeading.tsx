interface SubsectionHeading {
    value: string
}

function SubsectionHeading(props: SubsectionHeading) {
    const { value } = props;

    return (
        <h2 className="text-xl">{value}</h2>
    )
}

export default SubsectionHeading;