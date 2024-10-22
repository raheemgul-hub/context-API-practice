import { Link, Outlet } from "react-router-dom";
import "./Teacher.css"

function Teacher (){
    return(
        <div>
            <nav className="navbar">
                <div className="navbar-brand"> <h1>TEACHER-PORTAL </h1></div>

                <ul className="navbar-links">
                    <Link to='teacher-1'><li> Teacher portal page-1</li></Link>
                    <Link to='teacher-2'><li> Teacher portal page-2</li></Link>
                    <Link to='teacher-3'><li> Teacher portal page-3</li></Link>
                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}
export default Teacher;