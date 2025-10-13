import {House, Lightbulb, Loader} from 'lucide-react';
import { Link } from "react-router";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {useAuthStore} from "../../store/authStore.ts";
import type {FormEvent} from "react";
import toast from "react-hot-toast";

const NavBar = () => {
    const navigate = useNavigate();
    const { logout, isLoading } = useAuthStore();

    const handleLogout = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await logout();
            toast.success("Logged out successfully 🎉🎉🎉", {
                style: {
                    backgroundColor: '#1F2937',
                    color: "#F2F2F2"
                }
            });
            navigate('/login');
        } catch(error) {
            console.error(error)
        }
    }
    return (
        <section className="flex flex-col justify-between rounded-br rounded-tr gap-5 w-max p-4 h-screen fixed bg-sec-background-color">
            <div className="flex flex-col gap-6">
                <Link to="/">
                    <button className="hover:opacity-100 opacity-50 transition-opacity"><House className="stroke-accent w-6 h-6"/></button>
                </Link>
                <Link to="/idea">
                    <button className="hover:opacity-100 opacity-50 transition-opacity"><Lightbulb className="stroke-accent w-6 h-6"/></button>
                </Link>
                <form onSubmit={(event:React.FormEvent):void => {
                    handleLogout(event)
                }} className="px-4 md:px-6 lg:px-8">
                    <motion.button className="w-full text-gray-200 font-bold
                text-sm md:text-base lg:text-xl
                p-2 md:p-4
                mb-2 md:mb-4 lg:mb-6
                rounded-lg border-gray-700
                focus:border-orange-500 focus:ring-2 focus:ring-orange-500
                bg-gradient-to-r from-orange-500 to-amber-900"
                                   whileHover={{scale: 1.02}}
                                   whileTap={{scale: 0.98}}
                                   type="submit"
                                   disabled={isLoading}>{isLoading ? <Loader className="animate-spin mx-auto"/> : "Logout"}
                    </motion.button>
                </form>
            </div>
        </section>
    )
}

export default NavBar;