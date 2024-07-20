import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const AuthLayout = ({
    children, authentication = true
}) => {
    console.log("hello")
   const [loading, setLoading] = useState(true)
   const navigate = useNavigate()
   const authStatus = useSelector((state)=> state.userAuth.status)
   useEffect(()=>{
            if(authentication && authStatus !== authentication){
                navigate("/login")
            }
            else if(!authentication && authStatus !== authentication){
                navigate("/")
            }
            setLoading(false)
   }, [authStatus, navigate, authentication])

    return loading ? <h1>loading...</h1> : <>{children}</>
}
export default AuthLayout
