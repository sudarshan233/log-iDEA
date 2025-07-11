import {Plus, Search, Trash2} from 'lucide-react';
import {useEffect, useState} from "react";
import api from "../lib/axios.js";

import Idea from "./Idea.jsx";

const ViewIdeasBar = (props) => {
    const [ideas, setIdeas] = useState([]);
    const [allIdeas, setAllIdeas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const {width, sectionWidth,
        overflow, flexDirection,
        ideaClicked, wrap,
        enableLog, setDelete,
        del, setDeleteIdeas,
        deleteIdea, deleteIdeas,
        refreshIdeas, scrollStyle} = props;

    useEffect(() => {
        console.log("Fetching ideas...");
        const fetchIdeas = async () => {
            try {
                const res = await api.get("/ideas");
                console.log(res.data.ideas);
                setIdeas(res.data.ideas);
                setAllIdeas(res.data.ideas);
            } catch (error) {
                console.error("❌ Error fetching ideas:", error.message);
                if (error.response) {
                    console.error("💡 Server responded with:", error.response.data);
                } else if (error.request) {
                    console.error("📡 No response from server. Request was:", error.request);
                } else {
                    console.error("💥 Unknown error:", error);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchIdeas();
    }, [refreshIdeas]);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        console.log("Searching: ", value);
        if (search.length > 0) {
            const filteredIdeas = allIdeas.filter((idea) => {
                return idea.title.toLowerCase().startsWith(value.toLowerCase());
            });
            setIdeas(filteredIdeas);
        } else {
            setIdeas(allIdeas);
        }
    }

    return (
        <section className={`${sectionWidth} h-screen ml-20 flex flex-col pl-6, pr-6, pt-6 gap-5`}>
            <div className={`h-8 ${width} mr-12 box-border self-center bg-sec-background-color rounded-xl relative`}>
                <input onChange={handleChange} value={search} className={`bg-sec-background-color outline-0 ${width} h-8 p-4 rounded-xl`} placeholder="Search by title"/>
                <Search className="stroke-accent w-4 h-4 absolute right-3 top-2"/>
            </div>
            <div className="flex w-full justify-between pr-6">
                <h2>My Ideas</h2>
                <div className="flex mr-6 gap-2">
                    <button onClick={enableLog} className="hover:opacity-100 opacity-50 transition-opacity"><Plus className="stroke-accent w-5 h-5 "/></button>
                    {del ?
                        <div className="flex gap-2">
                            <button onClick={() => {
                                deleteIdea();
                                setIdeas((prevState) => {
                                    return prevState.filter((idea) => !deleteIdeas.includes(idea._id));
                                })
                                setDelete(false);
                                setDeleteIdeas([]);
                            }} className="w-max h-max bg-accent text-white text-sm pr-2 pl-2 pt-1 pb-1 rounded">Delete</button>
                            <button onClick={() => {
                                setDelete(false);
                            }} className="w-max h-max bg-sec-background-color text-white text-sm pr-2 pl-2 pt-1 pb-1 rounded">Cancel</button>
                        </div>
                        : <button onClick={() => {
                            setDelete(true);
                        }} className="hover:opacity-100 opacity-50 transition-opacity"><Trash2 className="stroke-accent w-4 h-4"/></button>}
                </div>
            </div>
            <div className={`flex ${flexDirection} h-screen gap-4 pr-4 ${scrollStyle} ${overflow} ${wrap} box-border mb-2`}>
                {loading ? <h1>Loading...</h1> : (ideas.length === 0 ? <div className="flex p-4 h-4/5 justify-center items-center border-dashed border-gray-500"><h1>No ideas logged yet!!!</h1></div> : ideas.map((idea, index) => {
                    return <Idea
                        key={idea._id}
                        id={idea._id}
                        index={index}
                        title={idea.title}
                        by={idea.by}
                        category={idea.category}
                        description={idea.description}
                        createdAt={idea.createdAt}
                        updatedAt={idea.updatedAt}
                        handleClick={ideaClicked}
                        del={del}
                        setDeleteIdeas={setDeleteIdeas}
                    />
                }))}
            </div>
        </section>
    )
}

export default ViewIdeasBar;
