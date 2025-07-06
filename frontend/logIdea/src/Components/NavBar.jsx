import { House, Bolt, Lightbulb } from 'lucide-react';
import { Link } from "react-router";

const NavBar = () => {

    return (
        <section className="flex flex-col justify-between rounded-br rounded-tr gap-5 w-max p-4 h-screen fixed bg-sec-background-color">
            <div className="flex flex-col gap-6">
                <button><div className="rounded-full w-6 h-6 bg-accent"></div></button>
                <Link to="/">
                    <button className="hover:opacity-100 opacity-50 transition-opacity"><House className="stroke-accent w-6 h-6"/></button>
                </Link>
                <Link to="/idea">
                    <button className="hover:opacity-100 opacity-50 transition-opacity"><Lightbulb className="stroke-accent w-6 h-6"/></button>
                </Link>
            </div>
            <button className="hover:opacity-100 opacity-50 transition-opacity"><Bolt className="stroke-accent w-6 h-6 justify-self-end"/></button>
        </section>
    )
}

export default NavBar;