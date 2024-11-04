import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [formData] = useState<IData[]>([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const Base_URL = 'https://pickup-jobs-api.codegenio.com/api'

    //function for form submit//
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formSubmit = (data: any) => {
        const userRequest = axios.post(Base_URL + '/public/login', {
            email: data.email,
            password: data.password

        })
        userRequest.then(function (response) {
            console.log(response)

            if (response.data.success === true) {
                reset()
                alert("Login successful");
                navigate("/bookingtable");
                localStorage.setItem("token", response.data.data.token);
                formData.push(
                    {
                        id: response.data.data.id,
                        firstname: response.data.data.firstName,
                        lastname: response.data.data.lastName,
                        email: response.data.data.email,
                        phone: response.data.data.phoneNumber,
                        status: response.data.data.status
                    }
                )
                localStorage.setItem("Data", JSON.stringify(formData))
              
            } else {
                alert("Login failed");
            }
        })

    };
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(formSubmit)} className="custom-form">
                <h3>
                    Login for PickUp-Jobs
                </h3>

                {/* input for the email */}
                <div className="errors">
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <input
                    type="email"
                    className="custom-input"
                    placeholder="Enter your email"
                    {...register("email", {
                        required: { value: true, message: "email required" },
                    })}
                />
                <div className="errors">
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                {/* input for the password */}
                <input
                    type="password"
                    className="custom-input"
                    placeholder="Enter Password"
                    {...register("password", {
                        required: { value: true, message: "*Password is required." },
                        minLength: {
                            value: 3,
                            message: "*Password must be at least 6 characters.",
                        },
                    })}
                />
                <button type="submit" className="custom-btn">LOGIN</button>
            </form>
        </div>
    )
}
export default LoginPage
export interface IData {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: number;
    status: string;
}