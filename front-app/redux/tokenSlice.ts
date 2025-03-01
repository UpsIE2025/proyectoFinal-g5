import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        accesToken: null,
    },
    reducers: {
        setAccessToken: (state, action) => {
            state.accesToken = action.payload;
        },
        clearAccessToken: (state) => {
            state.accesToken = null;
        }
    }
});

export const { setAccessToken, clearAccessToken } = tokenSlice.actions;
export default tokenSlice.reducer;