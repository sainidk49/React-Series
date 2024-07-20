import React from 'react'
import Logout from '../user/Logout'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'

const Header = () => {
  const authStatus = useSelector((state) => state.userAuth.status)
  const navigate = useNavigate()
  const navItem = [
    {
      name: 'Home',
      slug: '/home',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Post',
      slug: '/all-post',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ]
  return (
    <div>
      <nav>
        <ul>
          {
            navItem.map((item) => {
              if (item.active) {
                return <li key={item.name}>
                  <button onClick={() => navigate(item.slug)}>{item.name}</button>
                </li>
              }
            })
          }
          {authStatus &&
            <li><Logout /></li>
          }
        </ul>
      </nav>


    </div>
  )
}

export default Header