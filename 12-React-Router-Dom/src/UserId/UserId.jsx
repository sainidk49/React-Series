import React from 'react'
import { useParams } from 'react-router-dom'
const UserId = () => {
    const { user } = useParams()
    const { email } = useParams()
    return (
        <>
            <div className="h-screen bg-slate-700 flex flex-col text-center justify-center text-white text-2xl">
                <div>UserId {user}</div>
                <br />
                <div>UserEmail {email}</div>
            </div>

        </>

    )
}

export default UserId