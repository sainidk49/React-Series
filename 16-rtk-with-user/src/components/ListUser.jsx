import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { deleteUser } from "../redux/slice/userSlice"
const ListUser = () => {
    const userList = useSelector((state) => state.users)
    const dispatch = useDispatch()

    return (
        <>
            <ul className=''>
                {userList.map((user) => (
                    <li className='w-full bg-gray-500 my-2 flex justify-between px-4' key={user.id}>
                        <span>{user.name}</span>
                        <span>{user.age}</span>
                        <button className='bg-black text-white' onClick={() => dispatch(deleteUser(user.id))}>delete</button>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default ListUser