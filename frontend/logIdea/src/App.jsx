import {Route, Routes, useNavigate} from "react-router";
import HomePage from "./Pages/HomePage.jsx";
import ViewIdeasPage from "./Pages/ViewIdeasPage.jsx";
import CreatePage from "./Pages/CreatePage.jsx";

import "./index.css"
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import api from "./lib/axios.js";

const App = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [by, setBy] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [refreshIdeas, setRefreshIdeas] = useState(false);

    const [del, setDelete] = useState(false);
    const [deleteIdeas, setDeleteIdeas] = useState([]);

    const [clickedId, setClickedId] = useState("");
    const [clickedTitle, setClickedTitle] = useState("");
    const [clickedBy, setClickedBy] = useState("");
    const [clickedCategory, setClickedCategory] = useState("");
    const [clickedDescription, setClickedDescription] = useState("");
    const [clicked, setClicked] = useState(false);

    const scrollStyle = "scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-gray-950";

    console.log("Delete: " + deleteIdeas);

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
            await api.post("/ideas", {
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
            setRefreshIdeas(!refreshIdeas);
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
            await api.put(`/ideas/${clickedId}`, {
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
            const response = await api.get(`/ideas/${id}`);
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

    const deleteIdea = async () => {
        try {
            await Promise.all(
                deleteIdeas.map(id => api.delete(`/ideas/${id}`))
            );
            toast.success("Idea(s) deleted successfully");

        } catch (error) {
            console.error(error);
            toast.error("Error in deleting idea");
        }
    };
    return (
        <div className="bg-background-color min-h-screen">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage
                     scrollStyle={scrollStyle}
                     enableLog={enableLog}
                     logIdea={logIdea}
                     refreshIdeas={refreshIdeas}
                     del={del} setDelete={setDelete} deleteIdea={deleteIdea}
                     setDeleteIdeas={setDeleteIdeas} deleteIdeas={deleteIdeas}
                     viewIdea={viewIdea} functionClick={setClicked}
                     editIdea={editIdea}
                     title={title} setTitle={setTitle}
                     by={by} setBy={setBy}
                     category={category} setCategory={setCategory}
                     description={description} setDescription={setDescription}
                     isClicked={clicked}
                     loading={loading}/>} />
                <Route path="/idea" element={<ViewIdeasPage

                    setDelete={setDelete}
                    setDeleteIdeas={setDeleteIdeas}
                    del={del}
                    deleteIdea={deleteIdea}
                    deleteIdeas={deleteIdeas}
                    refreshIdeas={refreshIdeas}/>} />
            </Routes>
        </div>
    )
}

export default App;