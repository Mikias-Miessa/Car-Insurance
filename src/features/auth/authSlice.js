import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    user: null,
    token: typeof window !== 'undefined' ? localStorage.getItem('token'): null,
    isAuthenticated: false,
    isSuccess: false,
    loading: false,
    error: null,
    login: '',
    newUserStatus:''
  };



 export const registerUser = createAsyncThunk(
    "auth/register",
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
  
       if(res.data){

         localStorage.setItem('token', res.data.token);
         
      }
      if (res !== undefined) {
           return res.data
      }
        
        
        } catch (error) {
          
          const message = (error.response && error.response.data && error.response.data.errors) || error.message || error.toString();
          
               
             return thunkAPI.rejectWithValue(message)
            
        }
    }
)
 export const logInUser = createAsyncThunk(
    "auth/login",
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
  
       if(res.data){

        localStorage.setItem('token', res.data.token);
      }
      if (res !== undefined) {
           return res.data
      }
        
        
        } catch (error) {
          
          const message = (error.response && error.response.data && error.response.data.errors) || error.message || error.toString();
          
               
             return thunkAPI.rejectWithValue(message)
            
        }
    }
)


  
  export const authSlice = createSlice({
      name: 'auth',
      initialState,
    reducers: {
        logout: (state, action)=>{
           
            state.token= null,
            state.isAuthenticated= false,
            state.user= null,
            state.loading = false
          },
         reset: (state) => {
          // state.users = [];
          state.newUserStatus = ''
          state.isSuccess = false
          state.loading = false
          state.login = ''
    },
    },
    extraReducers: (builder) => {
      builder.addCase(registerUser.pending, (state) => {
          state.loading = true
          state.newUserStatus = 'pending'
        }).addCase(registerUser.fulfilled, (state, action) => {
          state.loading = false
          state.isAuthenticated = true
          state.isSuccess = true
          state.login = 'success'
          state.user = action.payload.user 
        }).addCase(registerUser.rejected, (state, action) => {
          state.loading = false
          state.newUserStatus = 'failed'
          state.isSuccess = false
          state.error = action.error
        }).addCase(logInUser.pending, (state) => {
            state.loading = true
            state.login = 'pending'
        }).addCase(logInUser.fulfilled, (state,action) => {
          state.loading = false
          state.isAuthenticated = true
          state.isSuccess = true
          state.login = 'success'
          state.user = action.payload.user
        }).addCase(logInUser.rejected, (state) => {
            state.loading = false
            state.login = 'failed'
        })
      }

  });

  export const { reset, logout } = authSlice.actions 

  export default authSlice.reducer