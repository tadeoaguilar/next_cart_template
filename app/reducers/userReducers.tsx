import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface userLoginState {
  userId: string,
  mail: string
}

const initialState: userLoginState = {
  userId: '',
  mail: ''
}

export const userSlice = createSlice({
  name: 'userLoginReducer',
  initialState,
  reducers: {

    
    login: (state, action: PayloadAction<userLoginState>) => {
       action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  login } = userSlice.actions

export default userSlice.reducer
