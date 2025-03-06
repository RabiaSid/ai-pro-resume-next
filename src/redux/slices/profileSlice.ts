import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from '@/services/backendService';

type profileState = {
    profile: any;
    loading: boolean;
    error: string | null;
    errorsList: Record<string, string[]>;
    statusCode: null;
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
        loading: false,
        errorsList: {},
        statusCode: null,
    } as profileState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(userProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.profile = action?.payload?.response?.data;
            })
            .addCase(userProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error?.message ? "Invalid Credentials" : "";
            })

    },
});

export default profileSlice.reducer;
