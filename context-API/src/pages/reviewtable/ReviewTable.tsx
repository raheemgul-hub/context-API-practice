import axios from "axios";
import { useState, useEffect } from "react";
import "./ReviewTable.css"
import { Link } from "react-router-dom";
function ReviewTable() {

    const Base_URL = 'https://pickup-jobs-api.codegenio.com/api/';
    const RelativePath = 'customer/review/list?'
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState("");
    // Separate states for each search input
    const [searchId, setSearchId] = useState("");
    const [searchComment, setSearchComment] = useState("");
    const [searchRating, setSearchRating] = useState("");

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
                    page: 0
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
    // Filter users based on search inputs
    const filteredUsers = users.filter((data:any) => {
        return (
            (searchId === "" || data.id.toString().includes(searchId)) &&
            (searchComment === "" || data.comment.toLowerCase().includes(searchComment.toLowerCase())) &&
            (searchRating === "" || data.rating.toString().includes(searchRating))
        );
    });
    return (
        <div className="review-table-container">
            <div className="review-header">
                <h2>Customer Reviews</h2>
                <Link to={"/addreview"}> <button className="add-review-button">Add Review</button></Link>
            </div>
            {/* Search Inputs */}
            <div className="review-search-container">
                <div className="review-search-input-group">
                    <label className="review-search-label">ID:</label>
                    <input
                        type="text"
                        className="review-search-input"
                        placeholder="Search by ID"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                    />
                </div>
                <div className="review-search-input-group">
                    <label className="review-search-label">Comment:</label>
                    <input
                        type="text"
                        className="review-search-input"
                        placeholder="Search by Comment"
                        value={searchComment}
                        onChange={(e) => setSearchComment(e.target.value)}
                    />
                </div>
                <div className="review-search-input-group">
                    <label className="review-search-label">Rating:</label>
                    <input
                        type="text"
                        className="review-search-input"
                        placeholder="Search by Rating"
                        value={searchRating}
                        onChange={(e) => setSearchRating(e.target.value)}
                    />
                </div>
            </div>

            <table className="review-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Comment</th>
                        <th>Rating</th>

                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((data: any) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.comment}</td>
                            <td>{data.rating}{Array.from({ length: 5 }, (_, index) => (
                                <span key={index} className={index < data.rating ? "fa fa-star checked" : "fa fa-star"}></span>
                            ))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ReviewTable