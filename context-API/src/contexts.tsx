import { createContext, useState } from "react";
import Teacher from "./pages/teacher/Teacher";
import Student from "./pages/student/Student";

export const globalContext = createContext({});

export const GlobalContextProvider = ({ children }:any) => {
    const [user, setUser] = useState({
        name: "fahad",
        age: 20
    })

    return (
        <globalContext.Provider value={{ user, setUser }}>
            {children}
        </globalContext.Provider>
    )
}
// ....................................................................................................//
export const studentContext = createContext({});

export const StudentContextProvider = () => {
    const [studnt, setStudent] = useState({
        name: "Hamza",
        age: 30
    })

    return (
        <studentContext.Provider value={{ studnt, setStudent }}>
          <Student/>
        </studentContext.Provider>
    )
}


//.....................................................................................................//
export const TeacherContext= createContext({});

export const TeacherContextProvider=()=>{
    const[sir,setSir]=useState({
        name:'sir ali',
        age:30
    })
    return(
    <TeacherContext.Provider value={{sir,setSir}}>
            <Teacher/>
        </TeacherContext.Provider>
    )
}