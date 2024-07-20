import React from 'react'
import authService from '../../appwrite-services/userAuth'
import { useDispatch } from "react-redux"
import { logout } from '../../redux/authSlice'

const Logout = () => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logoutApi()
            .then(() => {
                dispatch(logout())
            })
    }
    return (
        <div>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default Logout