import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <span className="link course-list"><Link to="/">Course List</Link></span>
            <span  className="link"><Link to="/dashboard">Dashboard</Link></span>
        </div>
    )
}

export default Header;