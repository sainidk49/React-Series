import {
    ////////// fetch user contant///////
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,

    ////////// add user contant///////
    ADD_USER_START,
    ADD_USER_ERROR,
    ADD_USER_SUCCESS,

    ////////// update user contant///////
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,

    ////////// delete user contant///////
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR
} from "../constant/userConstant";

const initialState = {
    users: [],
    loading: false,
    status: null,
    message: ""
};

const userReducerFn = (state = initialState, action) => {
    switch (action.type) {
        /////////////// Loading handling ////////////////
        case FETCH_USER_START:
        case ADD_USER_START:
        case UPDATE_USER_START:
        case DELETE_USER_START:
            return {
                ...state,
                loading: true,
            }

        ////// fetch user ////////
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                status: action.payload?.status,
                message: action.payload?.message,
                users: action.payload?.user || state.users,
            }

        ////// add user ////////
        case ADD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                status: action.payload?.status,
                message: action.payload?.message,
                users: action.payload?.user ? [...state.users, action.payload.user] : state.users,
            }

        ////// update user ////////
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                status: true,
                message: "Update succesfull!",
                users: state.users.map((user) =>
                    user.id === action.payload?.id ? action.payload : user
                ),
            }

        ////// delete user ////////
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                status: action.payload?.status,
                message: action.payload?.message,
                users: state.users.filter((user) => user.id !== action.payload?.id)
            }

        /////////////// Error handling ////////////////
        case FETCH_USER_ERROR:
        case ADD_USER_ERROR:
        case UPDATE_USER_ERROR:
        case DELETE_USER_ERROR:
            return {
                ...state,
                loading: false,
                status: action.payload?.status,
                message: action.payload?.message,
            }

        default:
            return state;
    }
}

export default userReducerFn;
