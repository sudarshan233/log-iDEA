import AdditionalInfo from "./AdditionalInfo.jsx";
import { CirclePlus } from 'lucide-react';
import Footer from "./Footer.jsx";

const CreateIdea = () => {
    return (
        <section className="flex flex-col gap-5 p-6 w-screen bg-sec-background-color">
            <input className="p-4 text-4xl font-bold h-16 bg-sec-background-color outline-0" placeholder="Title" />
            <hr />
            <AdditionalInfo key={1} label="By:" placeholder="Solo or Team"/>
            <AdditionalInfo key={2} label="Category:" placeholder="It can be anything"/>
            <textarea className="bg-sec-background-color pl-4 min-h-96 outline-0" placeholder="Finally!! Tell me your idea. Go nuts🎉🎉"></textarea>
            <div className="flex justify-between">
                <Footer style="mt-10"/>
                <button className="w-max h-max mt-4 bg-accent text-white text-2xl p-2 rounded-xl">
                    <div className="flex gap-2">
                        <p>Log</p>
                        <CirclePlus className="bg-accent mt-1"/>
                    </div>
                </button>
            </div>
        </section>
    )
}

export default CreateIdea;