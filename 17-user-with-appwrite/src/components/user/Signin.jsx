import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import authService from "../../appwrite-services/userAuth"
import { useDispatch } from "react-redux"
import { login as userLogin } from "../../redux/authSlice"
import Input from '../input/Input'
import { useForm } from "react-hook-form"

const Signin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    const login = async (data) => {
        setError("")
        try {
            const session = await authService.loginApi(data);
            if (session) {
                const userData = authService.getCurrentUserApi()
                if (userData) {
                    dispatch(userLogin(userData))
                    navigate("/")
                }
            }
        } catch (err) {
            setError(err)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(login)}>
                <div>
                    <Input
                        label="Email: "
                        type="email"
                        placeholder="enter the email"
                        {...register("email", {
                                required: true,
                                // validate: {
                                //     matchPartern: (value)=> /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "email must be valid"
                                // }
                            })
                        }
                    />
                </div>
                <div>
                    <Input
                        label="Password: "
                        type="password"
                        placeholder="enter the password"
                        {...register("password", {
                                required: true,
                            })
                        }
                    />
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
            <p>
                go for signup
                <Link to="signup">signup</Link>
            </p>
            {error && <p>{error}</p>}


        </div>
    )
}

export default Signin