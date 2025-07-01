import NavBar from "../Components/NavBar.jsx";
import CreateIdea from "../Components/CreateIdea.jsx";
import ViewIdeasBar from "../Components/ViewIdeasBar.jsx";

const CreatePage = () => {
    return (
        <section className="flex">
            <NavBar />
            <ViewIdeasBar width="w-80" sectionWidth="w-viewBar"/>
            <CreateIdea />
        </section>
    )
}

export default CreatePage;