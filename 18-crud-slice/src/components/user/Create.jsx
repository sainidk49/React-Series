// src/components/CreateItem.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUserStart, updateUserStart } from '../../redux/crudSlice/crudSlice';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const Create = () => {
  const { userId } = useParams("")
  const [isData, setIsData] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isUpdate, setIsUpdate] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  let { status, message, users } = useSelector((state) => state.usersRed);
  const location = useLocation()
  if(location.state){
    status = location.state.status
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      dispatch(updateUserStart({ userId, name, email, mobile }));
    }
    else {
      dispatch(createUserStart({ name, email, mobile }));
    }
    setTimeout(() => {
      setIsData(isData => !isData)
    }, 100);
  };

  useEffect(() => {
    console.log("status :: " + status)
    if (status === true) {
      setName('');
      setEmail('');
      setMobile('');
      navigate(`/user-list/`)
    }
    else if (status === false) {
      alert(message)
      console.log(status, message)
    }
    location.state = null
  }, [isData])

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
    <>
      <button className="update" onClick={() => navigate(`../user-list`)}>Users List</button>
      <br /> <br />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {userId && users.length > 0 &&
            <input type="text" value={userId} readOnly />}
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter the name" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter the email" />
          <input type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="enter the mobile" />
          <button type="submit">{isUpdate ? "Update" : "Create"}</button>
        </form>
      </div>
    </>

  );
};

export default Create;
