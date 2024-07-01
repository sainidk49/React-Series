import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }
    return (
        <>
            <h2>Login</h2>
            <input type="text" className='text-slate-800' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
            <input type="text" className='text-slate-800'  value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <button onClick={handleSubmit}>submit</button>
        </>
    )
}

export default Login