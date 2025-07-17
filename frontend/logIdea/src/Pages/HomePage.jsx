import { Link } from "react-router";
import Footer from "../Components/Footer.jsx";

const HomePage = () => {

    return (
        <section className="flex h-screen">
            <section className="ml-10 mr-12">
                <h3 className="md:mb-20 mt-5 text-3xl">logIdea</h3>
                <h1 className="md:mb-1 mt-32 text-5xl">Idea Today....</h1>
                <h1 className="md:mb-1 text-5xl">Innovation of Tomorrow!!!</h1>
                <section className="md:mb-2 mt-20 flex gap-2">
                    <div className="w-1 h-18 bg-accent"></div>
                    <section className="text-xl">
                        <h3>Create, View and Track </h3>
                        <h3>all of your brilliant ideas</h3>
                        <h3>in one safe space.</h3>
                    </section>
                </section>
                <section className="md:mt-20 flex gap-2.5">
                    <Link to="/idea">
                        <button className="bg-button text-white text-2xl p-4 rounded-xl">View Ideas</button>
                    </Link>

                    <Link to="/create">
                        <button className="bg-accent text-white text-2xl p-4 rounded-xl">Log Idea</button>
                    </Link>
                </section>
                <Footer style="mt-16"/>

            </section>
            <img className="h-fiveHundredPixels ml-12" src='/assets/IdeaAnimation.gif' />
        </section>
    )
}

export default HomePage;