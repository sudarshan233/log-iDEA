import {formatDate} from "../lib/utils.js";

const Idea = (props) => {
    const { id, title, by, category, description, createdAt, updatedAt, handleClick} = props;

    console.log(title);
    return (
        <div onClick={() => {
            handleClick(id)
        }} className="flex min-w-72 w-80  flex-col gap-2 bg-sec-background-color p-4 rounded-xl">
            <span className="font-bold text-base">{title}</span>
            <hr />
            <span className="text-sm ">By: {by}</span>
            <span className="text-sm">Category: {category}</span>
            <span className="text-sm">{description.slice(0,60)}...</span>
            <span className="text-sm opacity-50">{createdAt === updatedAt ? `Created at ${formatDate(new Date(createdAt))}` : `Opened at ${formatDate(new Date(updatedAt))}`}</span>
        </div>
    )
}

export default Idea;