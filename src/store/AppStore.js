import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";

const AppStore = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
    }
})

export default AppStore;