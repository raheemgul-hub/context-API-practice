import { createContext, useState } from "react";



// eslint-disable-next-line react-refresh/only-export-components
export const globalContext = createContext({});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GlobalContextProvider = ({ children }:any) => {
    const [user, setUser] = useState({
        Base_URL:'https://pickup-jobs-api.codegenio.com/api'
    })

    return (
        <globalContext.Provider value={{ user, setUser }}>
            {children}
        </globalContext.Provider>
    )
}
// ....................................................................................................//

// export const studentContext = createContext({});

// export const StudentContextProvider = () => {
//     const [studnt, setStudent] = useState({
//         name: "Hamza",
//         age: 30
//     })

//     return (
//         <studentContext.Provider value={{ studnt, setStudent }}>
//           <Student/>
//         </studentContext.Provider>
//     )
//}
// 

