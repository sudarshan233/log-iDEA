const Idea = (props) => {
    const { id, title, by, category, description, createdAt, updatedAt, handleClick} = props;

    console.log(title);
    return (
        <div onClick={() => {
            handleClick(id)
        }} className="flex min-w-72 flex-col gap-2 bg-sec-background-color p-4 rounded-xl">
            <span className="font-bold">{title}</span>
            <hr />
            <span className="text-by">By: {by}</span>
            <span className="text-category">{category}</span>
            <span className="text-description">{description.slice(0,60)}...</span>
            <span className="text">{createdAt === updatedAt ? `Created ${createdAt}` : `Opened ${updatedAt}`}</span>
        </div>
    )
}

export default Idea;