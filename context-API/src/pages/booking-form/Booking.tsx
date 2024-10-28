import { useNavigate } from "react-router-dom";
import "./Booking.css"
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useEffect, useState } from "react";

function Booking (){
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const Base_URL = 'https://pickup-jobs-api.codegenio.com/api/';
    const RelativePath = 'customer/request/save'
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const storedData = localStorage.getItem("token");
        if (storedData) {
            setToken(storedData);
        }
    }, []);

    const formSubmit = (data:any) => {
        axios.post(
            Base_URL + RelativePath,
            {
                transporterId: data.transporterId,
                fromAddress: data.fromAddress,
                toAddress: data.toAddress,
                fromLat: data.fromLat,
                fromLng: data.fromLng,
                toLat: data.toLat,
                toLng: data.toLng,
                goodsWeight: data.goodsWeight || "",           // Optional field
                bookingDate: data.bookingDate,
                goodsType: data.goodsType || "",               // Optional field
                customerOfferPrice: data.customerOfferPrice || 0, // Optional field with a default value
                moving: data.moving,
                validity: data.validity,
                detail: data.detail || "",                     // Optional field
                readyForCollection: data.readyForCollection,
                description: data.description || ""
            },
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
        )
            .then((response) => {
                console.log(response);
                if (response.data.success === true) {
                    alert(response.data.message);
                    // reset();
                    navigate("/bookingtable");
                } else {
                    alert(response.data.message);
                }
            })
            .catch((error) => {
                console.error("Error submitting data:", error);
                alert("Authorization failed. Please check your credentials.");
            });
    };

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <div>
                <label>Transporter ID:</label>
                <input
                    type="number"
                    {...register("transporterId", { required: "Transporter ID is required" })}
                />
                {errors.transporterId && <p>{errors.transporterId.message}</p>}
            </div>

            <div>
                <label>From Address:</label>
                <input
                    type="text"
                    {...register("fromAddress", { required: "From Address is required" })}
                />
                {errors.fromAddress && <p>{errors.fromAddress.message}</p>}
            </div>

            <div>
                <label>To Address:</label>
                <input
                    type="text"
                    {...register("toAddress", { required: "To Address is required" })}
                />
                {errors.toAddress && <p>{errors.toAddress.message}</p>}
            </div>

            <div>
                <label>From Latitude:</label>
                <input
                    type="number"
                    {...register("fromLat", { required: "From Latitude is required" })}
                />
                {errors.fromLat && <p>{errors.fromLat.message}</p>}
            </div>

            <div>
                <label>From Longitude:</label>
                <input
                    type="number"
                    {...register("fromLng", { required: "From Longitude is required" })}
                />
                {errors.fromLng && <p>{errors.fromLng.message}</p>}
            </div>

            <div>
                <label>To Latitude:</label>
                <input
                    type="number"
                    {...register("toLat", { required: "To Latitude is required" })}
                />
                {errors.toLat && <p>{errors.toLat.message}</p>}
            </div>

            <div>
                <label>To Longitude:</label>
                <input
                    type="number"
                    {...register("toLng", { required: "To Longitude is required" })}
                />
                {errors.toLng && <p>{errors.toLng.message}</p>}
            </div>

            <div>
                <label>Goods Weight:</label>
                <input type="text" {...register("goodsWeight")} />
            </div>

            <div>
                <label>Booking Date:</label>
                <input
                    type="date"
                    {...register("bookingDate", { required: "Booking Date is required" })}
                />
                {errors.bookingDate && <p>{errors.bookingDate.message}</p>}
            </div>

            <div>
                <label>Goods Type:</label>
                <input type="text" {...register("goodsType")} />
            </div>

            <div>
                <label>Customer Offer Price:</label>
                <input type="number" {...register("customerOfferPrice")} />
            </div>

            <div>
                <label>Moving:</label>
                <input
                    type="checkbox"
                    {...register("moving", { required: "Moving status is required" })}
                />
                {errors.moving && <p>{errors.moving.message}</p>}
            </div>

            <div>
                <label>Validity:</label>
                <input
                    type="date"
                    {...register("validity", { required: "Validity is required" })}
                />
                {errors.validity && <p>{errors.validity.message}</p>}
            </div>

            <div>
                <label>Detail:</label>
                <textarea {...register("detail")} />
            </div>

            <div>
                <label>Ready for Collection:</label>
                <input
                    type="checkbox"
                    {...register("readyForCollection", { required: "Ready for Collection status is required" })}
                />
                {errors.readyForCollection && <p>{errors.readyForCollection.message}</p>}
            </div>

            <div>
                <label>Description:</label>
                <textarea {...register("description")} />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Booking;
