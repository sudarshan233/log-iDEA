import ViewIdeasBar from "../Components/ViewIdeasBar.jsx";
import NavBar from "../Components/NavBar.jsx";

const ViewIdeasPage = () => {
    const scrollStyle = "scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-gray-900";
    return (
        <section className="flex">
            <NavBar />
            <ViewIdeasBar
                width="w-96"
                sectionWidth="w-screen"
                overflow="overflow-auto"
                scrollStyle={scrollStyle}
                flexDirection = "flex-row"
                wrap="flex-wrap"
                bottomMargin="mb-10"/>
        </section>
    )
}

export default ViewIdeasPage;