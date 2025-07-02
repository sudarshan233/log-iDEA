import AdditionalInfo from "./AdditionalInfo.jsx";
import Logged from "./Logged.jsx";
import Logging from "./Logging.jsx";

import Footer from "./Footer.jsx";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import axios from "axios";

const CreateIdea = () => {
    const [title, setTitle] = useState("");
    const [by, setBy] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

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
    return (
        <form onSubmit={logIdea} className="flex flex-col gap-5 p-6 w-screen bg-sec-background-color">
            <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="p-4 text-4xl font-bold h-16 bg-sec-background-color outline-0"
                placeholder="Title" />
            <hr />

            <AdditionalInfo key={1} value={by} onChange={setBy} label="By:" placeholder="Solo or Team"/>
            <AdditionalInfo key={2} value={category} onChange={setCategory} label="Category:" placeholder="It can be anything"/>

            <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="bg-sec-background-color pl-4 min-h-96 outline-0"
                placeholder="Finally!! Tell me your idea. Go nuts🎉🎉"></textarea>

            <div className="flex justify-between">
                <Footer style="mt-10"/>

                <button type="submit" className="w-max h-max mt-4 bg-accent text-white text-2xl p-2 rounded-xl">
                    {!loading ? <Logged /> : <Logging />}
                </button>
            </div>
        </form>
    )
}

export default CreateIdea;