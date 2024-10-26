import axios from "axios";
import { useState, useEffect } from "react";
import"./ReviewTable.css"
function ReviewTable(){

    const Base_URL = 'https://pickup-jobs-api.codegenio.com/api/';
    const RelativePath = 'customer/review/list?'
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState("");
    useEffect(() => {
        const storedData = localStorage.getItem("token");
        if (storedData) {
            setToken(storedData);
        }
    }, []);

    useEffect(() => {
        if(token){
        const usersReq = axios.get( Base_URL + RelativePath, {
            
            headers:{
                'Authorization': 'Bearer ' + token
            },
            params: {
                page: 1
            }
        });
            
        usersReq.then((response) => {
            if (response.data.success===true)  {
                setUsers(response.data.data.data);
            } else {
                console.log('Something is wrong with backend server');
            }
           
        });
       
    }
    }, [token]);

    return(
        <div className="table-container ">
            <h2>Customer Reviews</h2>
            <table className="review-table" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Comment</th>
                        <th>Rating</th> 
                    </tr>
                </thead>
                <tbody>
                    {users.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.comment}</td>
                            <td>{data.rating}</td>
                          
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ReviewTable