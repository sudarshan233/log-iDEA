import ViewIdeasBar from "../Components/ViewIdeasBar.jsx";
import NavBar from "../Components/NavBar.jsx";
import {useState} from "react";
import CreateIdea from "../Components/CreateIdea.jsx";
import {useNavigate} from "react-router";

const ViewIdeasPage = (props) => {
    const {
        scrollStyle,
        refreshIdeas,
        setDelete, setDeleteIdeas, del, deleteIdea, deleteIdeas,
    } = props;

    const navigate = useNavigate();

    const [toggleLog, setToggleLog] = useState(false);

    const enableLog = () => {
        navigate("/create");
    }
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
                bottomMargin="mb-10"
                setDelete={setDelete}
                setDeleteIdeas={setDeleteIdeas}
                del={del}
                deleteIdea={deleteIdea}
                deleteIdeas={deleteIdeas}
                refreshIdeas={refreshIdeas}
                enableLog={enableLog}/>
        </section>
    )
}

export default ViewIdeasPage;