import{createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

type Nullable<T> = T | null

interface State  {
    user : Nullable<String>
    token : Nullable<String>
    loading : boolean
}
const initialState : State = {
    user : null ,
    token : null ,
    loading : false
}
interface SignupThunkParams {
    email : string
    password: string
    name : string
}

export const getUser  = createAsyncThunk<
    {
        user :  user ,
        token : string
    },
    SignupThunkParams ,
    {
        rejectValue: { msg: string };
    }
>('user/signup', async ({ name, email, password}) => {
    try {
        const {
            data: {token, user},
        } = await axios.post(`https://pro-commerce1.herokuapp.com/api/v1/signup`,
            {name, email, password});

    })

    console.log({
        token,
        user,
    });

    return {
    token,
        user: {
        name: user.name,

            email: user.email,
            id: user.id,
    },
};
} catch (e: any) {
    console.log(e);
    if (e?.response?.data?.msg) {
        return thunkApi.rejectWithValue({
            msg: e.response.data.msg,
        });
    } else {
        return thunkApi.rejectWithValue({
            msg: 'Something went wrong',
        });
    }
}
});
})

export  const postUser = createSlice({
    name : 'userSignUp' ,
    initialState ,
    reducers : {},
    extraReducers :  (builder) =>{
        builder.addCase(getUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload

        })
        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false
        })
    }
    })

export  default postUser
 