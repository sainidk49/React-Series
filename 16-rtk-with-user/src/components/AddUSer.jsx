import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { addUser } from "../redux/slice/userSlice"
const AddUSer = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState(null)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser({name, age}))
        setName("")
        setAge("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-4/12 bg-transparent border box-border text-white border-white rounded-lg'/>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className='w-4/12 bg-transparent border box-border text-white border-white rounded-lg mx-5'/>
                <button type='submit' className='bg-orange-800 text-white px-14 uppercase rounded-lg'>addUser</button>
            </form>
        </div>
    )
}

export default AddUSer