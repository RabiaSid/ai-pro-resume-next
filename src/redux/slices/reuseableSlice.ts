import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { OldAPI } from '@/services/oldService';

type countriesState = {
    countries: any;
    loading: boolean;
}
// Async thunk for login
export const UseCountries = createAsyncThunk("countries/UseCountries", async (_, { rejectWithValue }) => {
    try {
        const response = await OldAPI.get("/show-countries");
        return response;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
}
);


const profileSlice = createSlice({
    name: "countries",
    initialState: {
        countries: null,
        loading: false
    } as countriesState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(UseCountries.pending, (state) => {
                state.loading = true;
            })
            .addCase(UseCountries.fulfilled, (state, action) => {
                console.log(action, "actionaction");
                
                state.loading = false;
                // state.countries = action?.payload?.response?.data;
            })
            .addCase(UseCountries.rejected, (state, action) => {
                state.loading = false;
            })

    },
});

export default profileSlice.reducer;
