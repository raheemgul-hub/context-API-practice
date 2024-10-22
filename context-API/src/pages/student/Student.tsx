import { Link, Outlet } from "react-router-dom";
import './Student.css'
function Student() {

    return (

        <div>
            <nav className="navbar">
                <div className="navbar-brand"> Student portal</div>

                <ul className="navbar-links">
                    <Link to='student-1'><li>page-1</li></Link>
                    <Link to='student-2'><li>page-2</li></Link>
                    <Link to='student-3'><li>page-3</li></Link>
                    <Link to='/teacher'><li>click to move on teacher page</li></Link>
                </ul>
            </nav>





            <Outlet></Outlet>
        </div>
    )
}
export default Student;


