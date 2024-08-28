import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addUserStart, updateUserStart } from "../redux/action/userAction";
import { useNavigate, useLocation, useParams } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [isData, setIsData] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  let { message, status, users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const { userId } = useParams("")

  if (location.state) {
    status = location.state?.status
  }

  useEffect(() => {
    console.log(status)
    if (status === false) {
      setError(message);
    }
    else if (status === true) {
      setName("");
      setEmail("");
      setMobile("");
      setError("");
      navigate("/list");
    }
    location.state = null
  }, [isData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      dispatch(updateUserStart({ userId, name, email, mobile }));
    }
    else {
      dispatch(addUserStart({ name, email, mobile }));
    }
    setTimeout(() => {
      setIsData(isData => !isData)
    }, 100);
  };

  useEffect(() => {
    if (userId) {
      users && users.map((user, index) => {
        if (userId === user.id) {
          setName(user.name);
          setEmail(user.email);
          setMobile(user.mobile);
          setIsUpdate(true)
        }
      })
    }
  }, [userId])

  return (
    <div className="container">
      <div className="columns">
        <button onClick={()=> navigate("/list")}>Go list</button>
        <div className="column is-half">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Mobile</label>
              <div className="control">
                <input
                  className="input"
                  type="tel"
                  placeholder="Your Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-primary">
                  {isUpdate ? "Update" : "Submit"}
                </button>
                {error && <p className="help is-danger">{error}</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
