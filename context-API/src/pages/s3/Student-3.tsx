import { useContext } from "react";
import { globalContext, studentContext } from "../../contexts";

function Student3(){
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { user }:any = useContext(globalContext);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const{studnt}:any= useContext(studentContext)
return(

    <div><h1>i am student 3</h1>
        <h1> data from globalContext using useContext: {user.name}</h1>
        *************************************************************************************************
        <h1> data from StudentContext using useContext--{studnt.name}</h1>


    </div>
)
}
export default Student3