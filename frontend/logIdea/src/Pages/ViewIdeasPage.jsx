import ViewIdeasBar from "../Components/ViewIdeasBar.jsx";
import NavBar from "../Components/NavBar.jsx";

const ViewIdeasPage = () => {
    return (
        <section className="flex">
            <NavBar />
            <ViewIdeasBar width="w-96" sectionWidth="w-screen"/>
        </section>
    )
}

export default ViewIdeasPage;