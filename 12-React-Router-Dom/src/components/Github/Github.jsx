import React, { useEffect } from 'react'
// import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

  // const [data, setData] = useState(null)
  // useEffect(() => {
  //   fetch('https://api.github.com/users/sainidk49')
  //     .then(res => res.json())
  //     .then(res => {
  //       setData(res)
  //       console.log(data)
  //     })
  // }, [])

  const data = useLoaderData()
  return (
    <>
      <div className="h-screen bg-slate-700 flex flex-col text-center justify-center">
        <h1 className='text-4xl text-white'>Github : {data ? data.name : "data not found"}</h1>
        <div className='flex justify-center mt-4'>
          <img src={data ? data.avatar_url : ""} alt="" />
        </div>
      </div>
    </>
  )
}
export default Github

export const GitInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/sainidk49');
  return res.json()
}