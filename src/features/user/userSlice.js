import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    users: [],
    user: null,
    loading: true,
    error: null,
    updateUserStatus: '',
    newUserStatus: '',
    deleteUserStatus:'',
    getuser: 'idel',
    login:''
  };



 export const registerUser = createAsyncThunk(
    "user/register",
    async (user,thunkAPI) =>{
     // 
      const { email,  password } = user;
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({ email, password });
      console.log(body)
        try {
        const res = await axios.post('http://localhost:8000/users/register', body, config);
  
        return res.data;
        
        
        } catch (error) {
          
          const message = (error.response && error.response.data && error.response.data.errors) || error.message || error.toString();
          
               
             return thunkAPI.rejectWithValue(message)
            
        }
    }
)
 export const logInUser = createAsyncThunk(
    "user/login",
    async (user,thunkAPI) =>{
     // 
      const { email,  password } = user;
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({ email, password });
    //   console.log(body)
        try {
        const res = await axios.post('http://localhost:8000/users/login', body, config);
  
        return res.data;
        
        
        } catch (error) {
          
          const message = (error.response && error.response.data && error.response.data.errors) || error.message || error.toString();
          
               
             return thunkAPI.rejectWithValue(message)
            
        }
    }
)


  
  export const userSlice = createSlice({
      name: 'user',
      initialState,
      reducers: {
         reset: (state) => {
          // state.users = [];
          state.updateUserStatus = ''
          state.newUserStatus = ''
          state.deleteUserStatus = ''
    },
    },
    extraReducers: (builder) => {
      builder.addCase(registerUser.pending, (state) => {
          state.loading = true
          state.newUserStatus = 'pending'
        }).addCase(registerUser.fulfilled, (state, action) => {
          state.loading = false
          state.users = [...state.users, action.payload]
          state.newUserStatus = 'success' 
        }).addCase(registerUser.rejected, (state, action) => {
            state.loading = false
            state.newUserStatus = 'failed'
          state.error = action.error
        }).addCase(logInUser.pending, (state) => {
            state.loading = true
            state.login = 'pending'
        }).addCase(logInUser.fulfilled, (state) => {
            state.loading = false
            state.login = 'success'
        }).addCase(logInUser.rejected, (state) => {
            state.loading = false
            state.login = 'failed'
        })
      }

  });

  export const { reset } = userSlice.actions 

  export default userSlice.reducer