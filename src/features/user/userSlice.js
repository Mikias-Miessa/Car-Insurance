import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    profile: null,
    isSuccess: false,
    loading: false,
    error: null,
    updateUserStatus: '',
    newProfileStatus: '',
    deleteUserStatus:'',
  };


export const addProfile = createAsyncThunk(
  "user/addprofile",
  async (formData, thunkAPI) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    for (const entry of formData.entries()) {
      console.log('this is the form data: ', entry[0], entry[1])
    }
        setAuthToken(localStorage.token);
    try {
      const res = await axios.post('http://localhost:8000/users/profile', formData, config);
      console.log(res.data);
      return res.data;
    } catch (error) {
      
      const message =
        (error.response && error.response.data && error.response.data.errors) ||
        error.message ||
        error.toString();
      // console.log(message);

      return thunkAPI.rejectWithValue(message);
    }
  }
 )

 export const loadUser = createAsyncThunk(
    "user/loadUser",
    async (dispatch, getState) =>{


        setAuthToken(localStorage.token);
        try {
            // 
        const res = await axios.get('http://localhost:8000/users/profile');
        
        // window.location.href = 'http://localhost:3000/admin/dashboard' 
        return res.data
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
          state.updateUserStatus = ''
          state.deleteUserStatus = ''
          state.isSuccess = false
          state.loading = false
         
    },
    },
    extraReducers: (builder) => {
      builder.addCase(addProfile.pending, (state) => {
            state.loading = true
            state.newProfileStatus = 'pending'
        }).addCase(addProfile.fulfilled, (state, action) => {
            state.loading = false
            state.profile = action.payload.profile 
        }).addCase(addProfile.rejected, (state, action) => {
            state.loading = false
            state.newProfileStatus = 'failed'
            state.isSuccess = false
            state.error = action.error
        }).addCase(loadUser.pending, (state) => {
            state.loading = true
        }).addCase(loadUser.fulfilled, (state, action) =>{
            state.loading = false
            state.profile = action.payload.profile
        }).addCase(loadUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
        })
      }

  });

  export const { reset } = userSlice.actions 

  export default userSlice.reducer