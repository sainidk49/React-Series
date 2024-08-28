import {
    ADD_USER_START,
    FETCH_USER_START,
    DELETE_USER_START,
    UPDATE_USER_START
} from "../constant/userConstant";
import {
    fetchUsersSuccess,
    fetchUsersError,

    addUserSuccess,
    addUserError,

    updateUserSuccess,
    updateUserError,

    deleteUserSuccess,
    deleteUserError
} from "../action/userAction";
import { put, takeLatest } from "redux-saga/effects";
import { fetchUsersApi, addUserApi, updateUserApi, deleteUserApi } from "../service/userApi";

function* fetchUsersSaga() {
    try {
        const data = yield fetchUsersApi();
        yield put(fetchUsersSuccess(data));
    } catch (error) {
        yield put(fetchUsersError(error));
    }
}

function* addUserSaga({ payload }) {
    try {
        const data = yield addUserApi(payload);
        yield put(addUserSuccess(data));
    } catch (error) {
        yield put(addUserError(error));
    }
}

function* updateUserSaga({ payload }) {
    try {
        console.log("Update user saga triggered with payload:", payload);
        const data = yield updateUserApi(payload);
        if (data) {
            const {userId, ...rest} = payload;
            const userData = {
                id: userId,
                ...rest
            }
            yield put(updateUserSuccess(userData));
        }
    } catch (error) {
        console.error("Update user saga error:", error);
        yield put(updateUserError(error));
    }
}

function* deleteUserSaga({ payload }) {
    try {
        const data = yield deleteUserApi(payload);
        yield put(deleteUserSuccess(data));
    } catch (error) {
        yield put(deleteUserError(error));
    }
}

export function* rootUserSaga() {
    yield takeLatest(FETCH_USER_START, fetchUsersSaga);
    yield takeLatest(ADD_USER_START, addUserSaga);
    yield takeLatest(DELETE_USER_START, deleteUserSaga);
    yield takeLatest(UPDATE_USER_START, updateUserSaga);
}
