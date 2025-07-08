import AdditionalInfo from "./AdditionalInfo.jsx";
import Logged from "./Logged.jsx";
import Logging from "./Logging.jsx";
import Edit from "./Edit.jsx";
import Editing from "./Editing.jsx";
import Footer from "./Footer.jsx";

const CreateIdea = (props) => {
    const {
        title, setTitle,
        by, setBy,
        category, setCategory,
        description, setDescription,
        isClicked,
        logIdea, editIdea, loading, scrollStyle } = props;

    return (
        <form onSubmit={isClicked ? editIdea:logIdea} className={`flex flex-col gap-5 p-6 w-screen bg-sec-background-color overflow-auto ${scrollStyle}`}>
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
                <Footer style="mt-10 "/>

                <button type="submit" className="w-max h-max mt-4 bg-accent text-white text-2xl p-2 rounded-xl">
                    {
                        isClicked ? loading ? <Editing /> : <Edit edit={editIdea}/> : loading ? <Logging /> : <Logged />
                    }
                </button>
            </div>
        </form>
    )
}

export default CreateIdea;