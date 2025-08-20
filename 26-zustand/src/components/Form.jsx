import React, { useState } from 'react'
import userStore from "../zustand/store"
const Form = () => {

    const setUser = userStore(state => state.setUser)

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        for (const key in form) {
            const element = form[key];
            if (!element) {
                alert(`Please file the ${key}`)
                return
            }
        }
        setUser(form)
        setForm({
            name: '',
            email: '',
            phone: ''
        })
    }

    return (
        <>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 mb-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />
                <button
                    style={{ backgroundColor: "blue" }}
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add User
                </button>
            </form>
        </>
    )
}

export default Form