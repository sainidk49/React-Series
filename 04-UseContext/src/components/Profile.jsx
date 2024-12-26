import React, { useContext } from 'react'
import { UserContext } from '../context/userContextProvider'

const Profile = () => {
    const { user } = useContext(UserContext);
    if (!user) return 
    

    return <div className='text-sm text-gray-600'>Welcome <strong>{user.username}</strong> and your pass is <strong>{user.password}</strong></div>
}

export default Profile