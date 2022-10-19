import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser : null,
        isFetching:false,
        error:false
    },
    reducers: {
        loginStart:(state)=>{
            state.isFetching=true;
        },
        loginSucces:(state,action)=>{
            state.isFetching=false;
            state.currentUser=action.payload;
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        getUsersStart: (state) => {
            state.isFetching = true;
            state.error = false;
          },
          getUsersSuccess: (state, action) => {
            state.isFetching = false;
            state.users = action.payload;
          },
          getUsersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
          },
    },
});


export const { getUsersStart,getUsersSuccess,getUsersFailure,loginStart, loginSucces, loginFailure } = userSlice.actions;
export default userSlice.reducer;