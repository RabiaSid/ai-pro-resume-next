import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from '@/services/backendService';

type profileState = {
    profile: any;
    loading: boolean;
}
// Async thunk for login
export const userProfile = createAsyncThunk("profile/userProfile", async (_, { rejectWithValue }) => {
    try {
        const response = await API.get("/profile");
        return response;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
}
);


const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profile: null,
        loading: false
    } as profileState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(userProfile.pending, (state) => {
                state.loading = true;
            })
            .addCase(userProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.profile = action?.payload?.response?.data;
            })
            .addCase(userProfile.rejected, (state, action) => {
                state.loading = false;
            })

    },
});

export default profileSlice.reducer;
