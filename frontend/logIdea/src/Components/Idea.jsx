import {formatDate} from "../lib/utils.js";
import {useState} from "react";

const Idea = (props) => {
    const { id, title, by, category, description, createdAt, updatedAt, handleClick, del, setDeleteIdeas} = props;
    const [selectColor, setSelectColor] = useState("bg-sec-background-color");
    console.log(title);
    return (
        <div onClick={() => {
            handleClick(id)
        }} className="flex min-w-72 h-max w-80 gap-2 bg-sec-background-color p-4 rounded-xl relative">
            {del ? <button onClick={() => {
                if(selectColor === "bg-sec-background-color") {
                    setSelectColor("bg-accent");
                    setDeleteIdeas((previousState) => {
                        return [...previousState, id]
                    })
                }
                else {
                    setSelectColor("bg-sec-background-color");
                    setDeleteIdeas((previousState) => {
                        return previousState.filter((idea) => idea !== id)
                    })
                }

            }} className={`w-4 h-4 border-2 z-10 border-gray-600 ${selectColor} rounded-full`}></button> : null}
            <div className="flex flex-col gap-1.5">
                <span className="font-bold text-base">{title}</span>
                <hr />
                <span className="text-sm ">By: {by.slice(0, 25)}...</span>
                <span className="text-sm">Category: {category}</span>
                <span className="text-sm">{description.slice(0,40)}...</span>
                <span className="text-sm opacity-25">{createdAt === updatedAt ? `Created at ${formatDate(new Date(createdAt))}` : `Opened at ${formatDate(new Date(updatedAt))}`}</span>
            </div>
        </div>
    )
}

export default Idea;