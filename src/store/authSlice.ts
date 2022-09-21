import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../API/index";

type User = {
  id: string;
  name: string;
  email: string;
};

interface SignupRes {
  token: string;
  user: User;
}

type LoginRes = SignupRes;

type Nullable<T> = T | null;

interface State {
  token: Nullable<string>;
  user: Nullable<User>;
  loading: boolean;
  status: Nullable<string>;
}
const initialState: State = {
  token: null,
  user: null,
  loading: false,
  status: null,
};

export const signUpThunk = createAsyncThunk("signup/signUpThunk", () => {
  return axios
    .post(`${baseUrl}/signup`)
    .then((res) => {
      console.log(res.data);

      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

export const loginThunk = createAsyncThunk<
  {
    token: string;
    user: User;
  },
  {
    email: string;
    password: string;
  },
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "auth/login",

  async ({ email, password }, thunkApi) => {
    try {
      const {
        data: { token, user },
      } = await axios.post<LoginRes>(`${baseUrl}/login`, {
        email,
        password,
      });
      return {
        token,
        user,
      };
    } catch (e: any) {
      console.log(e);
      if (e?.response?.data?.msg) {
        return thunkApi.rejectWithValue({
          msg: e.response.data.msg,
        });
      } else {
        return thunkApi.rejectWithValue({
          msg: "something went wrong",
        });
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(signUpThunk.pending, (state, action) => {
      state.loading = true;
      state.status = "Loading ...";
    });
    builder.addCase(signUpThunk.fulfilled, (state, action) => {
      const { id, name, email } = action.payload;
      state.user = { id, name, email };
    });
    builder.addCase(signUpThunk.rejected, (state, action) => {
      state.loading = false;
      state.status = "Failed Loading!";
    });
  },
});

export default authSlice;
