import { createSlice } from "@reduxjs/toolkit";

const loginreducerSlice = createSlice({
    name: "loginOperation",
    initialState : {
        data: {
            username: "",
            email: "",
            password : "",
        },
    },
    reducers : {
        loginUser : (state,action) =>{
            state.data = action.payload;
        },
        logoutUser : (state,action) =>{
            state.data = {userName: "", email:"", password: ""};
        },
    },
});

export const {loginUser,logoutUser} = loginreducerSlice.actions;
export default loginreducerSlice.reducer