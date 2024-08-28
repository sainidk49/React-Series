import {
    ////////// fetch user ///////
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,

    ////////// add user ///////
    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR,

    ////////// update user ///////
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,

     ////////// delete user ///////
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR,
} from "../constant/userConstant"


///////////// fetch user actions ////////////////
export const fetchUsersStart = (data) => ({
    type: FETCH_USER_START,
    payload: data
})

export const fetchUsersSuccess = (data) => ({
    type: FETCH_USER_SUCCESS,
    payload: data,
})

export const fetchUsersError = (error) => ({
    type: FETCH_USER_ERROR,
    payload: error
})


///////////// add user actions ////////////////
export const addUserStart = (data) => ({
    type: ADD_USER_START,
    payload: data
})

export const addUserSuccess = (data) => ({
    type: ADD_USER_SUCCESS,
    payload: data,
})

export const addUserError = (error) => ({
    type: ADD_USER_ERROR,
    payload: error
})


/////////// update user actions ///////////////
export const updateUserStart = (data)=>({
    type: UPDATE_USER_START,
    payload: data
}) 

export const updateUserSuccess= (data)=>({
    type : UPDATE_USER_SUCCESS,
    payload: data
})

export const updateUserError = (error) =>({
    type: UPDATE_USER_ERROR,
    payload: error
})

//////////// delete user actions /////////////
export const deleteUserStart = (id) =>({
    type: DELETE_USER_START,
    payload: id
})

export const deleteUserSuccess = (data) =>({
    type: DELETE_USER_SUCCESS,
    payload: data,
})

export const deleteUserError = (error) =>({
    type: DELETE_USER_ERROR,
    payload: error
})