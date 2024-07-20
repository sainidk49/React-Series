import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import authService from "./appwrite-services/userAuth"
import { login, logout } from "./redux/authSlice"
import { Footer, Header } from './components/index';
function App() {
  const [loading, setLoading] = useState("true");
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUserApi()
      .then((userData) => {
        console.log(userData)
        if (userData) {
          dispatch(login(userData))
        }
        else {
          dispatch(logout)
        }
      })
      .catch((err) => {
        console.log("Error :: " + err)
      })
      .finally(() => setLoading(false))

  }, [])

  /////// redering /////////
  return loading ? (<h1>Loding....</h1>) : (
    <div>
      <Header />
      <h1>User data</h1>
      <main>
        {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
