import {useEffect, useState} from "react";
import axios from "axios";

import NavBar from "../Components/NavBar.jsx";
import CreateIdea from "../Components/CreateIdea.jsx";
import ViewIdeasBar from "../Components/ViewIdeasBar.jsx";
import toast from "react-hot-toast";

const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [by, setBy] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const [clickedId, setClickedId] = useState("");
    const [clickedTitle, setClickedTitle] = useState("");
    const [clickedBy, setClickedBy] = useState("");
    const [clickedCategory, setClickedCategory] = useState("");
    const [clickedDescription, setClickedDescription] = useState("");
    const [clicked, setClicked] = useState(false);

    const scrollStyle = "scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-gray-900";

    const logIdea = async (event) => {
        event.preventDefault();
        console.log(title);
        console.log(by);
        console.log(category);
        console.log(description);

        if(!title || !by || !category || !description) {
            toast.error("Please fill all the fields");
            return;
        }

        setLoading(true);
        try {
            await axios.post("http://localhost:5001/api/ideas", {
                title,
                by,
                category,
                description
            });
            toast.success("Idea logged successfully");
            setTitle("");
            setBy("");
            setCategory("");
            setDescription("");
        } catch (error) {
            console.error(error);
            toast.error("Error in logging idea");
        }
        finally {
            setLoading(false);
        }
    }

    const enableLog = () => {
        setTitle("");
        setBy("");
        setCategory("");
        setDescription("");
        setClicked(false);
    }

    useEffect(() => {
        if(clicked) {
            setTitle(clickedTitle);
            setBy(clickedBy);
            setCategory(clickedCategory);
            setDescription(clickedDescription);
        }
    }, [clicked, clickedTitle, clickedBy, clickedCategory, clickedDescription]);

    const editIdea = async (event) => {
        event.preventDefault();

        setLoading(true);
        try {
            await axios.put(`http://localhost:5001/api/ideas/${clickedId}`, {
                title,
                by,
                category,
                description
            });
            toast.success("Idea edited successfully");
            setTitle("");
            setBy("");
            setCategory("");
            setDescription("");
        } catch (error) {
            console.error(error);
            toast.error("Error in editing idea");
        }
        finally {
            setClicked(false);
            setLoading(false);
        }
    }

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
                scrollStyle={scrollStyle}
                ideaClicked={viewIdea}
                functionClick={setClicked}
                enableLog={enableLog}
            />
            <CreateIdea
                title={title} setTitle={setTitle}
                by={by} setBy={setBy}
                category={category} setCategory={setCategory}
                description={description} setDescription={setDescription}
                isClicked={clicked}
                editIdea={editIdea}
                logIdea={logIdea}
                loading={loading}
                scrollStyle={scrollStyle}
            />
        </section>
    )
}

export default CreatePage;