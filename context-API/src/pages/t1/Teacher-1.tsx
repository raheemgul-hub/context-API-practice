import { useContext } from "react";
import { globalContext, TeacherContext } from "../../contexts";
function Teacher1(){
 
    const { user,setUser }:any = useContext(globalContext);
    const { sir,setSir }:any = useContext(TeacherContext);

    const changebutton1 = (newName1: string) => {
        setUser({
            name: newName1
        })
    }
    
    const changebutton = (newName:string) => {
        setSir({
            name: newName
        })
    }

    return(
        <div><h1>page 1 of Teacher Portal</h1>
           <div>
                <h3><strong>name from global context by using useContext :</strong>  {user.name}</h3>  
                <h3><strong>age from global context by using useContext :</strong>  {user.age}</h3> 
                <button onClick={() => changebutton1("faha11111111111111111")}>change name </button>
           </div>
          <p>**************************************************</p>
            <div>
                <p><strong>name from teacher context by using useContext :</strong>  {sir.name}</p>
                <p><strong>age from teacher context by using useContext :</strong>  {user.age}</p>
            </div>

            <button onClick={()=>changebutton("fahadaligggggg2222222222222222222")}>change name </button>
        </div>
    )
}
export default Teacher1