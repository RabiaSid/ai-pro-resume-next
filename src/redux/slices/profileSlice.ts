import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from '@/services/backendService';

type profileState = {
    profile: any;
    loading: boolean;
    technical_skills: [];
    soft_skills: [];
}
// Async thunk for login
export const userProfile = createAsyncThunk("profile/userProfile", async (_, { rejectWithValue }) => {
    try {
        const response = await API.get("user/profile");
        return response;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

// Async thunk for Technical Skills
export const userTechnicalSkills = createAsyncThunk("profile/userTechnicalSkills", async (_, { rejectWithValue }) => {
    try {
        const response = await API.get("user/profile/technical-skills");
        return response;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

// Async thunk for Soft Skills
export const userSoftSkills = createAsyncThunk("profile/userSoftSkills", async (_, { rejectWithValue }) => {
    try {
        const response = await API.get("user/profile/soft-skills");
        return response;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profile: null,
        loading: false,
        technical_skills : [],
        soft_skills: []
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
            .addCase(userTechnicalSkills.pending, (state) => {
                state.loading = true;
            })
            .addCase(userTechnicalSkills.fulfilled, (state, action) => {
                console.log(action, "actionactionaction");
                
                state.loading = false;
                state.technical_skills = action?.payload?.response?.data;
            })
            .addCase(userTechnicalSkills.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(userSoftSkills.pending, (state) => {
                state.loading = true;
            })
            .addCase(userSoftSkills.fulfilled, (state, action) => {
                console.log(action, "actionactionaction");
                
                state.loading = false;
                state.soft_skills = action?.payload?.response?.data;
            })
            .addCase(userSoftSkills.rejected, (state, action) => {
                state.loading = false;
            })
    },
});

// export const { handleSetUser, handleSetToken, handleLogout, clearSessionAndStorages } = profileSlice.actions;
export default profileSlice.reducer;
