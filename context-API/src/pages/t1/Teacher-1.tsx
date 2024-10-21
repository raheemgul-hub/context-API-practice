import { useContext } from "react";
import { globalContext, TeacherContext } from "../../contexts";
function Teacher1(){
 
    const { user }:any = useContext(globalContext);
    const { sir }: any = useContext(TeacherContext);
    return(
        <div><h1>page 1 of Teacher Portal</h1>
           <div>
                <h3><strong>name from global context by using useContext :</strong>  {user.name}</h3>  
                <h3><strong>age from global context by using useContext :</strong>  {user.age}</h3> 
           </div>
          <p>**************************************************</p>
            <div>
                <p><strong>name from teacher context by using useContext :</strong>  {sir.name}</p>
                <p><strong>age from teacher context by using useContext :</strong>  {user.age}</p>
            </div>
        </div>
    )
}
export default Teacher1