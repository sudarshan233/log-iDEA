import {Search, Trash2} from 'lucide-react';
import {useEffect, useState} from "react";
import axios from "axios";

import Idea from "./Idea.jsx";

const ViewIdeasBar = (props) => {
    const [ideas, setIdeas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchIdeas = async () => {
            try {
                const res = await axios.get("http://localhost:5001/api/ideas");
                console.log(res.data.ideas);
                setIdeas(res.data.ideas);
                // setIdeas([]);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchIdeas();
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
        if (search.length > 0) {
            const filteredIdeas = ideas.filter((idea) => {
                return idea.title.toLowerCase().startsWith(search.toLowerCase());
            });
            setIdeas(filteredIdeas);
        } else {
            setIdeas(ideas);
        }
    }

    const { width, sectionWidth } = props;
    console.log(width);
    return (
        <section className={`${sectionWidth} h-screen flex flex-col items-center p-6 gap-5`}>
            <div className={`h-8 ${width} bg-sec-background-color rounded-xl relative`}>
                <input onChange={handleChange} className={`bg-sec-background-color ${width} h-8 p-4 rounded-xl`} placeholder="Search by title"/>
                <Search className="stroke-accent w-4 h-4 absolute right-3 top-2"/>
            </div>
            <div className="flex w-full justify-between">
                <h2>My Ideas</h2>
                <button className="hover:opacity-100 opacity-50 transition-opacity"><Trash2 className="stroke-accent mt-2 w-4 h-4 "/></button>
            </div>
            <div className="flex h-4/5 flex-col w-80">
                {loading ? <h1>Loading...</h1> : (ideas.length === 0 ? <div className="flex p-4 h-4/5 justify-center items-center border-dashed border-gray-500"><h1>No ideas logged yet!!!</h1></div> : ideas.map((idea) => {
                        return <Idea
                            key={idea._id}
                            title={idea.title}
                            by={idea.by}
                            category={idea.category}
                            description={idea.description}
                            createdAt={idea.createdAt}
                            updatedAt={idea.updatedAt}/>
                    }))
                }
            </div>
        </section>
    )
}

export default ViewIdeasBar;
