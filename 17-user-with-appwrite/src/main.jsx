import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./redux/store.js";
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import AuthLayout from './components/user/AuthLayout.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import AllPosts from "./pages/AllPosts.jsx"
import AddPost from "./pages/AddPost.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/home",
        element: <Home />
      },
      {
        path:"/login",
        element: (
          <AuthLayout authentication="false">
            <Signin />
          </AuthLayout>
        )
      },
      {
        path:"/signup",
        element: (
          <AuthLayout authentication="false">
            <Signup />
          </AuthLayout>
        )
      },
      {
        path:"/all-posts",
        element: (
          <AuthLayout authentication>
            <AllPosts />
          </AuthLayout>
        )
      },
      {
        path:"/add-post",
        element: (
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout>
        )
      },
      
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>    
  </React.StrictMode>,
)
