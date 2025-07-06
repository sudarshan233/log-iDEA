import {Search, Trash2} from 'lucide-react';
import {useEffect, useState} from "react";
import axios from "axios";

import Idea from "./Idea.jsx";

const ViewIdeasBar = (props) => {
    const [ideas, setIdeas] = useState([]);
    const [allIdeas, setAllIdeas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const {width, sectionWidth, overflow, flexDirection, ideaClicked} = props;

    useEffect(() => {
        const fetchIdeas = async () => {
            try {
                const res = await axios.get("http://localhost:5001/api/ideas");
                console.log(res.data.ideas);
                setIdeas(res.data.ideas);
                setAllIdeas(res.data.ideas);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchIdeas();
    }, []);

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
        <section className={`${sectionWidth} h-screen ml-14 flex flex-col p-6 gap-5 ${overflow}`}>
            <div className={`h-8 ${width} self-center bg-sec-background-color rounded-xl relative`}>
                <input onChange={handleChange} value={search} className={`bg-sec-background-color outline-0 ${width} h-8 p-4 rounded-xl`} placeholder="Search by title"/>
                <Search className="stroke-accent w-4 h-4 absolute right-3 top-2"/>
            </div>
            <div className="flex w-full justify-between">
                <h2>My Ideas</h2>
                <button className="hover:opacity-100 opacity-50 transition-opacity"><Trash2 className="stroke-accent mt-2 w-4 h-4 "/></button>
            </div>
            <div className={`flex ${flexDirection} gap-4 w-80`}>
                {loading ? <h1>Loading...</h1> : (ideas.length === 0 ? <div className="flex p-4 h-4/5 justify-center items-center border-dashed border-gray-500"><h1>No ideas logged yet!!!</h1></div> : ideas.map((idea) => {
                        return <Idea
                            key={idea._id}
                            id={idea._id}
                            title={idea.title}
                            by={idea.by}
                            category={idea.category}
                            description={idea.description}
                            createdAt={idea.createdAt}
                            updatedAt={idea.updatedAt}
                            handleClick={ideaClicked}/>

                    }))
                }
            </div>
        </section>
    )
}

export default ViewIdeasBar;
