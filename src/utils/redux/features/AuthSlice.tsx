import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface UserProps {
  userName: string;
  token: string;
  email: string;
}

export interface LoginCredentials {
  email?: string;
  password: string;
  phone?: string;
}

export interface UserRootstate {
  dUser: {};
  isLoading: boolean;
}

const initialState: UserRootstate = {
  dUser: {},
  isLoading: false,
};

export const login = createAsyncThunk<UserProps, LoginCredentials>(
  "user/login",
  ({ email, password, phone }) => {
    if (
      (email === "barakat@dipfellows.org" && password === "12345") ||
      (phone === "+234 0812 395 2458" && password === "12345")
    ) {
      const user: UserProps = {
        userName: "Barakat",
        token: "09878-87788--87890000",
        email: "barakat@dipfellows.org",
      };

      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } else {
      throw new Error("Invalid credentials");
    }
  }
);

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state) {
      localStorage.removeItem("user");
      state.dUser = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dUser = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
