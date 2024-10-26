import { useState } from "react";
import { FieldError, useForm } from "react-hook-form";
import './Signup.css'

function Signup() {
    const [formData, setFormData] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    
    const formSubmit = (data) => {
     const updatedFormData = [...formData, data];
        setFormData(updatedFormData);

        reset();
    };
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(formSubmit)} className="custom-form">
                <h3>
                    SignUp for PickUp-Jobs
                </h3>
                {/* input and error for first name  */}
                <div className="errors">
                    {errors.firstname && (
                        <span>{(errors.firstname as FieldError).message}</span>
                    )}
                </div>
                <input
                    type="text"
                    className="custom-input"
                    placeholder="Enter First Name"
                    {...register("firstname", {
                        required: { value: true, message: "*First name is required." },
                        minLength: { value: 4, message: "*First name must contain a minimum of 4 letters." },
                        maxLength: { value: 10, message: "*First name must contain a maximum of 10 letters." },
                    })}
                />
                {/* input and error message for the last name */}
                <div className="errors">
                    {errors.lastname && (
                        <span>{(errors.lastname as FieldError).message}</span>
                    )}
                </div>
                <input
                    type="text"
                    className="custom-input"
                    placeholder="Enter Last Name"
                    {...register("lastname", {
                        required: { value: true, message: "*Last name is required." },
                        minLength: {
                            value: 2,
                            message: "*Last name must contain a minimum of 2 letters.",
                        },
                        maxLength: {
                            value: 6,
                            message: "*last name must contain a maximum of 6 letters.",
                        },
                    })}
                />

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
                    {errors.phone && <span>{errors.phone.message}</span>}
                </div>

                <input
                    type="tel"
                    className="custom-input"
                    placeholder="Enter Phone Number"
                    {...register("phone", {
                        required: { value: true, message: "*Phone number is required." },
                    })}
                />

                <div className="errors">
                    {errors.password && <p>{errors.password.message}</p>}
                    </div>

                <input
                    type="password"
                    className="custom-input"
                    placeholder="Enter Password"
                    {...register("password", {
                        required: { value: true, message: "*Password is required." },
                        minLength: {
                            value: 6,
                            message: "*Password must be at least 6 characters.",
                        },
                    })}
                />

                



                <button type="submit" className="custom-btn">SIGN-UP</button>
            </form>
        </div>
    )
}
export default Signup


