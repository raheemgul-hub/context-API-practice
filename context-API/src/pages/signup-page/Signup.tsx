
import { FieldError, useForm } from "react-hook-form";
import './Signup.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

    const { register, handleSubmit, formState: { errors }, reset, } = useForm();
    const Base_URL = 'https://pickup-jobs-api.codegenio.com/api/';
    const RelativePath = 'public/customer-register'
    const navigate = useNavigate();

    const formSubmit = (data:any) => {
        axios.post(Base_URL + RelativePath, {
            password: data.password,
            confirmPassword: data.confirmpassword, //String Required
            email: data.email, //Email String Required
            firstName: data.firstname, //String Required
            lastName: data.lastname, //String Required
            phoneNumber: data.phone //String Required

        }, {

        })
            .then((response) => {
                console.log(response)
                if (response.data.success === true) {
                    alert(response.data.message)

                    reset();
                    navigate("/signup");
                } else {
                    alert(response.data.message)

                }
            })

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
                    {errors.email && (
                        <span>{(errors.email as FieldError).message}</span>
                    )}
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
                    {errors.phone && (
                        <span>{(errors.phone as FieldError).message}</span>
                    )}
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
                    {errors.password && (
                        <span>{(errors.password as FieldError).message}</span>
                    )}
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
                <div className="errors">
                    {errors.confirmpassword && (
                        <span>{(errors.confirmpassword as FieldError).message}</span>
                    )}
                </div>

                <input
                    type="password"
                    className="custom-input"
                    placeholder="Confirm Password"
                    {...register("confirmpassword", {
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


