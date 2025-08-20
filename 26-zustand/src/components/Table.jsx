import React from 'react'
import userStore from '../zustand/store'
const Table = () => {

    const {users, clearUser} = userStore(state => state);

    return (
        <>
            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index) => (
                        <tr key={index} className="text-center">
                            <td className="border p-2">{user.name}</td>
                            <td className="border p-2">{user.email}</td>
                            <td className="border p-2">{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                onClick={()=> clearUser()}
                style={{ backgroundColor: "red" }}
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-5"
            >
                Clear
            </button>
        </>
    )
}

export default Table