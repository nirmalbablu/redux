import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "axios";

export const fetchUsers = createAsyncThunk("user/fetchUser", () => {
  return Axios.get("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.data.map((user) => user.id)
  );
});

const initialState = {
  loading: false,
  user: [],
  error: "",
};

const userslice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});


export default userslice.reducer;