import { useContext } from "react";
import { globalContext } from "../../contexts";

function Student3(){
    const { user }:any = useContext(globalContext);
return(

    <div><h1>i am student 3</h1>
        <h1>{user.name}</h1>


    </div>
)
}
export default Student3