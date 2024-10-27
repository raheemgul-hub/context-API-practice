import axios from "axios";
import { useEffect, useState } from "react";
import { FieldError, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AddReview() {

    const { register, handleSubmit, formState: { errors }, reset, } = useForm();
    const Base_URL = 'https://pickup-jobs-api.codegenio.com/api';
    const RelativePath = '/customer/review/save';
    const [token, setToken] = useState("");
    const [bookingId, setBookingId] = useState(930);
    let toUserId = 122
    const navigate = useNavigate(); // Initialize useNavigate
    useEffect(() => {
        const storedData = localStorage.getItem("token");
        if (storedData) {
            setToken(storedData);
        }
        const storedId = localStorage.getItem("id");
        if (storedId) {
            setBookingId(JSON.parse(storedId))
        }
    }, []);

    const formSubmit = (data: any) => {
        if (token) {
            axios.post(Base_URL + RelativePath, {
                comment: data.comment,
                rating: data.rating,
                bookingRequestId: bookingId,
                toUserId: toUserId
            }, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
                .then((response) => {
                    console.log(response)
                    if (response.data.success === true) {
                        alert(response.data.message)
                        const newBookingId = bookingId + 1;
                        setBookingId(newBookingId);  // Increment the booking ID
                        localStorage.setItem("id", JSON.stringify(newBookingId));
                        reset();
                        navigate("/reviewtable");
                    } else {
                        console.log('Something is wrong with the backend server');
                    }
                })
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(formSubmit)} className="custom-form">
                <h3>ADD Review for PickUp-Jobs</h3>
                <div className="errors">
                    {errors.comment && <span>{(errors.comment as FieldError).message}</span>}
                </div>
                <textarea
                    className="custom-input"
                    placeholder="Enter the comment"
                    {...register("comment", {
                        required: { value: true, message: "comment is required" },
                    })}
                />
                <div className="errors">
                    {errors.rating && (
                        <span>{(errors.rating as FieldError).message}</span>
                    )}
                </div>
                <input
                    type="number"
                    className="custom-input"
                    max={5}
                    min={1}
                    placeholder="Enter the rating"
                    {...register("rating", {
                        required: { value: true, message: "*Rating is required." },
                    })}
                />
                <button type="submit" className="custom-btn">Submit Review</button>
            </form>
        </div>
    );
}

export default AddReview;
