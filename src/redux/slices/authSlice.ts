import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "@/services/authService";
import Cookies from "js-cookie";

interface AuthState {
  user: any;
  token: string | null;
  loading: boolean;
  error: string | null;
}

// Async thunk for login
export const loginUser = createAsyncThunk("auth/login", async (credentials: { email: string; password: string }, { rejectWithValue }) =>  {
    try {
      console.log(credentials, "credentials");
      return await authService.login(credentials);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for register
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData: { name: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      console.log(userData, "userData");
      return await authService.register(userData);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for logout
export const logoutUser = createAsyncThunk("auth/logout", async () => {
  authService.logout();
});

const authSlice = createSlice({
  name: "auth",
  initialState :{
    user: null,
    token: Cookies.get("token") || null,
    loading: false,
    error: null,
  } as AuthState,
  reducers: {
    handleSetUser: (state, action) => {
      state.user = action.payload;
    },
    handleSetToken: (state, action) => {
      state.token = action.payload;
      Cookies.set("token", action.payload);
    },
    handleLogout: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action, "actionaction");
        state.user = action.payload.response.data.user; 
        state.token = action.payload.response.data.token; 
        Cookies.set("token", action.payload.response.data.token);
    })
    
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action, "reg actionaction");

        state.loading = false;
        state.user = action.payload.response.data.user;
        state.token = action.payload.response.data.token;
        // Cookies.set("token", action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        Cookies.remove("token");
      });
  },
  });

export default authSlice.reducer;
