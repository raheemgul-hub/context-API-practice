import { Link, Outlet } from "react-router-dom";
import './Navbar.css'
function Navbar() {

    return (

        <div>
            <nav className="navbar">
                <div className="navbar-brand">PickUp-Jobs</div>

                <ul className="navbar-links">
                    <Link to='signup'><li>signup</li></Link>
                    <Link to='loginpage'><li>Login</li></Link>
                    <Link to='booking'><li>Booking</li></Link>
                    <Link to='reviewtable'><li>Reviews</li></Link>
                   
                </ul>
            </nav>





            <Outlet></Outlet>
        </div>
    )
}
export default Navbar;


