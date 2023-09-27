
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const Navbar = () => {
    return (
        <div>
            <nav className="flex flex-col lg:flex-row justify-between items-center py-6 shadow-lg px-5">
                <Logo></Logo>
                <ul className="flex gap-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#ff444a] underline" : ""
                            }
                            >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#ff444a] underline" : ""
                            }
                            >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistice"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#ff444a] underline" : ""
                            }
                            >
                            Statistice
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;