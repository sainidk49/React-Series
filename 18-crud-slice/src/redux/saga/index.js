import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios"
import {
    fetchUserStart,
    fetchUserSuccess,
    fetchUserFailure,
    createUserStart,
    createUserSuccess,
    createUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
} from '../crudSlice/crudSlice';

const API_URL = String(import.meta.env.VITE_API_URL)

function* fetchUser() {
    try {
        const response = yield call(axios.post, `${API_URL}/getUsers`)
        if (response.data.status == true) {
            yield put(fetchUserSuccess(response.data))
        }
        else {
            yield put(fetchUserFailure(response.data))
        }
    } catch (error) {
        yield put(fetchUserFailure({ status: false, message: error.message }))
    }
}

function* createUser(action) {
    try {
        const formData = new FormData();
        formData.append('name', action.payload.name);
        formData.append('email', action.payload.email);
        formData.append('mobile', action.payload.mobile);
        const response = yield call(axios.post, `${API_URL}/setUser`, formData)
        if (response.data.status == true) {
            yield put(createUserSuccess(response.data))
        }
        else {
            yield put(createUserFailure(response.data))
        }
    } catch (error) {
        yield put(createUserFailure({ status: false, message: error.message }))
    }
}

function* updateUser(action) {
    try {
        const formData = new FormData();
        formData.append('id', action.payload.userId);
        formData.append('name', action.payload.name);
        formData.append('email', action.payload.email);
        formData.append('mobile', action.payload.mobile);
        const response = yield call(axios.post, `${API_URL}/updateUser`, formData);
        if (response.data.status == true) {
            yield put(updateUserSuccess(response.data))
        }
        else {
            yield put(updateUserFailure(response.data))
        }

    } catch (error) {
        yield put(updateUserFailure({ status: false, message: error.message }))
    }
}

function* deleteUser(action) {
    try {
        const formData = new FormData();
        formData.append('id', action.payload);
        const response = yield call(axios.post, `${API_URL}/deleteUser`, formData)
        if (response.data.status == true) {
            yield put(deleteUserSuccess(action.payload))
        }
        else {
            yield put(deleteUserFailure(response.data))
        }
    } catch (error) {
        yield put(deleteUserFailure({ status: false, message: error.message }))
    }
}

function* watchFetchUser() {
    console.log(fetchUserStart.type)
    yield takeLatest(fetchUserStart.type, fetchUser)
}

function* watchCreateUser() {
    yield takeLatest(createUserStart.type, createUser)
}

function* watchUpdateUser() {
    yield takeLatest(updateUserStart.type, updateUser)
}

function* watchDeleteUser() {
    yield takeLatest(deleteUserStart.type, deleteUser)
}

export default function* rootSaga() {
    yield all([
        watchFetchUser(),
        watchCreateUser(),
        watchUpdateUser(),
        watchDeleteUser()
    ])
}