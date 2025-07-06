import {SquarePen} from "lucide-react";

const Edit = (props) => {
    const {editIdea} = props;
    return (
        <div className="flex gap-2">
            <p>Edit</p>
            <SquarePen className="bg-accent mt-1"/>
        </div>
    )
}

export default Edit;