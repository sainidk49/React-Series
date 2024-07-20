import React, { useState } from 'react'
import authService from '../../appwrite-services/userAuth'
import { login as userLoing } from '../../redux/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../input/Input'
import { useDispatch } from "react-redux"
import { useForm} from "react-hook-form"

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const { register, handleSubmit } = useForm();

    const createUser = async (data) => {
        setError("");
        try {
            const user = await authService.createAccountApi(data);
            if (user) {
                const userData = await authService.getCurrentUserApi()
                if (userData) {
                    dispatch(userLoing(userData))
                    navigate("/")
                }
            }
        } catch (err) {
            setError(err)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(createUser)}>
                <div>
                    <Input
                        label="Name: "
                        type = "text"
                        placeholder= "enter the name"
                        {...register("name", {
                            required: true,
                        })}
                    />
                </div>
                <div>
                    <Input
                        label="Email: "
                        type="email"
                        placeholder="enter the email"
                        {...register("email", {
                                required: true,
                                validate: {
                                    matchPartern: (value)=> /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "email must be valid"
                                }
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
                    <button type="submit"></button>
                </div>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}

export default Signup