import { useState } from "react";
import { FieldError, useForm } from "react-hook-form";

function LoginPage() {
    const [formData, setFormData] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const formSubmit = (data) => {
        console.log("Data Received", data);
        const newEmployee = { ...data };

        const updatedFormData = [...formData, newEmployee];
        setFormData(updatedFormData);
        localStorage.setItem("employees", JSON.stringify(updatedFormData));
        reset();
    };
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(formSubmit)} className="custom-form">
                <h3>
                    Login for PickUp-Jobs
                </h3>
                {/* input and error for first name  */}
                <div className="errors">
                    {errors.firstname && (
                        <span>{(errors.firstname as FieldError).message}</span>
                    )}
                </div>
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
                            value: 6,
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