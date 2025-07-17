import NavBar from "../Components/NavBar.jsx";
import CreateIdea from "../Components/CreateIdea.jsx";
import ViewIdeasBar from "../Components/ViewIdeasBar.jsx";

const CreatePage = (props) => {
    const {
        scrollStyle, loading, refreshIdeas,
        enableLog, logIdea,
        title, setTitle, by, setBy,
        category, setCategory,
        description, setDescription,
        isClicked, setClicked, editIdea,
        setDeleteIdeas , del, setDelete,
        deleteIdea, deleteIdeas,
        viewIdea,
    } = props;
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
                setDelete={setDelete}
                setDeleteIdeas={setDeleteIdeas}
                del={del}
                deleteIdea={deleteIdea}
                deleteIdeas={deleteIdeas}
                refreshIdeas={refreshIdeas}
            />
            <CreateIdea
                title={title} setTitle={setTitle}
                by={by} setBy={setBy}
                category={category} setCategory={setCategory}
                description={description} setDescription={setDescription}
                isClicked={isClicked}
                editIdea={editIdea}
                logIdea={logIdea}
                loading={loading}
                scrollStyle={scrollStyle}
            />
        </section>
    )
}

export default CreatePage;