import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext);
    if (!user) return <div>Please enter the name</div>

    return <div>Welcome {user.username} and your pass is {user.password}</div>
}

export default Profile