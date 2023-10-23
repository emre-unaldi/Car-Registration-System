import { configureStore } from "@reduxjs/toolkit"
import {userSlice} from "../redux/userSlice.ts"
import {carSlice} from "../redux/carSlice.ts";

export const store = configureStore({
    reducer: {
        userReducer: userSlice.reducer,
        carReducer: carSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
