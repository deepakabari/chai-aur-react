import { Link } from "react-router-dom";
import "./style.css"

const Header = () => {
    return (
        <nav className="header">
            <ul>
                <li>
                    <Link to="/">Fetch Data</Link>
                </li>
                <li>
                    <Link to="/todo">Todo</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
