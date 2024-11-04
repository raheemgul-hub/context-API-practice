import { Link, Outlet } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; 
import "./Navbar.css";

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    {/* Home Icon with Tooltip */}
                    <Tooltip title="Home" arrow>
                        <Link to="/">
                            <IconButton color="inherit">
                                <ArrowBackIcon />
                            </IconButton>
                        </Link>
                    </Tooltip>
                    PickUp - Jobs
                </div>

                <ul className="navbar-links">
                    {/* Other Navigation Links */}
                    <Link to="signup">
                        <li>Signup</li>
                    </Link>
                    <Link to="loginpage">
                        <li>Login</li>
                    </Link>
                    <Link to="booking">
                        <li>Booking</li>
                    </Link>
                    <Link to="reviewtable">
                        <li>Reviews</li>
                    </Link>
                    <Link to="bookingtable">
                        <li>Booking Table</li>
                    </Link>
                    <Link to="logout">Logout</Link>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Navbar;
