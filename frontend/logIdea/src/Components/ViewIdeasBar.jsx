import {Search, Trash2} from 'lucide-react';
import {useState} from "react";

const ViewIdeasBar = (props) => {
    const [hover, setHover] = useState(false);
    const { width, sectionWidth } = props;
    console.log(width);
    return (
        <section className={`lg:${sectionWidth} h-screen flex flex-col items-center p-6 gap-5`}>
            <div className={`h-8 ${width} bg-sec-background-color rounded-xl relative`}>
                <input className={`bg-sec-background-color ${width} h-8 p-4 rounded-xl`} placeholder="Search by title"/>
                <Search className="stroke-accent w-4 h-4 absolute right-3 top-2"/>
            </div>
            <div className="flex w-full justify-between">
                <h2>My Ideas</h2>
                <button className="hover:opacity-100 opacity-50 transition-opacity"><Trash2 className="stroke-accent mt-2 w-4 h-4 "/></button>
            </div>

        </section>
    )
}

export default ViewIdeasBar;
