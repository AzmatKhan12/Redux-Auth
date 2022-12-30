import { createSlice } from "@reduxjs/toolkit";



const init = {isAuthenticated : false};

const AuthSlice = createSlice({
  name: "Authentication",
  initialState: init,
  reducers:{
       login(state){
          state.isAuthenticated= true ;
       },
       logout(state){
         state.isAuthenticated= false;
       }
   }
});

export const AuthAction = AuthSlice.actions;
export default AuthSlice;