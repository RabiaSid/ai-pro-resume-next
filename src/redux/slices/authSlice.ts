import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "@/services/authService";
import Cookies from "js-cookie";

interface AuthState {
  user: any;
  token: string | null;
  loading: boolean;
  error: string | null;
  errorsList: Record<string, string[]>; 
  statusCode: null;
}

// Async thunk for login
export const loginUser = createAsyncThunk("auth/login", async (credentials: { email: string; password: string }, { rejectWithValue }) =>  {
    try {
      console.log(credentials, "credentials");
      const response = await authService.login(credentials);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for register
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData: { name: string; email: string; password: string, confirm_password : string, country_id : number, contact : number, referred_by: string  }, { rejectWithValue }) => {
    try {
      const response = await authService.register(userData);
      return response;

    } catch (error: any) {
      console.log(error, "respnse in error");
      return rejectWithValue(error.response?.data || "Registration failed");
    }
  }
);

// Async thunk for logout
export const logoutUser = createAsyncThunk("auth/logout", async () => {
  authService.logout();
});

const authSlice = createSlice({
  name: "auth",
  initialState : {
  user: null,
  token: Cookies.get("userToken") || null,
  loading: false,
  errorsList: {},
  statusCode: null,
    } as AuthState,
  reducers: {
    handleSetUser: (state, action) => {
      state.user = action.payload;
    },
    handleSetToken: (state, action) => {
      state.token = action.payload;
      Cookies.set("userToken", action.payload);
    },
    handleLogout: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("userToken");
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
        console.log(action, "fulfilled login actionaction");
        state.user = action?.payload?.response?.data?.user; 
        state.token = action.payload.response.data.token; 
         Cookies.set("userToken", action.payload.response.data.token);
    })   
      .addCase(loginUser.rejected, (state, action) => {
        console.log(action, "rejected login actionaction");
        state.loading = false;
        // state.error = action.payload as string;
        // state.errorsList = action.payload as string;
        state.error = action.error?.message  ? "Invalid Credentials" : "";
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.errorsList = {};
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action, "fulfilled actionaction");
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        const payload = action.payload as any;
        if (payload?.statusCode === 400) {
          state.errorsList = payload.errors || {};
          state.error = "Validation failed";
        } else {
          state.error = payload?.message || "Registration failed";
        }
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        Cookies.remove("token");
      });
  },
  });

export default authSlice.reducer;
