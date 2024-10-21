import { Link, Outlet } from "react-router-dom";
import './Student.css'
import { useContext } from "react";
import { globalContext } from "../../contexts";

function Student() {
    const { user }:any = useContext(globalContext);
    return (

        <div>
            <nav className="navbar">
                <div className="navbar-brand"> <h1>Student portal</h1></div>

                <ul className="navbar-links">
                    <Link to='student-1'><li>page-1</li></Link>
                    <Link to='student-2'><li>page-2</li></Link>
                    <Link to='student-3'><li>page-3</li></Link>
                    <Link to='/teacher'><li>click to move on teacher page</li></Link>
                </ul>
            </nav>
           
            <div>
                <h1><strong>name:</strong>{user.name}</h1>
                <h1><strong>age:</strong>{user.age}</h1>
            </div>
            <Outlet></Outlet>
        </div>
    )
}
export default Student;


