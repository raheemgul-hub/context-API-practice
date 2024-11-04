import axios from "axios";
import { useEffect, useState } from "react";
import "./BookingTable.css"
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function BookingTable(){
    const Base_URL = 'https://pickup-jobs-api.codegenio.com/api/';
    const RelativePath = 'customer/request/list?'
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState("");
    useEffect(() => {
        const storedData = localStorage.getItem("token");
        if (storedData) {
            setToken(storedData);
        }
    }, []);

    useEffect(() => {
        if (token) {
            const usersReq = axios.get(Base_URL + RelativePath, {

                headers: {
                    'Authorization': 'Bearer ' + token
                },
                params: {
                    page: 1
                }
            });

            usersReq.then((response) => {
                if (response.data.success === true) {
                    setUsers(response.data.data.data);
                } else {
                    console.log('Something is wrong with backend server');
                }

            });

        }
    }, [token]);
    return(
        <div className="table-container">
            <div className="table-header">
                <h2>Booking List</h2>
                <Link to="/booking"> <Button variant="contained" color="inherit" sx={{ backgroundColor: 'black' }}>Booking-Now</Button></Link>
            </div>
            <div className="table-scroll">
                <table className="booking-table">
                    <thead>
                        <tr>
                            <th>Job ID</th>
                            <th>From Address</th>
                            <th>To Address</th>
                            <th>Goods Type</th>
                            <th>Weight</th>
                            <th>Booking Date</th>
                            <th>Offer Price</th>
                            <th>Offer Status</th>
                            <th>Payment Status</th>
                            <th>Status</th>
                            <th>Ready for Collection</th>
                            <th>Validity Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((data:any) => (
                            <tr key={data.id}>
                                <td>{data.jobId}</td>
                                <td>{data.fromAddress}</td>
                                <td>{data.toAddress}</td>
                                <td>{data.goodsType}</td>
                                <td>{data.goodsWeight} kg</td>
                                <td>{data.bookingDate}</td>
                                <td>{data.customerOfferPrice} PKR</td>
                                <td>{data.offerStatus}</td>
                                <td>{data.paymentStatus}</td>
                                <td>{data.status}</td>
                                <td>{data.readyForCollection ? 'Yes' : 'No'}</td>
                                <td>{data.validityDate}</td>
                                <td>{data.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default BookingTable