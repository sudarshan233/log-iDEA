const Idea = (props) => {
    const { title, by, category, description, createdAt, updatedAt } = props;

    console.log(title);
    return (
        <div className="flex flex-col gap-2">
            <span>{title}</span>
            <span>By: {by}</span>
            <span>{category}</span>
            <span>{description}</span>
            <span>{createdAt === updatedAt ? `Created ${createdAt}` : `Opened ${updatedAt}`}</span>
        </div>
    )
}

export default Idea;