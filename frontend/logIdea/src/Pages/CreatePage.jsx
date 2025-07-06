import {useState} from "react";
import axios from "axios";

import NavBar from "../Components/NavBar.jsx";
import CreateIdea from "../Components/CreateIdea.jsx";
import ViewIdeasBar from "../Components/ViewIdeasBar.jsx";
import toast from "react-hot-toast";

const CreatePage = () => {
    const [clickedId, setClickedId] = useState("");
    const [clickedTitle, setClickedTitle] = useState("");
    const [clickedBy, setClickedBy] = useState("");
    const [clickedCategory, setClickedCategory] = useState("");
    const [clickedDescription, setClickedDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [clicked, setClicked] = useState(false);

    const viewIdea = async (id) => {
        console.log(id);
        setClicked(true);
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5001/api/ideas/${id}`);
            setClickedId(id);
            setClickedTitle(response.data.idea.title);
            setClickedBy(response.data.idea.by);
            setClickedCategory(response.data.idea.category);
            setClickedDescription(response.data.idea.description);
        } catch (error) {
            console.error(error);
            toast.error("Error in fetching idea");
        } finally {
            setLoading(false);
        }
    }
    return (
        <section className="flex">
            <NavBar />
            <ViewIdeasBar
                width="w-80"
                sectionWidth="w-viewBar"
                overflow="overflow-auto"
                flexDirection="flex-col"
                ideaClicked={viewIdea}
            />
            <CreateIdea
                clickedId={clickedId}
                clickedTitle={clickedTitle}
                clickedBy={clickedBy}
                clickedCategory={clickedCategory}
                clickedDescription={clickedDescription}
                isClicked={clicked}
                functionClick={setClicked}
            />
        </section>
    )
}

export default CreatePage;